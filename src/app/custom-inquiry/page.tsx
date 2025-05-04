/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdSearchOff } from "react-icons/md";

type Category =
  | "glass"
  | "vapes"
  | "accessories"
  | "hemp"
  | "other";

export default function CustomInquiryPage() {
  const [cat, setCat] = useState<Category>("glass");
  const [sent, setSent] = useState(false);

  const headingByCat: Record<Category, string> = {
    glass: "Request Glassware",
    vapes: "Request E‑Vape",
    accessories: "Request Accessory",
    hemp: "Request Hemp / CBD",
    other: "Request Other Item",
  };

  const placeholderByCat: Record<Category, string> = {
    glass:
      "Describe the glass piece (type, height, perc style, color, brand, budget…).",
    vapes:
      "Tell us the vape brand/model, desired color, coil preference, etc.",
    accessories:
      "Torch, grinder, rolling tray—let us know specs & preferred brand.",
    hemp:
      "Flower, pre‑rolls, gummies? Include strain, potency, size, budget.",
    other: "Describe what you need in detail—we’ll hunt it down!",
  };

  // simple fade animation
  const fade = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6 },
    }),
  };

  return (
    <main className="min-h-screen bg-[#fcf2e5] dark:bg-midnight text-midnight dark:text-steam py-20">
      <div className="mx-auto w-full max-w-7xl flex flex-col lg:flex-row rounded-3xl shadow-xl overflow-hidden">

        {/* ───────────── Hero Image Side ───────────── */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="visible"
          custom={0}
          className="relative w-full lg:w-1/2 h-[340px] lg:h-[600px]"
        >
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraCustomInquiry.webp"
            alt="Custom product sourcing"
            fill
            className="object-cover"
            priority
          />

          {/* overlay CTA */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/45 backdrop-blur-sm text-steam p-8 sm:p-12 space-y-6">
            <MdSearchOff size={64} className="text-amber-400" />
            <h1 className="text-center text-4xl sm:text-5xl font-extrabold">
              DON’T SEE WHAT YOU NEED?
            </h1>
            <p className="max-w-md text-center leading-relaxed">
              Tell us exactly what you’re after—we’ll track it down and beat big‑box pricing.
            </p>
          </div>
        </motion.div>

        {/* ───────────── Form Side ───────────── */}
        <div className="w-full lg:w-1/2 bg-white/90 dark:bg-midnight/90 p-8 sm:p-12 space-y-8">
          {sent ? (
            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-2xl font-semibold text-center text-brand-green"
            >
              ✅ Request received! We’ll email you within 24 hrs.
            </motion.p>
          ) : (
            <>
              <motion.h2
                variants={fade}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-3xl md:text-5xl font-extrabold text-amber-400 uppercase"
              >
                {headingByCat[cat]}
              </motion.h2>

              {/* category dropdown */}
              <motion.div
                variants={fade}
                initial="hidden"
                animate="visible"
                custom={2}
                className="flex items-center gap-3"
              >
                <label htmlFor="cat" className="font-semibold">
                  Category&nbsp;:
                </label>
                <select
                  id="cat"
                  value={cat}
                  onChange={(e) => setCat(e.target.value as Category)}
                  className="rounded-md border border-steam/60 bg-transparent px-3 py-1.5"
                >
                  <option value="glass">Glassware</option>
                  <option value="vapes">E‑Vapes</option>
                  <option value="accessories">Accessories</option>
                  <option value="hemp">Hemp / CBD</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>

              {/* form */}
              <motion.form
                variants={fade}
                initial="hidden"
                animate="visible"
                custom={3}
                action="https://formspree.io/f/your-id" /* replace */
                method="POST"
                encType="multipart/form-data"
                className="space-y-4"
                onSubmit={() => setSent(true)}
              >
                <input type="hidden" name="category" value={cat} />
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

                {/* optional reference link */}
                <input
                  name="referenceLink"
                  type="url"
                  placeholder="Reference product link (optional)"
                  className="w-full rounded-lg border p-3"
                />

                {/* optional attachment */}
                <label className="block text-sm font-medium">
                  Upload reference photo (optional):
                  <input
                    type="file"
                    name="attachment"
                    accept="image/*,application/pdf"
                    className="mt-2 w-full rounded-lg border p-2 file:mr-4 file:rounded file:border-0 file:bg-brand-green file:p-2 file:text-midnight"
                  />
                </label>

                <textarea
                  name="details"
                  required
                  rows={6}
                  placeholder={placeholderByCat[cat]}
                  className="w-full rounded-lg border p-3"
                />

                <button
                  type="submit"
                  className="w-full rounded-lg bg-brand-green py-3 font-bold text-midnight hover:brightness-110 transition"
                >
                  Send Request
                </button>
              </motion.form>

              {/* socials */}
              <motion.ul
                variants={fade}
                initial="hidden"
                animate="visible"
                custom={4}
                className="flex items-center gap-6 pt-2"
              >
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
              </motion.ul>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
