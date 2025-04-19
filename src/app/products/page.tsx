import ProductCard from "@/components/ProductCard"
import StickyHelpButton from "@/components/StickyHelpButton"
import { products } from "@/data/products"
import Image from "next/image"

export const metadata = {
  title: "Products | VapeAura",
  description: "Browse our full catalog of vapes, glass, rigs and accessories.",
}

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 space-y-12">
      <header className="text-center space-y-4">
        <Image
          src="/VapeAuraSymbol.png"
          alt="VapeAura symbol"
          width={72}
          height={72}
          className="mx-auto"
        />
        <h1 className="text-4xl md:text-5xl font-black tracking-tight">
          Full Catalog
        </h1>
        <p className="max-w-2xl mx-auto">
          Everything on this page is legal to sell nationwide without a tobacco
          or hemp license. Need something custom? Just ask!
        </p>
      </header>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </section>

      {/* sticky helper */}
      <StickyHelpButton />
    </main>
  )
}
