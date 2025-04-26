// src/components/ProductCard.tsx
"use client";

import { cn } from "@/lib/cn";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: Product;
  isCategory?: boolean;
  href?: string;
  className?: string;
}

export default function ProductCard({
  product,
  isCategory,
  href,
  className,
}: CardProps) {
  const Wrapper = href ? Link : "div";

  if (!isCategory) {
    // — PRODUCT MODE (unchanged) —
    const label = product.soldOut
      ? "Sold Out"
      : product.priceMatch
      ? "Price Match"
      : "Buy Now";

    return (
      <div className="rounded-xl bg-chrome/5 backdrop-blur p-6 flex flex-col border border-chrome/10 hover:border-chrome/20 transition">
        <div className="relative aspect-[4/3] mb-4">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-chrome-dark flex-1">
          {product.description}
        </p>
        <a
          href={product.buyUrl ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "mt-6 inline-block rounded-lg px-4 py-2 text-center text-sm font-bold transition",
            product.soldOut
              ? "cursor-not-allowed bg-chrome/20 text-chrome-dark"
              : product.priceMatch
              ? "bg-amber-500 hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-chrome"
              : "bg-deepsea-light hover:bg-deepsea focus-visible:outline focus-visible:outline-2 focus-visible:outline-chrome"
          )}
          aria-disabled={product.soldOut}
        >
          {label}
        </a>
      </div>
    );
  }

  // — CATEGORY MODE —
  return (
    <Wrapper
      href={href!}
      className={cn("relative", className)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:768px) 45vw, 15vw"
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
          priority
        />
        <span className="absolute inset-0 z-10 flex items-start justify-center pt-3 text-lg font-bold tracking-wide text-white drop-shadow">
          {product.name}
        </span>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
      </div>
    </Wrapper>
  );
}
