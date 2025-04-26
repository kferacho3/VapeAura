// src/components/homePage/ContactSection.tsx
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="
        mx-auto max-w-6xl
        overflow-hidden rounded-2xl shadow-lg
        bg-white dark:bg-midnight
        text-midnight dark:text-steam
        p-6 md:p-12
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* text first on mobile, second on desktop */}
        <div className="order-2 md:order-1 space-y-6">
          <h2 className="uppercase text-4xl md:text-6xl font-extrabold text-amber-400">
            REACH OUT ANYTIME
          </h2>
          <p className="text-xl leading-relaxed">
            Whether you have product questions or just want a recommendation,
            I’m here. Prefer socials? DM me for a quick reply.
          </p>

          <ul className="space-y-3 text-xl">
            <li className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <a
                href="tel:+15551234567"
                className="underline hover:text-brand-green"
              >
                +1&nbsp;(555)&nbsp;123-4567
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              <a
                href="mailto:info@vapeaura.com"
                className="underline hover:text-brand-green"
              >
                info@vapeaura.com
              </a>
            </li>
            <li className="flex items-center space-x-4 pt-2">
              <a
                href="https://facebook.com/vapeaura"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition"
              >
                <FaFacebook size={28} />
              </a>
              <a
                href="https://instagram.com/vapeaura"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://twitter.com/vapeaura"
                target="_blank"
                rel="noreferrer"
                className="hover:text-brand-green transition"
              >
                <FaTwitter size={28} />
              </a>
            </li>
          </ul>
        </div>

        {/* image second on mobile, first on desktop */}
        <div className="order-1 md:order-2 relative w-full aspect-square overflow-hidden rounded-2xl">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraContact.webp"
            alt="Contact VapeAura"
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
);
}
