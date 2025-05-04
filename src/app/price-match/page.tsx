/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// ───────────────────────────────────────────────────────────
// simple fade / blur animation variants
const fade = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    filter: "blur(12px)",
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

export default function PriceMatchPage() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Find a Better Price",
      text: "Locate the exact item you want on a competitor site at a lower advertised price.",
      img: "https://vapeaura.s3.us-east-2.amazonaws.com/illustrations/step1.webp",
    },
    {
      title: "Gather Proof",
      text: "Copy the link and take a screenshot (or PDF) clearly showing the lower price.",
      img: "https://vapeaura.s3.us-east-2.amazonaws.com/illustrations/step2.webp",
    },
    {
      title: "Submit & Relax",
      text: "Upload the proof below. We verify within 24 hrs and match or beat that price.",
      img: "https://vapeaura.s3.us-east-2.amazonaws.com/illustrations/step3.webp",
    },
  ];

  const next = () => setStep((s) => (s + 1) % steps.length);
  const prev = () =>
    setStep((s) => (s - 1 + steps.length) % steps.length);

  return (
    <main className="min-h-screen mt-40 bg-parchment dark:bg-midnight text-midnight dark:text-steam">
      {/* ─────────────────── Hero row ─────────────────── */}
      <div className="flex flex-col lg:flex-row">
        {/* left / hero image */}
        <div className="relative w-full lg:w-1/2 h-[340px] lg:h-[600px]">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraPriceMatch.webp"
            alt="Price‑match guarantee"
            fill
            className="object-cover"
            priority
          />

          {/* overlay copy */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 flex flex-col justify-end bg-black/45 backdrop-blur-sm p-8 sm:p-12 space-y-4"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-amber-400">
              PRICE MATCH GUARANTEED!
            </h1>
            <p className="max-w-md leading-relaxed text-lg">
              Found it cheaper somewhere else? Upload proof and we’ll match or
              beat the price. No hoops, no loyalty cards.
            </p>

            {/* HOW IT WORKS button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="self-start rounded-lg bg-amber-400 px-6 py-3 font-bold text-black hover:bg-amber-300 transition"
            >
              HOW IT WORKS
            </button>
          </motion.div>
        </div>

        {/* right / form column */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12">
          {sent ? (
            <motion.p
              variants={fade}
              initial="hidden"
              animate="visible"
              className="text-2xl font-semibold text-center text-brand-green"
            >
              ✅ Thanks! We’ll verify and contact you within 24 hrs.
            </motion.p>
          ) : (
            <motion.form
              variants={fade}
              initial="hidden"
              animate="visible"
              action="https://formspree.io/f/your-id" /* replace */
              method="POST"
              encType="multipart/form-data"
              className="space-y-6"
              onSubmit={() => setSent(true)}
            >
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
                name="product"
                required
                placeholder="Product you want"
                className="w-full rounded-lg border p-3"
              />
              <input
                name="myPrice"
                required
                placeholder="Price on Aura Hemp & Vapor ($)"
                className="w-full rounded-lg border p-3"
              />
              <input
                name="competitorPrice"
                required
                placeholder="Competitor price ($)"
                className="w-full rounded-lg border p-3"
              />
              <input
                name="competitorLink"
                type="url"
                required
                placeholder="Competitor product link"
                className="w-full rounded-lg border p-3"
              />
              {/* optional proof upload */}
              <label className="block text-sm font-medium">
                Proof (image/PDF):
                <input
                  type="file"
                  name="proof"
                  accept="image/*,application/pdf"
                  className="mt-2 w-full rounded-lg border p-2 file:mr-4 file:rounded file:border-0 file:bg-brand-green file:p-2 file:text-midnight"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-lg bg-brand-green py-3 font-bold text-midnight hover:brightness-110 transition"
              >
                Submit Price‑Match Request
              </button>
            </motion.form>
          )}
        </div>
      </div>

      {/* ───────────── HOW IT WORKS MODAL ───────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* modal card */}
            <motion.div
              variants={fade}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative w-full max-w-lg bg-white dark:bg-midnight rounded-3xl p-8 md:p-10 overflow-hidden"
            >
              {/* close button */}
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-2xl hover:text-brand-green"
              >
                &times;
              </button>

              {/* slide zone */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={fade}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6 text-center"
                >
                  <h2 className="text-3xl font-extrabold text-amber-400">
                    {steps[step].title}
                  </h2>
                  <p className="leading-relaxed">{steps[step].text}</p>
                  <div className="relative w-full h-48 mx-auto">
                    <Image
                      src={steps[step].img}
                      alt={steps[step].title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* controls */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={prev}
                  className="rounded-lg bg-steam/20 px-4 py-2 hover:bg-steam/40 transition"
                >
                  ‹ Prev
                </button>
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`block h-2 w-2 rounded-full ${
                        i === step ? "bg-brand-green" : "bg-steam/40"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="rounded-lg bg-steam/20 px-4 py-2 hover:bg-steam/40 transition"
                >
                  Next ›
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
