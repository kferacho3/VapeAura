import ProductCard from "@/components/ProductCard";
import { productCategories } from "@/data/productCategories";
import { products } from "@/data/products";
import Link from "next/link";
import { Suspense } from "react";

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const active = searchParams?.category;
  const filtered =
    active && active !== "All"
      ? products.filter((p) => p.category === active)
      : products;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16 space-y-12">
      {/* FILTER BAR */}
      <nav className="flex flex-wrap gap-3 justify-center">
        <FilterLink label="All" active={active === undefined || active === "All"} />
        {productCategories.map((c) => (
          <FilterLink key={c.id} label={c.id} active={c.id === active} />
        ))}
      </nav>

      {/* PRODUCT GRID */}
      <Suspense fallback={<p>Loading…</p>}>
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </section>
      </Suspense>
    </main>
  );
}

/* ------------ helpers ------------ */
function FilterLink({
  label,
  active,
}: {
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={label === "All" ? "/products" : `/products?category=${encodeURIComponent(label)}`}
      className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
        active
          ? "bg-amber-500 text-black"
          : "bg-chrome/10 text-chrome-light hover:bg-chrome/20"
      }`}
    >
      {label}
    </Link>
  );
}
