"use client";

import { BRAND_BASE, BRAND_LOGOS } from "@/data/brands";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const DISPLAY_COUNT = 12; // logos shown at once

const pickUnique = (n: number, exclude: string[] = []) => {
  const pool = BRAND_LOGOS.filter((f) => !exclude.includes(f));
  const chosen: string[] = [];
  while (chosen.length < n && pool.length) {
    const idx = Math.floor(Math.random() * pool.length);
    chosen.push(pool.splice(idx, 1)[0]);
  }
  return chosen;
};

export default function FeaturedBrandsSection() {
  const [visible, setVisible] = useState<string[]>(() =>
    pickUnique(DISPLAY_COUNT)
  );

  const replaceOne = (tileIndex: number) =>
    setVisible((prev) => {
      const fresh = pickUnique(1, prev)[0] ?? prev[tileIndex];
      return prev.map((f, i) => (i === tileIndex ? fresh : f));
    });

  useEffect(() => {
    const id = setInterval(() => {
      const idx = Math.floor(Math.random() * DISPLAY_COUNT);
      replaceOne(idx);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="brands" className="p-4">
      <h2 className="mb-6 text-center text-4xl font-extrabold text-amber-400">
        Featured&nbsp;Brands
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 mx-auto max-w-full">
        {visible.map((file, tileIdx) => (
          <div
            key={tileIdx}
            onPointerEnter={() => replaceOne(tileIdx)}
            className="
              bg-white 
              rounded-lg 
              p-2 
              relative 
              w-full 
              aspect-square 
              cursor-pointer 
              select-none

              /* realistic shadow: darker in light mode */
              shadow-lg shadow-gray-400/20 

              /* lighter, subtle shadow in dark mode */
              dark:shadow-md dark:shadow-black/40 

              /* smooth hover-scale effect */
              transform transition-transform duration-150 
              hover:scale-105
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={file}
                src={`${BRAND_BASE}/${file}`}
                alt={file.replace(".webp", "")}
                className="absolute inset-0 object-contain w-full h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                draggable={false}
              />
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
