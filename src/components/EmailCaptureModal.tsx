"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Local‑storage key so we don’t pester repeat visitors */
const EMAIL_KEY = "vapeaura_email_submitted";

export default function EmailCaptureModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const already = typeof window !== "undefined" && localStorage.getItem(EMAIL_KEY) === "true";
    if (!already) {           // delay 1.5 s so it’s not jarring after AgeGate
      const t = setTimeout(() => setOpen(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email") as string;

    // TODO: swap for your /api/mailchimp endpoint or BTCPay webhook
    await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    localStorage.setItem(EMAIL_KEY, "true");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="emailModal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"
        >
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-md space-y-6 rounded-2xl bg-midnight p-8 text-steam ring-1 ring-steam/20 shadow-xl"
          >
            <h3 className="text-3xl font-extrabold text-center">
              10 % OFF Your First Order
            </h3>
            <p className="text-center text-steam/70">
              Join the list and we’ll email your discount code instantly.
            </p>

            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-lg p-3 text-midnight"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-brand-green py-3 font-bold text-midnight hover:brightness-110 transition"
            >
              Claim My 10 % ➜
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="block mx-auto text-sm underline hover:text-brand-green/80"
            >
              Maybe later
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
