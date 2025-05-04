"use client";

import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type Subject =
  | "price-match"
  | "missing-product"
  | "business"
  | "general"
  | "other";

export default function ContactSection() {
  const [subject, setSubject] = useState<Subject>("general");

  const headingBySubject: Record<Subject, string> = {
    "price-match": "Price Match",
    "missing-product": "Missing Product",
    business: "Business Negotiation",
    general: "LETS CONNECT!",
    other: "Other",
  };

  const placeholderBySubject: Record<Subject, string> = {
    "price-match":
      "Please share the competitor link / price and any screenshots for verification.",
    "missing-product":
      "Tell us the item, brand, color, size, or any specifics we should locate.",
    business:
      "Introduce your company, partnership idea, or wholesale request.",
    general:
      "Drop your question, feedback, or anything else you’d like to share.",
    other: "Let us know how we can help.",
  };

  return (
    <section
      id="contact"
      className="
        mx-auto max-w-6xl my-20
        overflow-hidden rounded-3xl shadow-xl
        bg-white dark:bg-midnight
        text-midnight dark:text-steam
        p-6 md:p-12
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* ──────────────── Form Side ──────────────── */}
        <div className="order-2 md:order-1 space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold text-amber-400 uppercase">
            {headingBySubject[subject]}
          </h2>

          {/* dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="subject" className="font-semibold">
              Subject&nbsp;:
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value as Subject)}
              className="rounded-md border border-steam/60 bg-transparent px-3 py-1.5"
            >
              <option value="price-match">Price Match</option>
              <option value="missing-product">Missing Product</option>
              <option value="business">Business Negotiations</option>
              <option value="general">General Questions</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* form */}
          <form
            action="https://formspree.io/f/your-id" /* replace with real endpoint */
            method="POST"
            encType="multipart/form-data"
            className="space-y-4"
          >
            <input type="hidden" name="subject" value={subject} />
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

            {/* optional attachment (helps for price‑match screenshots) */}
            {subject === "price-match" && (
              <label className="block text-sm font-medium">
                Attach proof (image/PDF):
                <input
                  type="file"
                  name="attachment"
                  accept="image/*,application/pdf"
                  className="mt-2 w-full rounded-lg border p-2 file:mr-4 file:rounded file:border-0 file:bg-brand-green file:p-2 file:text-midnight"
                />
              </label>
            )}

            <textarea
              name="message"
              required
              rows={5}
              placeholder={placeholderBySubject[subject]}
              className="w-full rounded-lg border p-3"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-green py-3 font-bold text-midnight hover:brightness-110 transition"
            >
              Send&nbsp;Message
            </button>
          </form>

          {/* socials */}
          <ul className="flex items-center gap-6 pt-2">
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

        {/* ──────────────── Hero Image Side ──────────────── */}
        <div className="order-1 md:order-2 relative w-full aspect-square overflow-hidden rounded-2xl">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraContact.webp"
            alt="Contact Aura Hemp & Vapor"
            fill
            className="object-cover object-center"
            sizes="(max-width:768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
