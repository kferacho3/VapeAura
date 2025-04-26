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
  const [showGate, setShowGate] = useState<boolean>(!verified);

  /* brief logo intro */
  useEffect(() => {
    if (showGate) {
      const t = setTimeout(() => setShowGate(true), 1200);
      return () => clearTimeout(t);
    }
  }, [showGate]);

  const handleChoice = (isAdult: boolean) => {
    if (isAdult) {
      localStorage.setItem(LOCAL_KEY, "true");
      setVerified(true);
    } else {
      window.location.href = "https://www.fda.gov/tobacco-products"; // redirect minors
    }
  };

  if (verified) return <>{children}</>;

  return (
    <AnimatePresence mode="wait">
      {showGate && (
        <motion.div
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
        >
          <div className="max-w-sm w-full space-y-6 rounded-2xl bg-midnight p-8 text-steam shadow-2xl ring-1 ring-steam/20">
            <div className="flex justify-center">
              <Image src={VapeAuraLogo} alt="VapeAura" width={72} height={72} />
            </div>
            <h2 className="text-2xl font-semibold text-center">
              Are you 21 years of age or older?
            </h2>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleChoice(true)}
                className="w-full rounded-lg bg-brand-green py-3 font-bold text-midnight hover:brightness-110 transition"
              >
                Yes, I am 21+
              </button>
              <button
                onClick={() => handleChoice(false)}
                className="w-full rounded-lg border border-steam/60 py-3 font-bold hover:bg-steam hover:text-midnight transition"
              >
                No
              </button>
            </div>

            <p className="text-center text-xs leading-relaxed text-steam/60">
              By selecting “Yes” you confirm you are at least 21 years old and agree to our{" "}
              <a href="/privacy" className="underline hover:text-brand-green">Privacy Policy</a> and{" "}
              <a href="/terms" className="underline hover:text-brand-green">Terms of Service</a>.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
