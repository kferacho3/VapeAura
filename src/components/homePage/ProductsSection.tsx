// src/app/products/ProductsSection.tsx
"use client";

import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/productCategories";
import { useRouter } from "next/navigation";

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
        <p className="text-chrome-light mt-2">
          Hand-picked gear — click a tile to explore everything we carry.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productCategories.map((cat) => (
 <div
    key={cat.id}
    className="
      group
      p-1
      rounded-xl
      bg-transparent
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
              href={`/products?category=${encodeURIComponent(cat.id)}`}
              className="
                block
                overflow-hidden
                rounded-lg
                bg-white dark:bg-black
             
              "
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/products")}
          className="
            inline-block 
            rounded-lg 
            bg-deepsea-light 
            px-6 
            py-3 
            font-bold 
            text-white 
            hover:bg-deepsea
          "
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
