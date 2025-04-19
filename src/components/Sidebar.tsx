"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export type NavLink = { href: string; label: string }

interface Props {
  close: () => void
  links: NavLink[]
}

export default function Sidebar({ close, links }: Props) {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 38 }}
      className="fixed inset-y-0 right-0 z-40 w-72 bg-black/90 backdrop-blur-lg pt-10 px-6"
    >
      <div className="flex justify-center mb-10">
        <Image
          src="/VapeAuraSymbol.png"
          alt="Vape Aura symbol"
          width={64}
          height={64}
        />
      </div>

      <nav className="flex flex-col space-y-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={close}
            className="text-lg font-semibold text-chrome hover:text-deepsea-light transition"
          >
            {label}
          </Link>
        ))}

        <a
          href="tel:+15551234567"
          className="text-lg font-semibold text-chrome hover:text-deepsea-light transition"
        >
          (555) 123‑4567
        </a>
        <a
          href="mailto:info@vapeaura.com"
          className="text-lg font-semibold text-chrome hover:text-deepsea-light transition"
        >
          info@vapeaura.com
        </a>
      </nav>
    </motion.aside>
  )
}
