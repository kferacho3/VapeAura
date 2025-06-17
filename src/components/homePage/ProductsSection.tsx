/* ------------------------------------------------------------------
 *  ProductsSection  –  Category showcase with luxe hover reveals
 * ----------------------------------------------------------------- */
"use client";

import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/productCategories";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

const COMING_SOON = new Set(["Tobacco", "CBD / Hemp"]);

/* ────────────────────────────────────────────────────────────── */
export default function ProductsSection() {
  const router = useRouter();

  return (
    <section id="products" className="relative isolate my-28">
      {/* decorative background grid + glow */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0 -z-10
          before:absolute before:inset-0 before:bg-[url('/grid.svg')] before:opacity-5
          after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_center,rgba(0,255,183,0.1),transparent_70%)]
        "
      />

      {/* header */}
      <header className="mb-14 text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Browse by&nbsp;
          <span className="bg-gradient-to-r from-brand-green to-brand-teal bg-clip-text text-transparent">
            Category
          </span>
        </h2>
        <p className="text-chrome-light">
          Hand-picked gear — tap a tile to explore everything we carry.
        </p>
      </header>

      {/* responsive grid */}
      <motion.div
        layout
        className="mx-auto grid gap-8 max-w-6xl px-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {productCategories.map((cat) => {
          const soon = COMING_SOON.has(cat.id);
          return (
            <motion.div
              key={cat.id}
              layout
              whileHover={{ scale: 1.06, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 150, damping: 14 }}
              className="
                relative rounded-2xl p-[2px] select-none
                bg-gradient-to-br from-steam/10 to-steam/5
                hover:from-brand-green hover:to-brand-teal
                motion-reduce:transform-none
                will-change-transform
              "
              onClick={() => {
                if (!soon)
                  router.push(`/products?category=${encodeURIComponent(cat.id)}`);
              }}
            >
              {/* inner card */}
              <div
                className="
                  rounded-[inherit] bg-white dark:bg-black overflow-hidden
                  transition-shadow duration-300 shadow-lg hover:shadow-xl
                "
              >
                <ProductCard
                  product={{
                    ...cat,
                    id: cat.id,
                    name: cat.name,
                    description: "",
                    image: cat.image,
                    category: cat.id,
                  }}
                  isCategory
                  className="block h-full"
                />
              </div>

              {/* COMING SOON overlay */}
              <AnimatePresence>
                {soon && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                      absolute inset-0 flex items-center justify-center
                      backdrop-blur-sm bg-black/50 rounded-[inherit]
                    "
                  >
                    <span className="text-xl font-extrabold tracking-wider text-steam">
                      COMING&nbsp;SOON
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* CTA button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mt-14 text-center"
      >
        <button
          onClick={() => router.push("/products")}
          className="
            inline-flex items-center justify-center gap-2
            rounded-full bg-brand-green px-10 py-3 text-midnight font-extrabold
            shadow-lg shadow-brand-green/30
            hover:brightness-110 focus-visible:outline-offset-2 transition
          "
        >
          View&nbsp;All&nbsp;Products
        </button>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
 *  Tailwind additions (optional but recommended)
 *
 *  /* perspective for 3-D tilt (if not already global) * /
 *  .will-change-transform { will-change: transform; }
 * ----------------------------------------------------------------- */
