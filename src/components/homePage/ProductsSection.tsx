"use client";

import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/productCategories";
import { useRouter } from "next/navigation";

const COMING_SOON = new Set(["Tobacco", "CBD / Hemp"]);

export default function ProductsSection() {
  const router = useRouter();

  return (
    <section id="products" className="mx-auto max-w-6xl py-16">
      <header className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold">
          BROWSE BY{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            CATEGORY
          </span>
        </h2>
        <p className="mt-2 text-chrome-light">
          Hand-picked gear — click a tile to explore everything we carry.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productCategories.map((cat) => {
          const soon = COMING_SOON.has(cat.id);
          return (
            <div
              key={cat.id}
              className="
                group relative
                p-1 rounded-xl bg-transparent
                hover:bg-gradient-to-r hover:from-brand-green hover:to-brand-teal
                hover:scale-105 transition-transform transition-colors duration-300
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
                href={
                  soon
                    ? undefined
                    : `/products?category=${encodeURIComponent(cat.id)}`
                }
                className="block overflow-hidden rounded-lg bg-white dark:bg-black"
              />

              {soon && (
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40">
                  <span className="text-xl font-extrabold tracking-wide text-white">
                    COMING&nbsp;SOON
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/products")}
          className="inline-block rounded-lg bg-deepsea-light px-6 py-3 font-bold text-white hover:bg-deepsea"
        >
          View&nbsp;All&nbsp;Products
        </button>
      </div>
    </section>
  );
}
