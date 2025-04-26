// src/components/homePage/HeroSection.tsx
"use client";

import Link from "next/link";
import { useRef } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdPriceCheck } from "react-icons/md";
import RequestItemModal from "./RequestItemModal";


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
          <div className="card__image flex flex-col items-center justify-center bg-neptune/40 text-steam p-6 space-y-1">
            <div className="text-amber-400">{icon}</div>
            <h3 className="text-amber-400 text-2xl font-extrabold text-center">
              {title}
            </h3>
            <div className="text-center text-sm leading-relaxed">
              {children}
            </div>
          </div>
          <div className="card__layer1" />
          <div className="card__layer2" />
        </div>
      </div>
    </div>
  );
}

export default function InfoCardsSection() {
    return (
      <section
        id="hero"
        className="
         flex flex-col items-center justify-start
          bg-gradient-to-b from-black via-black to-neptune-light/30
          text-steam px-4 pt-5 pb-10 space-y-10   rounded-3xl
        "
      >


  
        {/* INFO CARDS */}
        <div className="grid gap-8 w-full max-w-6xl pt-4 sm:grid-cols-3">
          <InteractiveCard icon={<MdPriceCheck size={48} />} title="PRICE MATCH">
            <p className="text-sm leading-relaxed">
              Price match guarantee — we’ll meet or beat Xhale, Cloud9, and any other big
              chain without sacrificing quality.
            </p>
          </InteractiveCard>
  
          <InteractiveCard icon={<FiSearch size={48} />} title="REQUEST MISSING ITEM">
            <p className="text-sm leading-relaxed">
              Don’t see what you want? Shoot me a note and I’ll source it for you. We accept all kinds of request and inquiries!
            </p>
          </InteractiveCard>
  
          <InteractiveCard icon={<AiOutlinePhone size={48} />} title="CONTACT ME">
            <div className="space-y-0 text-sm leading-relaxed">
              <div className="flex items-center space-x-2">
                <AiOutlinePhone />
                <a href="tel:+15551234567" className="underline">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineMail />
                <a href="mailto:info@vapeaura.com" className="underline">
                  info@vapeaura.com
                </a>
              </div>
              <div className="flex justify-center space-x-4 pt-2">
                <a href="https://facebook.com/vapeaura" target="_blank" rel="noreferrer">
                  <FaFacebook size={24} />
                </a>
                <a href="https://instagram.com/vapeaura" target="_blank" rel="noreferrer">
                  <FaInstagram size={24} />
                </a>
                <a href="https://twitter.com/vapeaura" target="_blank" rel="noreferrer">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </InteractiveCard>
        </div>
  
        {/* CTA + LINKS */}
        <div className="flex  flex-col sm:flex-row items-center gap-4">
          <Link
            href="#products"
            className="rounded bg-steam text-black px-8 py-3 font-semibold hover:bg-steam/90 transition"
          >
            Browse Products
          </Link>
          <RequestItemModal />
          <Link
            href="/custom-inquiry"
            className="rounded border border-amber-400 text-amber-400 px-6 py-2 font-semibold hover:bg-amber-400/20 transition"
          >
            Custom Inquiry Page
          </Link>
        </div>
      </section>
    );
  }