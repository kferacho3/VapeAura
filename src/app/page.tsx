// src/app/page.tsx
import ProductCard from "@/components/ProductCard"
import Section from "@/components/Section"
import { products } from "@/data/products"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      {/* HERO + AGE‑GATE has already run; this is just the prompt section */}
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-chrome px-4 space-y-6"
      >
        <Image
          src="/VapeAuraSymbol.png"
          alt="VapeAura symbol"
          width={128}
          height={128}
          className="w-32 h-auto mb-4"
          priority
        />

        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
          VapeAura – VIP Vapes & Glass
        </h1>

        <p className="text-lg max-w-2xl text-center">
          Curated smoke essentials — every visitor treated like a VIP.
        </p>

        <p className="text-center max-w-xl">
          Call/Text 
          <a href="tel:+15551234567" className="underline">
            +1 (555) 123‑4567
          </a>
          {" • "}Email 
          <a href="mailto:info@vapeaura.com" className="underline">
            info@vapeaura.com
          </a>
          <br />
          Don’t see what you want in stock? Drop us a line — we can source
          almost anything.
        </p>

        <p className="italic max-w-lg text-center text-chrome-dark">
          <span className="font-semibold">Price‑Match Guarantee:</span> We’ll
          beat or match Xhale, Cloud9 & other major chains — without
          sacrificing quality.
        </p>

        <a
          href="#products"
          className="mt-6 inline-block rounded bg-chrome text-black px-8 py-3 font-semibold hover:bg-chrome/90 transition"
        >
          Browse Products
        </a>
      </section>

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-14 space-y-20">
        {/* PRODUCTS */}
        <Section title="Featured Products">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Section>

        {/* PRICE‑MATCH */}
        <Section title="Price Match Guarantee">
          <p>
            We’ll beat or match any price from Xhale, Cloud9, and other major
            chains — without sacrificing quality. Just send us the link!
          </p>
        </Section>

        {/* CUSTOM ORDERS */}
        <Section title="Don’t see what you need?">
          <p>
            Text, call, or email us — we can source nearly any product on
            request.
          </p>
        </Section>

        {/* CONTACT */}
        <Section title="Contact">
          <p>
            <strong>Phone:</strong>{" "}
            <a className="hover:underline" href="tel:+15551234567">
              +1 (555) 123‑4567
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a className="hover:underline" href="mailto:info@vapeaura.com">
              info@vapeaura.com
            </a>
          </p>
        </Section>
      </div>
    </main>
  )
}
