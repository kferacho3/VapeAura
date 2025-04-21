// app/page.tsx
"use client";

import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";
import { products } from "@/data/products";
import Image from "next/image";
import { useRef } from "react";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdPriceCheck } from "react-icons/md";

type InteractiveCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

function InteractiveCard({ icon, title, children }: InteractiveCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    card.style.setProperty("--x", `${percentX}%`);
    card.style.setProperty("--y", `${percentY}%`);

    const rotateY = ((x - rect.width / 2) / rect.width) * 20;
    const rotateX = ((y - rect.height / 2) / rect.height) * -20;

    card.style.setProperty("--r-x", `${rotateY}deg`);
    card.style.setProperty("--r-y", `${rotateX}deg`);
  };

  const handleLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty("--r-x", "0deg");
    card.style.setProperty("--r-y", "0deg");
  };

  return (
    <div
      ref={ref}
      className="card"
      onPointerMove={handlePointerMove}
      onPointerLeave={handleLeave}
    >
      <div className="card__wrapper">
        <div className="card__3d">
          <div className="card__image flex flex-col items-center justify-center bg-neptune/40 text-steam p-6 space-y-3">
            {/* render icon node */}
            <div className="text-amber-400">{icon}</div>
            <h3 className="text-amber-400 text-2xl font-extrabold text-center">
              {title}
            </h3>
            <div className="text-center text-sm leading-relaxed">{children}</div>
          </div>
          <div className="card__layer1" />
          <div className="card__layer2" />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section
        id="hero"
        className="
          min-h-screen flex flex-col items-center justify-center
          bg-gradient-to-b from-black via-black to-neptune-light/5
          text-steam px-4 space-y-10
        "
      >
        {/* LOGO + SMOKE */}
        <div className="smoke-container mt-40 mb-4 w-64 h-32">
          <div className="smoke-wrap">
            <img src="/smoke.png" alt="" className="smoke" />
            <img src="/smoke.png" alt="" className="smoke2" />
            <img src="/smoke.png" alt="" className="smoke3" />
          </div>
          <Image
            src="/VapeAuraSymbol.png"
            alt="VapeAura symbol"
            fill
            priority
            className="object-contain relative z-10"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-center">
          VapeAura – VIP Vapes & Glass
        </h1>

        {/* AUTO‑SCROLL BANNER */}
        <div className="w-full max-w-5xl overflow-hidden rounded-3xl border border-steam/20">
          <ul className="banner-track flex">
            {Array.from({ length: 20 }).map((_, i) => (
              <li key={i} className="w-1/5 flex-shrink-0">
                <img
                  src={`https://vapeaura.s3.us-east-2.amazonaws.com/home/hero/banner/vaBanner${i + 1}.webp`}
                  alt={`Banner ${i + 1}`}
                  className="w-full h-40 object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        {/* INFO CARDS */}
        <div className="grid gap-8 w-full max-w-6xl pt-4 sm:grid-cols-3">
          <InteractiveCard icon={<MdPriceCheck size={48} />} title="PRICE MATCH">
            <p className="text-sm leading-relaxed">
              price match guarantee, we know we&apos;re fighting/competing against the big
              boys, but we pride ourselves on doing our best to sell you products
              at a lower cost or the same as Xhale, Cloud9, and other chains—without
              sacrificing quality.
            </p>
          </InteractiveCard>

          <InteractiveCard icon={<FiSearch size={48} />} title="REQUEST MISSING ITEM">
            <p className="text-sm leading-relaxed">
              please email, text, or call if you don&apos;t see something you like
              or available—most products can be sourced on request.
            </p>
          </InteractiveCard>

          <InteractiveCard icon={<AiOutlinePhone size={48} />} title="CONTACT ME">
            <div className="text-sm leading-relaxed space-y-2">
              <div className="flex items-center space-x-2">
                <AiOutlinePhone />
                <a href="tel:+15551234567" className="underline">
                  +1 (555) 123‑4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineMail />
                <a href="mailto:info@vapeaura.com" className="underline">
                  info@vapeaura.com
                </a>
              </div>
              <div className="flex justify-center space-x-4 pt-2">
                <a
                  href="https://facebook.com/vapeaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com/vapeaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://twitter.com/vapeaura"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </InteractiveCard>
        </div>

        <a
          href="#products"
          className="inline-block rounded bg-steam text-black px-8 py-3 font-semibold hover:bg-steam/90 transition"
        >
          Browse Products
        </a>
      </section>

      {/* Separator */}
      <div className="w-full border-t border-steam/20" />

      {/* MAIN CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-14 space-y-20">
        {/* PRODUCTS */}
        <Section title="Featured Products">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((p) =>
              ["lookah", "puffco", "g pen"].some((brand) =>
                p.name.toLowerCase().includes(brand)
              )
            )
            .slice(0, 8)
            .map((p) => (
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
  );
}
