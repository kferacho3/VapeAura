/* ------------------------------------------------------------------
 * FeaturedBrandsSection – (Enhanced)
 * ----------------------------------------------------------------- */
"use client";

import { BRAND_BASE, BRAND_LOGOS } from "@/data/brands";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const DISPLAY_COUNT = 12;
const REFRESH_MS = 4000;
const BLUR_PX = 20;

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
  const [visible, setVisible] = useState<string[]>(() => pickUnique(DISPLAY_COUNT));

  useEffect(() => {
    const id = setInterval(() => {
      const idxToReplace = Math.floor(Math.random() * DISPLAY_COUNT);
      setVisible((prev) => {
        const fresh = pickUnique(1, prev)[0] ?? prev[idxToReplace];
        return prev.map((f, i) => (i === idxToReplace ? fresh : f));
      });
    }, REFRESH_MS);
    return () => clearInterval(id);
  }, []);

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 100, damping: 20 });
  const springY = useSpring(tiltY, { stiffness: 100, damping: 20 });

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set(((e.clientY - rect.top) / rect.height - 0.5) * -15);
    tiltY.set(((e.clientX - rect.left) / rect.width - 0.5) * 15);
  };

  const handleLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="brands"
      className="relative isolate my-24 py-16 px-4 bg-gray-50 dark:bg-black"
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      <header className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-brand-green to-brand-teal bg-clip-text text-transparent">
            Featured Brands
          </span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
          We partner with industry leaders to bring you unparalleled quality and innovation.
        </p>
      </header>
      
      <motion.div
        style={{ rotateX: springX, rotateY: springY, perspective: '1200px' }}
        className="mx-auto grid max-w-6xl gap-4 grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6 will-change-transform"
      >
        {visible.map((file, tileIdx) => (
          <motion.div
            key={tileIdx}
            whileHover={{ scale: 1.05, z: 50 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="
              group/tile relative aspect-square w-full cursor-pointer select-none rounded-xl
              bg-white  p-[1px]
              shadow-lg shadow-black/5 dark:shadow-black/20
              will-change-transform
            "
          >
            <div className="
              absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/20 to-transparent
              dark:from-white/10 dark:to-transparent opacity-50
            "/>
            <div className="
              relative h-full w-full rounded-[inherit] overflow-hidden
              bg-white backdrop-blur-sm
              ring-1 ring-inset ring-black/5 dark:ring-white/10
              transition-all duration-300 group-hover/tile:ring-brand-green
            ">
              <AnimatePresence mode="wait">
                <motion.img
                  key={file}
                  src={`${BRAND_BASE}/${file}`}
                  alt={file.replace(".webp", "")}
                  className="absolute inset-0 h-full w-full object-contain p-4"
                  initial={{ opacity: 0, filter: `blur(${BLUR_PX}px)` }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: `blur(${BLUR_PX}px)` }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  draggable={false}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 -z-10
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]
        "
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 dark:opacity-5"/>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,183,0.15)_0%,transparent_80%)] dark:opacity-60" />
      </div>
    </section>
  );
}