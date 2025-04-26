import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdPriceCheck } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-midnight text-steam py-12">
      {/* thin neon accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* brand block */}
        <div className="space-y-4">
          <Link href="/" className="inline-block">
            <Image
              src="/VapeAuraLogo.png"
              alt="Vape Aura logo"
              width={160}
              height={48}
              priority
              className="w-auto h-12"
            />
          </Link>
          <p className="text-sm text-steam/80">
            Luxury service without luxury pricing — curated smoke culture since 2023.
          </p>
          <div className="flex space-x-4 text-xl">
            <FaFacebookF className="hover:text-brand-green transition" />
            <FaInstagram className="hover:text-brand-green transition" />
            <FaTwitter   className="hover:text-brand-green transition" />
          </div>
        </div>

        {/* contact */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-steam">Contact</h3>
          <p className="flex items-center gap-2">
            <FiPhone />
            <a href="tel:+15551234567" className="hover:text-brand-green">(555)&nbsp;123-4567</a>
          </p>
          <p className="flex items-center gap-2">
            <FiMail />
            <a href="mailto:info@vapeaura.com" className="hover:text-brand-green">
              info@vapeaura.com
            </a>
          </p>
        </div>

        {/* quick links + CTAs */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-steam">Quick&nbsp;Links</h3>
          <ul className="space-y-2">
            <li><Link href="/"         className="hover:text-brand-green">Home</Link></li>
            <li><Link href="/products" className="hover:text-brand-green">Products</Link></li>
          </ul>

          <div className="flex flex-col space-y-2 pt-4">
            <Link
              href="/price-match"
              className="inline-flex items-center justify-center rounded-md bg-brand-green
                         px-4 py-2 text-sm font-semibold text-midnight
                         hover:scale-105 transition"
            >
              <MdPriceCheck className="mr-2" /> Price&nbsp;Match&nbsp;Request
            </Link>

            <Link
              href="/request-item"
              className="inline-flex items-center justify-center rounded-md border
                         border-steam/60 px-4 py-2 text-sm font-semibold
                         hover:bg-steam hover:text-midnight transition"
            >
              <HiOutlineClipboardList className="mr-2" /> Product&nbsp;Request
            </Link>
          </div>
        </div>

        {/* newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-steam">Stay&nbsp;in&nbsp;the&nbsp;Loop</h3>
          <p className="text-sm text-steam/80">
            New drops, exclusive deals — straight to your inbox.
          </p>
          <form className="flex w-full max-w-md overflow-hidden rounded-md bg-steam/10">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-transparent px-3 py-2 text-sm
                         focus:outline-none"
            />
            <button
              type="submit"
              className="bg-brand-green px-4 text-sm font-bold text-midnight
                         hover:brightness-110 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-steam/60">
        © {new Date().getFullYear()} Vape Aura. All rights reserved.
      </p>
    </footer>
  );
}
