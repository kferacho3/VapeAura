import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/80 backdrop-blur pt-12 pb-6 text-chrome">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-3">
        {/* contact */}
        <div>
          <h3 className="mb-2 font-bold text-silver-light/90">Contact</h3>
          <p>
            Phone:{" "}
            <a href="tel:+15551234567" className="hover:text-deepsea-light">
              (555) 123‑4567
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@vapeaura.com" className="hover:text-deepsea-light">
              info@vapeaura.com
            </a>
          </p>
        </div>

        {/* links */}
        <div>
          <h3 className="mb-2 font-bold text-silver-light/90">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-deepsea-light">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-deepsea-light">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* guarantee */}
        <div>
          <h3 className="mb-2 font-bold text-silver-light/90">Guarantee</h3>
          <p className="text-sm">
            Price‑match on all major brands. Luxury service without luxury pricing.
          </p>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-chrome/60">
        © {new Date().getFullYear()} Vape Aura. All rights reserved.
      </p>
    </footer>
  )
}
