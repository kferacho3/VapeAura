"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdSearchOff } from "react-icons/md";

type Topic = "custom" | "support";

export default function CustomInquirySection() {
  const [topic, setTopic] = useState<Topic>("custom");

  return (
    <section
      id="custom-inquiry"
      className="
        mx-auto my-16 w-full max-w-7xl
        overflow-hidden rounded-3xl shadow-xl
        p-[3px] bg-[radial-gradient(circle_at_left,_#01cc70,_#004448)]
      "
    >
      {/* inner wrapper */}
      <div className="flex flex-col lg:flex-row h-full bg-white/90 dark:bg-midnight/90 rounded-3xl">
        {/* ── Left column: hero image + quick CTA ─────────────────────── */}
        <div className="relative w-full lg:w-1/2 aspect-[4/3] lg:aspect-square order-1 lg:order-1">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraCustomInquiry.webp"
            alt="Custom product sourcing"
            fill
            className="object-cover object-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
            priority
          />

          {/* overlay CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm text-steam p-6 space-y-6">
            <MdSearchOff size={56} className="text-amber-400" />
            <h3 className="text-center text-3xl md:text-5xl font-extrabold">
              DON’T SEE WHAT YOU NEED?
            </h3>
            <Link
              href="#contact-form"
              className="rounded-lg bg-amber-400 px-8 py-4 text-black font-semibold hover:bg-amber-300 transition"
            >
              SEND A&nbsp;CUSTOM&nbsp;REQUEST
            </Link>
          </div>
        </div>

        {/* ── Right column: enquiry / support form ───────────────────── */}
        <div className="w-full lg:w-1/2 order-2 lg:order-2 p-8 sm:p-12 space-y-8 text-midnight dark:text-steam">
          <header className="space-y-3">
            <h2 className="text-4xl md:text-6xl font-extrabold text-amber-400 uppercase">
              {topic === "custom" ? "Custom Order" : "Customer Support"}
            </h2>
          </header>

          {/* topic dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="topic" className="font-semibold">
              Topic&nbsp;:
            </label>
            <select
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value as Topic)}
              className="rounded-md border border-steam/60 bg-transparent px-3 py-1.5"
            >
              <option value="custom">Custom Order</option>
              <option value="support">Support Question</option>
            </select>
          </div>

          {/* contact form */}
          <form
            id="contact-form"
            action="https://formspree.io/f/your-id" /* replace */
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="topic" value={topic} />
            <input
              name="name"
              required
              placeholder="Full name"
              className="w-full rounded-lg border p-3"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border p-3"
            />
            <input
              name="phone"
              placeholder="Phone (optional)"
              className="w-full rounded-lg border p-3"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder={
                topic === "custom"
                  ? "Tell us exactly what you’d like (brand, color, budget…)"
                  : "How can we help?"
              }
              className="w-full rounded-lg border p-3"
            />
            <button
              type="submit"
              className="w-full rounded-lg bg-brand-green py-3 font-bold text-midnight hover:brightness-110 transition"
            >
              Send&nbsp;Message
            </button>
          </form>

          {/* social links */}
          <ul className="flex items-center gap-6 pt-3">
            <a
              href="https://facebook.com/vapeaura"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-green"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://instagram.com/vapeaura"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-green"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://twitter.com/vapeaura"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-green"
            >
              <FaTwitter size={28} />
            </a>
          </ul>
        </div>
      </div>
    </section>
  );
}
