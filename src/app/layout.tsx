import AgeGate from "@/components/AgeGate";
import EmailCaptureModal from "@/components/EmailCaptureModal"; // 10 %‑off popup
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VapeAura – VIP Vapes & Glass",
  description:
    "Premium vaporizers, glass, and accessories delivered with high-end service and price‑match guarantees.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
  bg-parchment dark:bg-black
  text-midnight dark:text-steam
  transition-colors duration-300 pt-16
        `}
      >
        <ThemeProvider>
          <AgeGate>
            {/* fires right after the age check */}
            <EmailCaptureModal />

            <Navbar />
            {children}
            <Footer />
          </AgeGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
