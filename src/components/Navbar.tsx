"use client"

import { cn } from "@/lib/cn"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Sidebar from "./Sidebar"

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* motion header fades + drops in */}
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="fixed inset-x-0 top-0 z-30 bg-black/70 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* --- brand mark --- */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/VapeAuraLogo.png" /* full wordmark; 120×32 transparent */
              alt="Vape Aura logo"
              width={120}
              height={32}
              priority
            />
          </Link>

          {/* --- desktop nav links --- */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-semibold tracking-wide text-chrome hover:text-deepsea-light transition"
              >
                {label}
              </Link>
            ))}
            <a
              href="tel:+15551234567"
              className="text-sm font-semibold tracking-wide text-chrome hover:text-deepsea-light"
            >
              (555) 123‑4567
            </a>
          </nav>

          {/* --- hamburger --- */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden text-chrome focus-visible:outline focus-visible:outline-2 focus-visible:outline-chrome"
            aria-label="Toggle menu"
          >
            {/* animated lines */}
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
      </motion.header>

      {/* --- slide‑in sidebar --- */}
      <AnimatePresence>
        {open && <Sidebar close={() => setOpen(false)} links={NAV_LINKS} />}
      </AnimatePresence>
    </>
  )
}
