/* ------------------------------------------------------------------
 *  Navbar – all copy & icons adapt to ThemeProvider.theme
 * ----------------------------------------------------------------- */
"use client";

import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdPriceCheck } from "react-icons/md";
import Sidebar from "./Sidebar";
import { useTheme } from "./ThemeProvider";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

const STORE_HOURS = "Open 9 AM – 5 PM Mon–Fri";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const { theme, toggleTheme } = useTheme(); // "light" | "dark"

  useEffect(() => setReady(true), []);

  /*  ← DO NOT CHANGE THIS LINE  */
  const MotionComp = ready ? motion.header : "header";

  /* dynamic colour helpers */
  const bgClass  = theme === "dark" ? "bg-black" : "bg-white/95 backdrop-blur-md";
  const textMain = theme === "dark" ? "text-steam" : "text-midnight";

  return (
    <>
      {/* ────────── NAVBAR ────────── */}
      <MotionComp
        {...(ready && {
          initial: { y: -24, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { type: "spring", stiffness: 260, damping: 24 },
        })}
        className={cn("fixed inset-x-0 top-0 z-30 transition-colors", bgClass)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/AuraHempVapeLogo.png"
              alt="Aura Hemp & Vapor logo"
              width={70}
              height={26}
              priority
            />
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex grow items-center justify-center space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-semibold tracking-wide transition hover:text-brand-green",
                  textMain
                )}
              >
                {label}
              </Link>
            ))}

            <Link
              href="/price-match"
              className="inline-flex items-center space-x-2 rounded-md bg-brand-green/90 px-4 py-1.5 text-xs font-bold uppercase transition-transform hover:scale-105 hover:bg-brand-green"
            >
              <MdPriceCheck className="text-base" />
              <span className={textMain}>Price Match</span>
            </Link>

            <Link
              href="/custom-inquiry"
              className={cn(
                "inline-flex items-center space-x-2 rounded-md px-4 py-1.5 text-xs font-bold uppercase transition-transform hover:scale-105 border",
                theme === "dark"
                  ? "border-steam/40 bg-transparent"
                  : "border-steam/60 bg-steam/20 hover:bg-steam"
              )}
            >
              <HiOutlineClipboardList className="text-base text-brand-green" />
              <span className={textMain}>Missing Product?</span>
            </Link>
          </nav>

          {/* utilities */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+15551234567"
              className={cn(
                "text-sm font-semibold tracking-wide transition hover:text-brand-green",
                textMain
              )}
            >
              (555) 123-4567
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle light / dark mode"
              className={cn("text-xl transition-colors hover:text-brand-green", textMain)}
            >
              {theme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
          </div>

          {/* hamburger (mobile) */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className={cn(
              "md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green",
              textMain
            )}
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-current origin-center transition-transform",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block my-[3px] h-0.5 w-6 bg-current transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current origin-center transition-transform",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>
      </MotionComp>

      {/* ────────── BANNER ────────── */}
      <div className="fixed inset-x-0 top-[90px] z-20 bg-brand-gradient px-4 py-2 text-center shadow-md shadow-neptune-light/30">
        <p className="space-x-4 text-sm font-bold uppercase tracking-wide text-white">
          <span>{STORE_HOURS}</span> <span>|</span>
          <span>Orders after Fri 4 PM ship Mon</span> <span>|</span>
          <span>Email support@vapeaura.shop</span>
        </p>
      </div>

      {/* ────────── SIDEBAR ────────── */}
      <AnimatePresence>
        {open && <Sidebar close={() => setOpen(false)} links={NAV_LINKS} />}
      </AnimatePresence>
    </>
  );
}
