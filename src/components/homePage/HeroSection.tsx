/* ------------------------------------------------------------------
 *  HeroSection – Aura • Hemp & Vapor landing hero (Integrated)
 *  (banner z-index + sizing fix)                                      
 * ----------------------------------------------------------------- */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { FiArrowDown, FiCheckCircle } from "react-icons/fi";

/* ───────────── Config ───────────── */
const LOGO_SRC  = "/AuraHempVapeSymbol2.png";
const VAPER_IMG =
  "https://vapeaura.s3.us-east-2.amazonaws.com/home/background/VapeAura1.webp";

interface HeroSectionProps {
  environmentMode?: "day" | "night";
}

export default function HeroSection({
  environmentMode = "night",
}: HeroSectionProps) {
  const isNight = environmentMode === "night";

  /* scroll-driven parallax */
  const { scrollY }   = useScroll();
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentY       = useTransform(scrollY, [0, 500], [0, -80]);
  const vaperY         = useTransform(scrollY, [0, 500], [0, 50]);
  const vaperOpacity   = useTransform(scrollY, [0, 500], [1, 0.3]);
  const vaperScale     = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section
      id="hero"
      className={`
        relative isolate flex flex-col h-screen min-h-[700px] w-full overflow-hidden
        ${isNight ? "bg-black text-gray-100" : "bg-gray-50 text-gray-800"}
      `}
    >

 {/* ───────── Banner – NOW LOCKED TO 24 px ───────── */}
        {/* AUTO‑SCROLL BANNER */}
        <div className="w-full mt-[55px] max-w-screen-2xl overflow-hidden  border border-steam/20">
          <ul className="banner-track flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <li key={i} className="w-1/8 flex-shrink-0">
                <img
                  src={`https://vapeaura.s3.us-east-2.amazonaws.com/home/hero/banner/vaBanner${
                    i + 1
                  }.webp`}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-20 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>


      {/* Background radial glow */}
      <div
        aria-hidden
        className={`absolute inset-0 -z-10 ${
          isNight
            ? "bg-[radial-gradient(ellipse_at_center,_rgba(0,50,37,0.3)_0%,_transparent_60%)]"
            : "bg-[radial-gradient(ellipse_at_center,_rgba(0,255,183,0.1)_0%,_transparent_70%)]"
        }`}
      />

      {/* Main grid */}
      <div className="container mx-auto grid flex-grow items-center lg:grid-cols-2 px-4">
        {/* ───── Left / Top content ───── */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left py-12"
        >
          {/* Logo + title */}
          <div className="relative mb-6 flex flex-col items-center lg:items-start">
            <div className="smoke-container w-24 h-16 sm:w-28 sm:h-20">
              <div className="smoke-wrap">
                <img src="/smoke.png" alt="" className="smoke opacity-60" />
                <img src="/smoke.png" alt="" className="smoke2 opacity-50" />
              </div>
              <Image
                src={LOGO_SRC}
                alt="Aura Hemp & Vapor Symbol"
                fill
                priority
                className={`object-contain ${
                  isNight
                    ? "drop-shadow-[0_0_12px_rgba(0,255,183,0.6)]"
                    : ""
                }`}
              />
            </div>
            <h1
              className={`
                text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight
                ${
                  isNight
                    ? "bg-gradient-to-r from-white via-gray-200 to-amber-200 bg-clip-text text-transparent"
                    : "text-slate-900"
                }
              `}
            >
              AURA • Hemp&nbsp;&amp;&nbsp;Vapor
            </h1>
            <p className="mt-2 text-lg sm:text-xl lg:text-2xl font-semibold tracking-widest text-neptune-light/90">
              VIP&nbsp;Vapes&nbsp;&amp;&nbsp;Glass
            </p>
          </div>

          {/* Mission teaser */}
          <article
            className={`mt-6 max-w-lg space-y-4 text-base md:text-lg ${
              isNight ? "text-gray-300" : "text-slate-600"
            }`}
          >
            <h2 className="text-2xl font-bold tracking-tight text-brand-green">
              OUR PROMISE
            </h2>
            <p>
              A Georgia-based outfit delivering premium vapes, artisan glass and
              quality hemp — all while&nbsp;
              <strong>beating big-box prices.</strong>
            </p>
            <ul className="space-y-2 text-left">
              <li className="flex items-center gap-3">
                <FiCheckCircle className="flex-shrink-0 text-brand-green" />
                Price-Match&nbsp;Guarantee
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="flex-shrink-0 text-brand-green" />
                Curated&nbsp;Top-Shelf&nbsp;Selection
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="flex-shrink-0 text-brand-green" />
                Exclusive&nbsp;Hemp&nbsp;Line&nbsp;(Summer ’25)
              </li>
            </ul>
          </article>
        </motion.div>

        {/* ───── Right / Bottom visual ───── */}
        <motion.div
          style={{ y: vaperY, opacity: vaperOpacity, scale: vaperScale }}
          className="absolute inset-0 z-10 h-full w-full lg:relative"
        >
          <Image
            src={VAPER_IMG}
            alt="A person exhaling vapor"
            fill
            priority
            className="object-contain object-bottom lg:object-right-bottom opacity-50 lg:opacity-100"
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-x-0 bottom-6 z-30 flex justify-center"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className={`rounded-full p-2 ${
            isNight ? "text-white/60" : "text-black/60"
          }`}
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─────────── globals.css additions ───────────
@keyframes scroll-x {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-scroll-x { animation: scroll-x 26s linear infinite; }
*/
