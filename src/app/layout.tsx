import AgeGate from "@/components/AgeGate";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VapeAura – VIP Vapes & Glass",
  description:
    "Premium vaporizers, glass, and accessories delivered with high‑end service and price‑match guarantees.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-chrome pt-16">
        <AgeGate>
          <Navbar />
          {children}
          <Footer />
        </AgeGate>
      </body>
    </html>
  );
}
