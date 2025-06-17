// src/components/SmokeCursorBackground.tsx
"use client";

import { useTheme } from "@/components/ThemeProvider";
import { useFBO } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

/* ------------------------------------------------------------------ *
 *  CONSTANTS                                                         *
 * ------------------------------------------------------------------ */
const PUFF_SZ  = 0.008;      // tight radius  ≈ cursor size
const FLOW     = 0.01;      // curl flow speed
const CURL_Z   = 0.25;       // curl strength
const CLEAR_T  = 0.01;       // alpha below → kill
const NOISE_S  = 50.0;       // higher → finer noisy rim

/* full-screen quad VS */
const quadVS = /* glsl */`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy,0.,1.); }
`;

/* -------------------------------------------------- *
 *  RTT: inject puffs + curl advection                *
 * -------------------------------------------------- */
const trailFS = /* glsl */`
precision mediump float;

varying vec2  vUv;
uniform sampler2D uPrev;
uniform vec2  uMouse;         // −1 when off-canvas
uniform float uTime, uFade;

/* --------------- noise helpers (iq) --------------- */
float hash(vec2 p){ return fract(sin(dot(p,vec2(23.3,91.7)))*43758.5); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f*=f*(3.-2.*f);
  float n=i.x+i.y*57.;
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),
             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),f.x),f.y); }
float fbm(vec2 p){ float a=.5, s=0.; for(int i=0;i<4;i++){ s+=a*noise(p); p*=2.; a*=.5;} return s; }

void main(){
  /* previous frame (already faded) */
  float prev = texture2D(uPrev, vUv).r * uFade;

  /* -------- puff injection (soft, noisy Gaussian) -------- */
  float puff = 0.0;
  if(uMouse.x >= 0.0){
    float d = distance(vUv, uMouse);               // UV distance
    float g = exp(-pow(d/${PUFF_SZ}, 2.0) * 4.0);  // Gaussian profile
    float edgeNoise = 0.6 + 0.4*noise(vUv*${NOISE_S}.0 + uTime*10.0);
    puff = g * edgeNoise;
  }

  /* -------- curl-noise advection -------- */
  vec2 n   = vUv*5.0;
  vec2 curl = vec2(
      fbm(n + uTime*${CURL_Z}) - fbm(n + vec2(0.5) - uTime*${CURL_Z}),
      fbm(n.yx - uTime*${CURL_Z}) - fbm(n.yx + vec2(0.5) + uTime*${CURL_Z})
  ) * ${FLOW};

  float adv = texture2D(uPrev, vUv - curl).r * uFade;

  /* -------- compose & hard-clip faint remnants -------- */
  float height = max(max(prev, adv), puff);
  height *= step(${CLEAR_T}, height);

  gl_FragColor = vec4(height, 0.0, 0.0, 1.0);
}
`;

/* -------------------------------------------------- *
 *  DISPLAY SHADER – teal→green smoke with shading    *
 * -------------------------------------------------- */
const smokeFS = /* glsl */`
precision mediump float;

varying vec2  vUv;
uniform sampler2D uHeight;
uniform vec2  uRes;
uniform vec3  uLight, uTint;

#define TEX(uv) texture2D(uHeight, uv).r

void main(){
  float h = TEX(vUv);
  if(h < ${CLEAR_T}) discard;               // nothing → fully transparent

  /* normal from height field (cheap Sobel) */
  float px = 1.0 / uRes.y;
  vec3  n  = normalize(vec3(
    TEX(vUv - vec2(px,0.)) - TEX(vUv + vec2(px,0.)),
    TEX(vUv - vec2(0.,px)) - TEX(vUv + vec2(0.,px)),
    0.12));

  float diff = clamp(dot(n, normalize(uLight)), 0.0, 1.0);

  vec3 col = mix(vec3(0.0,0.267,0.282), vec3(0.004,0.8,0.439), h); // teal → green
  col = mix(col, uTint, diff * 0.4);

  float a = smoothstep(${CLEAR_T}, 0.08, h);  // delicate alpha curve
  gl_FragColor = vec4(col, a);
}
`;

/* ------------------------------------------------------------------ *
 *  MAIN COMPONENT                                                    *
 * ------------------------------------------------------------------ */
export default function SmokeCursorBackground() {
  const { theme } = useTheme();
  const bgRGB  = theme === "dark" ? 0x000000 : 0xffffff;

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
      gl={{ alpha: false, antialias: false }}
      camera={{ fov: 75, position: [0, 0, 1000] }}
      resize={{ debounce: { scroll: 50, resize: 0 } }}
      frameloop="always"
    >
      <SmokeSystem bg={bgRGB} />
    </Canvas>
  );
}

/* ------------------------------------------------------------------ *
 *  SMOKE SYSTEM                                                      *
 * ------------------------------------------------------------------ */
function SmokeSystem({ bg }: { bg: number }) {
  const { size, gl, camera, clock, scene } = useThree();
  const { width, height } = size;

  /* -------- lifetime / fade math -------- */
  const isMobile =
    typeof navigator !== "undefined" &&
    /Mobi|Android|iPhone|iPad|iPod|IEMobile|Windows Phone|BlackBerry|Opera Mini/i.test(
      navigator.userAgent
    );
  const lifetimeSec = isMobile ? 5 : 10;
  const DECAY_K     = Math.log(1e-3);         // 0.1 % after lifetime
  const fadePer     = (dt: number) => Math.exp((DECAY_K * dt) / lifetimeSec);

  /* -------- ping-pong render targets -------- */
  const rtA = useFBO({ depthBuffer: false });
  const rtB = useFBO({ depthBuffer: false });
  useEffect(() => { rtA.setSize(width, height); rtB.setSize(width, height); }, [width, height]);
  const write = useRef<THREE.WebGLRenderTarget>(rtA);
  const read  = useRef<THREE.WebGLRenderTarget>(rtB);

  /* -------- RTT material -------- */
  const trailMat = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: quadVS,
    fragmentShader: trailFS,
    uniforms: {
      uPrev : { value: read.current.texture },
      uMouse: { value: new THREE.Vector2(-1, -1) },
      uTime : { value: 0 },
      uFade : { value: 1 }
    }
  }), []);

  /* pointer → UV */
  useEffect(() => {
    const canvas = gl.domElement;
    const setUV  = (x: number, y: number) => trailMat.uniforms.uMouse.value.set(x, y);

    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      setUV((e.clientX - r.left) / r.width, 1.0 - (e.clientY - r.top) / r.height);
    };
    const leave = () => setUV(-1, -1);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
    };
  }, [gl, trailMat]);

  /* RTT scene */
  const rttScene = useMemo(() => {
    const s = new THREE.Scene();
    s.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), trailMat));
    return s;
  }, [trailMat]);

  /* display material */
  const dispMat = useMemo(() => new THREE.ShaderMaterial({
    vertexShader: quadVS,
    fragmentShader: smokeFS,
    transparent: true,
    depthWrite : false,
    uniforms: {
      uHeight: { value: read.current.texture },
      uRes   : { value: new THREE.Vector2(width, height) },
      uLight : { value: new THREE.Vector3(0.3, 0.8, 1.0) },
      uTint  : { value: new THREE.Color(0x01cc70) }
    }
  }), [width, height]);

  /* set renderer & scene background (no `any` cast) */
  useEffect(() => {
    gl.setClearColor(bg);
    scene.background = new THREE.Color(bg);
    if (scene.fog) scene.fog.color.set(bg);
  }, [bg, gl, scene]);

  /* main frame loop */
  useFrame((_, dt) => {
    /* update fade + time */
    trailMat.uniforms.uFade.value = fadePer(dt);
    trailMat.uniforms.uPrev.value = read.current.texture;
    trailMat.uniforms.uTime.value = clock.elapsedTime;

    /* run RTT pass */
    gl.setRenderTarget(write.current);
    gl.render(rttScene, camera);
    gl.setRenderTarget(null);
    [read.current, write.current] = [write.current, read.current];

    /* refresh display texture */
    dispMat.uniforms.uHeight.value = read.current.texture;
  });

  /* render full-screen quad */
  return (
    <mesh scale={[width, height, 1]} position={[0, 0, -10]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={dispMat} attach="material" />
    </mesh>
  );
}
