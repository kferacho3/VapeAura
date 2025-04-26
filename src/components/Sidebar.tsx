// src/components/Sidebar.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export type NavLink = { href: string; label: string };

interface Props {
  close: () => void;
  links: NavLink[];
}

export default function Sidebar({ close, links }: Props) {
  return (
    <motion.aside
      className="fixed inset-0 z-40 flex"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{
        hidden: {},
        visible: {},
      }}
    >
      {/* backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        onClick={close}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* sliding panel */}
      <motion.div
        className="relative w-full md:w-72 h-full bg-black/90 backdrop-blur-lg pt-10 px-6 overflow-y-auto"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 38 }}
      >
        {/* close button */}
        <button
          onClick={close}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-steam text-2xl"
        >
          <AiOutlineClose />
        </button>

        {/* logo / symbol */}
        <div className="flex justify-center mb-8">
          <Image
            src="/VapeAuraSymbol.png"
            alt="Vape Aura symbol"
            width={64}
            height={64}
            priority
          />
        </div>

        {/* navigation links */}
        <nav className="flex flex-col space-y-6 mb-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              className="text-lg font-semibold text-steam hover:text-deepsea-light transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* contact info (from footer, minus subscribe) */}
        <div className="mb-6">
          <a
            href="tel:+15551234567"
            className="block text-lg font-semibold text-steam hover:text-deepsea-light transition"
          >
            (555) 123-4567
          </a>
          <a
            href="mailto:info@vapeaura.com"
            className="block text-lg font-semibold text-steam hover:text-deepsea-light transition mt-2"
          >
            info@vapeaura.com
          </a>
        </div>

        {/* social icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-deepsea-light transition">
            <FaFacebook className="text-2xl text-steam" />
          </a>
          <a href="#" className="hover:text-deepsea-light transition">
            <FaInstagram className="text-2xl text-steam" />
          </a>
          <a href="#" className="hover:text-deepsea-light transition">
            <FaTwitter className="text-2xl text-steam" />
          </a>
        </div>
      </motion.div>
    </motion.aside>
  );
}
