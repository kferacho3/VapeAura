// src/components/homePage/InfoCardsSection.tsx
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdPriceCheck } from "react-icons/md";
import RequestItemModal from "./RequestItemModal";

type InteractiveCardProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

// Rebuilt with Framer Motion for superior performance and feel
function InteractiveCard({ icon, title, children }: InteractiveCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-[1px] shadow-lg"
    >
      <div
        style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
        className="
          flex h-full flex-col items-center space-y-4 rounded-[inherit]
          bg-slate-900/70 p-6 text-center text-gray-200 backdrop-blur-md
        "
      >
        <div className="text-brand-green drop-shadow-[0_0_8px_rgba(0,255,183,0.5)]">{icon}</div>
        <h3 className="text-xl font-bold text-white">
          {title}
        </h3>
        <div className="text-sm leading-relaxed text-gray-400">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

export default function InfoCardsSection() {
    return (
      <section
        id="info-cards"
        className="
          isolate flex flex-col items-center justify-start rounded-t-3xl
          bg-gradient-to-b from-black via-slate-900 to-neptune-light/20
          px-4 pt-16 pb-20 space-y-16
        "
      >
        {/* INFO CARDS */}
        <div className="grid gap-8 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
          <InteractiveCard icon={<MdPriceCheck size={48} />} title="PRICE MATCH GUARANTEE">
            <p>
              Find a better price at Xhale, Cloud9, or any major chain? We won’t just meet it—we’ll beat it. No compromises on quality.
            </p>
          </InteractiveCard>
  
          <InteractiveCard icon={<FiSearch size={48} />} title="REQUEST ANY ITEM">
            <p>
              Can’t find what you’re looking for? Send us a request. We specialize in sourcing unique and hard-to-find items for our clients.
            </p>
          </InteractiveCard>
  
          <InteractiveCard icon={<AiOutlinePhone size={48} />} title="GET IN TOUCH">
            <div className="flex flex-col items-center space-y-3 text-sm">
                <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <AiOutlinePhone /> +1 (555) 123-4567
                </a>
                <a href="mailto:info@vapeaura.com" className="flex items-center gap-2 hover:text-brand-green transition-colors">
                  <AiOutlineMail /> info@vapeaura.com
                </a>
              <div className="flex justify-center space-x-5 pt-2">
                <a href="https://facebook.com/vapeaura" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-brand-green transition-colors"><FaFacebook size={22} /></a>
                <a href="https://instagram.com/vapeaura" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-brand-green transition-colors"><FaInstagram size={22} /></a>
                <a href="https://twitter.com/vapeaura" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-brand-green transition-colors"><FaTwitter size={22} /></a>
              </div>
            </div>
          </InteractiveCard>
        </div>
  
        {/* CTA + LINKS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center">
            <RequestItemModal />
            <Link
                href="/products"
                className="
                  font-semibold text-gray-300 transition-colors
                  hover:text-white underline-offset-4 hover:underline
                "
            >
                Or, Browse All Products
            </Link>
        </div>
      </section>
    );
}