// src/components/Sidebar.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdPriceCheck } from "react-icons/md";
import { useTheme } from "./ThemeProvider";

export type NavLink = { href: string; label: string };

interface Props {
  close: () => void;
  links: NavLink[];
}

export default function Sidebar({ close, links }: Props) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.aside
      className="fixed inset-0 z-40 flex"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={{ hidden: {}, visible: {} }}
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

        {/* theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle light / dark mode"
          className="absolute top-4 left-4 text-steam text-2xl hover:text-brand-green transition-colors"
        >
          {theme === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
        </button>

        {/* centered symbol */}
        <div className="flex justify-center mb-8">
          <Image
            src="/AuraHempVapeSymbol.png"
            alt="Aura Hemp & Vapor symbol"
            width={80}
            height={80}
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
              className="text-lg font-semibold text-steam hover:text-brand-green transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* mobile CTAs */}
        <div className="flex flex-col space-y-4 mb-10">
          <Link
            href="/price-match"
            onClick={close}
            className="inline-flex items-center justify-center rounded-md bg-brand-green/90
                       px-4 py-2 text-sm font-bold uppercase text-midnight hover:scale-105 transition"
          >
            <MdPriceCheck className="mr-2 text-base" />
            Price&nbsp;Match
          </Link>

          <Link
            href="/custom-inquiry"
            onClick={close}
            className="inline-flex items-center justify-center rounded-md border
                       border-steam/60 px-4 py-2 text-sm font-bold uppercase text-steam
                       hover:bg-steam hover:text-midnight transition"
          >
            <HiOutlineClipboardList className="mr-2 text-base text-brand-green" />
            Missing&nbsp;Product?
          </Link>
        </div>

        {/* contact info */}
        <div className="mb-6 space-y-2">
          <a
            href="tel:+15551234567"
            className="block text-lg font-semibold text-steam hover:text-brand-green transition"
          >
            (555) 123‑4567
          </a>
          <a
            href="mailto:info@vapeaura.com"
            className="block text-lg font-semibold text-steam hover:text-brand-green transition"
          >
            info@vapeaura.com
          </a>
        </div>

        {/* social icons */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-brand-green transition">
            <FaFacebook className="text-2xl text-steam" />
          </a>
          <a href="#" className="hover:text-brand-green transition">
            <FaInstagram className="text-2xl text-steam" />
          </a>
          <a href="#" className="hover:text-brand-green transition">
            <FaTwitter className="text-2xl text-steam" />
          </a>
        </div>
      </motion.div>
    </motion.aside>
  );
}
