// src/app/layout.tsx
import AgeGate from "@/components/AgeGate"; // ← new
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VapeAura – VIP Vapes & Glass",
  description:
    "Premium vaporizers, glass, and accessories delivered with high‑end service and price‑match guarantees.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-chrome pt-16`}>
        <AgeGate>
          {/* 64 px padding = navbar height */}
          <Navbar />
          {children}
          <Footer />
        </AgeGate>
      </body>
    </html>
  )
}
