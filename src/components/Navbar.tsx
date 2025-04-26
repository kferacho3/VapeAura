// src/components/Navbar.tsx
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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // ensure motion.header only appears after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const MotionComp = isMounted ? motion.header : "header";

  return (
    <>
      {/* main header */}
      <MotionComp
        {...(isMounted
          ? {
              initial: { y: -24, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { type: "spring", stiffness: 260, damping: 24 },
            }
          : {})}
        className="fixed inset-x-0 top-0 z-30 bg-white/95 dark:bg-black/100 backdrop-blur-md transition-colors"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/VapeAuraLogo.png"
              alt="Vape Aura logo"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* desktop nav + centered CTAs */}
          <nav className="hidden md:flex grow items-center justify-center space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold tracking-wide text-midnight dark:text-steam hover:text-brand-green transition"
              >
                {label}
              </Link>
            ))}

            <Link
              href="/price-match"
              className="inline-flex items-center space-x-2 rounded-md bg-brand-green/90 px-4 py-1.5 text-xs font-bold uppercase text-midnight hover:scale-105 hover:bg-brand-green transition-transform"
            >
              <MdPriceCheck className="text-base" />
              <span>Price Match</span>
            </Link>

            <Link
              href="/request-item"
              className="inline-flex items-center space-x-2 rounded-md bg-steam/20 px-4 py-1.5 text-xs font-bold uppercase text-midnight border border-steam/60 hover:bg-steam hover:text-midnight hover:scale-105 transition-transform dark:bg-transparent dark:border-steam/40 dark:text-steam"
            >
              <HiOutlineClipboardList className="text-base text-brand-green" />
              <span>Missing Product?</span>
            </Link>
          </nav>

          {/* utility items */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="tel:+15551234567"
              className="text-sm font-semibold tracking-wide text-midnight dark:text-steam hover:text-brand-green"
            >
              (555) 123-4567
            </a>
            <button
              onClick={toggleTheme}
              aria-label="Toggle light / dark mode"
              className="text-xl text-midnight dark:text-steam hover:text-brand-green transition-colors"
            >
              {theme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
          </div>

          {/* hamburger (mobile) */}
          <button
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle menu"
            className="md:hidden text-midnight dark:text-steam focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-green"
          >
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-transform origin-center",
                open && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current my-[3px] transition-opacity",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-transform origin-center",
                open && "-translate-y-[7px] -rotate-45"
              )}
            />
          </button>
        </div>
      </MotionComp>

      {/* Price-Match banner */}
      <div className="fixed top-[90px] inset-x-0 z-20 py-2 px-4 text-center bg-brand-gradient shadow-md shadow-neptune-light/30">
        <p className="text-white font-bold uppercase text-sm tracking-wide">
          PRICE-MATCH GUARANTEE | CALL +1 (555) 123-4567 | EMAIL INFO@VAPEAURA.COM
        </p>
      </div>

      {/* sidebar for mobile */}
      <AnimatePresence>
        {open && <Sidebar close={() => setOpen(false)} links={NAV_LINKS} />}
      </AnimatePresence>
    </>
  );
}
