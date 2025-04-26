// src/components/homePage/HeroSection.tsx
"use client";

import Image from "next/image";




export default function HeroSection() {
    return (
      <section
        id="hero"
        className="
        flex flex-col items-center justify-start
          bg-gradient-to-b from-black via-black to-neptune-light/5
          text-steam px-0 pt-40 space-y-3       rounded-3xl
        "
      >
        {/* LOGO + SMOKE */}
        <div className="smoke-container mb-4 w-64 h-32">
          <div className="smoke-wrap">
            <img src="/smoke.png" alt="" className="smoke" />
            <img src="/smoke.png" alt="" className="smoke2" />
            <img src="/smoke.png" alt="" className="smoke3" />
          </div>
          <Image
            src="/VapeAuraSymbol.png"
            alt="VapeAura symbol"
            fill
            priority
            className="object-contain relative z-10"
          />
        </div>
  
        <h1 className="text-5xl px-5 md:text-6xl font-black tracking-tight text-center">
          VapeAura – VIP Vapes & Glass
        </h1>
  
        {/* AUTO-SCROLL BANNER (wider) */}
        <div className="w-full max-w-screen-2xl overflow-hidden rounded-3xl border border-steam/20">
          <ul className="banner-track flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <li key={i} className="w-1/5 flex-shrink-0">
                <img
                  src={`https://vapeaura.s3.us-east-2.amazonaws.com/home/hero/banner/vaBanner${
                    i + 1
                  }.webp`}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
  

      </section>
    );
  }