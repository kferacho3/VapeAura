/* ------------------------------------------------------------------
 * MissionStatement – (Enhanced)
 * ----------------------------------------------------------------- */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  compact?: boolean;
  environmentMode?: "day" | "night";
};

export default function MissionStatement({
  compact = false,
  environmentMode = "night",
}: Props) {
  const isNight = environmentMode === "night";

  return (
    <section id="mission" className={`mx-auto w-full h-full max-w-7xl ${compact ? "p-4" : "p-6 sm:p-8 lg:p-12"}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full h-full
          rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl
          ${isNight
            ? "bg-black/40 border border-white/10 backdrop-blur-xl" // Glassmorphism for Night
            : "bg-white/60 border border-black/10 backdrop-blur-xl"  // Glassmorphism for Day
          }
        `}
      >
        {/* ───── Image ───── */}
        <div className="order-1 w-full lg:w-1/3 aspect-square flex-shrink-0">
          <div className="relative h-full w-full rounded-2xl overflow-hidden">
             <Image
              src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/AuraHempVapor.webp"
              alt="Aura Hemp & Vapor delivery vehicle"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1023px) 80vw, 30vw"
            />
          </div>
        </div>

        {/* ───── Text block ───── */}
        <article className={`order-2 lg:w-2/3 space-y-4 lg:space-y-6 ${isNight ? "text-gray-200" : "text-slate-800"}`}>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-green">
            OUR PROMISE
          </h2>
          
          <div className="space-y-4 text-base md:text-lg leading-relaxed prose prose-invert">
            <p>
              <strong>Aura Hemp &amp; Vapor</strong> is a founder-led, Georgia-based outfit delivering premium vapes, artisan glass, and quality hemp while{" "}
              <strong>consistently beating big-box prices.</strong>
            </p>

            <ul className="list-none p-0 space-y-2">
              <li className="flex items-start">
                <strong className="text-neptune-light/90 mr-3 mt-1">✓</strong>
                <span>
                  <strong>Price-Match Guarantee:</strong> Find a cheaper advertised price, and we won’t just match it—we’ll beat it.
                </span>
              </li>
              <li className="flex items-start">
                <strong className="text-neptune-light/90 mr-3 mt-1">✓</strong>
                <span>
                  <strong>Curated Selection:</strong> We stock top-shelf vaporizers, unique glass pieces, papers, torches, and more.
                </span>
              </li>
              <li className="flex items-start">
                <strong className="text-neptune-light/90 mr-3 mt-1">✓</strong>
                 <span>
                  <strong>What’s Next:</strong> Our exclusive line of premium, locally-sourced hemp is arriving this summer.
                </span>
              </li>
            </ul>

            <p className="font-semibold">
              Every order supports a local entrepreneur. Thank you for helping small business thrive.
            </p>
          </div>
        </article>
      </motion.div>
    </section>
  );
}