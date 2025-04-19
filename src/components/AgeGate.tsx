"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import VapeAuraLogo from "/public/VapeAuraLogo.png";

const LOCAL_KEY = "vapeaura_verified";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean>(
    () => typeof window !== "undefined" && localStorage.getItem(LOCAL_KEY) === "true",
  );
  const [stage, setStage] = useState<"logo" | "form">("logo");
  const [birth, setBirth] = useState<string>("");

  /* ---------- logo → form transition ---------- */
  useEffect(() => {
    if (!verified && stage === "logo") {
      const t = setTimeout(() => setStage("form"), 1900); // after fade‑in/out
      return () => clearTimeout(t);
    }
  }, [verified, stage]);

  /* ---------- helpers ---------- */
  const calcAge = (d: string) =>
    Math.floor((Date.now() - new Date(d).getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birth) return;
    if (calcAge(birth) >= 21) {
      localStorage.setItem(LOCAL_KEY, "true");
      setVerified(true);
    } else {
      alert("Sorry, you must be 21 or older.");
    }
  };

  /* ---------- RENDER ---------- */
  if (verified) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      {stage === "logo" && (
        <motion.div
          key="logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal"
        >
          <Image
            src={VapeAuraLogo}
            alt="VapeAura logo"
            priority
            className="w-48 h-auto select-none pointer-events-none"
          />
        </motion.div>
      )}

      {stage === "form" && (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-charcoal space-y-6 px-4 text-silver-light"
        >
          <h2 className="text-2xl font-semibold text-center">
            Are you 21&nbsp;years of age or older?
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-xs text-charcoal"
          >
            <input
              required
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
              className="rounded p-3 w-full"
              max={new Date().toISOString().split("T")[0]}
            />
            <button
              type="submit"
              className="rounded bg-silver-light py-2 font-bold hover:bg-silver-light/80 transition"
            >
              Enter Site
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
