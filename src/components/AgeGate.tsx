"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import VapeAuraLogo from "/public/VapeAuraLogo.png";

const LOCAL_KEY = "vapeaura_verified";

export default function AgeGate({ children }: { children: React.ReactNode }) {
  const [verified, setVerified] = useState<boolean>(
    () => typeof window !== "undefined" && localStorage.getItem(LOCAL_KEY) === "true"
  );
  const [stage, setStage] = useState<"logo" | "form">("logo");
  const [birth, setBirth] = useState<string>("");

  // show logo briefly, then slide in form
  useEffect(() => {
    if (!verified && stage === "logo") {
      const timer = setTimeout(() => setStage("form"), 1800);
      return () => clearTimeout(timer);
    }
  }, [verified, stage]);

  const calcAge = (d: string) =>
    Math.floor((Date.now() - new Date(d).getTime()) / (1000 * 60 * 60 * 24 * 365.25));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!birth) return;
    if (calcAge(birth) >= 21) {
      localStorage.setItem(LOCAL_KEY, "true");
      setVerified(true);
    } else {
      alert("Sorry, you must be 21 or older to enter.");
    }
  };

  if (verified) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      {stage === "logo" && (
        <motion.div
          key="logo"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <Image
            src={VapeAuraLogo}
            alt="VapeAura Logo"
            width={96}
            height={96}
            className="select-none pointer-events-none"
          />
        </motion.div>
      )}

      {stage === "form" && (
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
        >
          <div className="bg-charcoal rounded-2xl p-8 max-w-sm w-full text-silver-light shadow-2xl ring-1 ring-silver-light/20 space-y-6">
            <div className="flex justify-center">
              <Image
                src={VapeAuraLogo}
                alt="VapeAura Symbol"
                width={64}
                height={64}
              />
            </div>
            <h2 className="text-2xl font-semibold text-center">
              Welcome to VapeAura
            </h2>
            <p className="text-center text-sm">
              You must be <strong>21 years or older</strong> to enter this site.
              Please provide your date of birth below to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="date"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                max={new Date().toISOString().split("T")[0]}
                required
                className="w-full rounded-lg bg-black/50 p-3 placeholder-silver-light focus:outline-none focus:ring-2 focus:ring-neptune-light"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-neptune py-3 font-semibold text-black hover:bg-neptune-light transition"
              >
                ENTER
              </button>
            </form>

            <p className="text-center text-xs text-steam/60">
              By entering, you confirm you are of legal age. We respect your privacy
              and will never store your personal data beyond this session.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
