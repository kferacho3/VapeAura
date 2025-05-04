"use client";

import Image from "next/image";
import MissionStatement from "./MissionStatement"; // <‑‑ newly added

export default function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="
          flex flex-col items-center
          bg-gradient-to-b from-black via-black to-neptune-light/5
          text-steam px-0 pt-20 space-y-1 rounded-3xl
        "
      >
        {/* LOGO + SMOKE */}
        <div className="smoke-container mb-0 w-32 h-16">
          <div className="smoke-wrap">
            <img src="/smoke.png" alt="" className="smoke" />
            <img src="/smoke.png" alt="" className="smoke2" />
            <img src="/smoke.png" alt="" className="smoke3" />
          </div>
          <Image
            src="/AuraHempVapeSymbol2.png"
            alt="VapeAura symbol"
            fill
            priority
            className="object-contain relative z-10"
          />
        </div>

        <h1 className="text-3xl px-5 md:text-4xl font-black tracking-tight text-center">
          AURA • Hemp&nbsp;&amp;&nbsp;Vapor – VIP&nbsp;Vapes &amp; Glass
        </h1>

        {/* AUTO‑SCROLL BANNER */}
        <div className="w-full max-w-screen-2xl overflow-hidden rounded-3xl border border-steam/20">
          <ul className="banner-track flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <li key={i} className="w-1/8 flex-shrink-0">
                <img
                  src={`https://vapeaura.s3.us-east-2.amazonaws.com/home/hero/banner/vaBanner${
                    i + 1
                  }.webp`}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-24 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission Statement immediately follows hero */}
      <MissionStatement />
    </>
  );
}
