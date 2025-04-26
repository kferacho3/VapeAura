import { Product } from "@/types/product";

/**
 * NOTE: keep these IDs stable ― they power the cart & analytics.
 */
export const products: Product[] = [
  /* ---------- Signature Pens / Rigs ---------- */
  {
    id: "seahorse-og",
    name: "Lookah Seahorse OG",
    description: "Portable dab pen with quartz tip and 650 mAh battery.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/seahorse-og.webp",
    buyUrl: "https://yourwoocommerce.com/product/seahorse-og",
    category: "E-Vapes",
  },
  {
    id: "seahorse-pro",
    name: "Lookah Seahorse Pro",
    description: "Upgraded version with removable glass mouthpiece.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/seahorse-pro.webp",
    buyUrl: "https://yourwoocommerce.com/product/seahorse-pro",
    category: "E-Vapes",
  },
  {
    id: "lookah-tips",
    name: "Lookah Seahorse Quartz Tips (5-Pack)",
    description: "Replacement tips for the Seahorse series.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/lookah-tips.webp",
    buyUrl: "https://yourwoocommerce.com/product/lookah-tips",
    category: "E-Vapes",
  },

  /* ---------- Smart Rigs / eRigs ---------- */
  {
    id: "puffco-peak",
    name: "Puffco Peak OG",
    description: "The original smart dab rig with 4 heat profiles.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/puffco-peak.webp",
    priceMatch: true,
    category: "Dab Rigs",
  },
  {
    id: "puffco-pro",
    name: "Puffco Peak Pro",
    description: "Real-time temperature control & wireless charging.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/puffco-pro.webp",
    priceMatch: true,
    category: "Dab Rigs",
  },
  {
    id: "puffco-proxy",
    name: "Puffco Proxy",
    description: "Modular vaporizer in a stylish glass pipe body.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/puffco-proxy.webp",
    priceMatch: true,
    category: "Dab Rigs",
  },

  /* ---------- G Pen ---------- */
  {
    id: "gpen-elite",
    name: "G Pen Elite II",
    description: "Convection + conduction portable dry-herb vaporizer.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/gpen-elite.webp",
    priceMatch: true,
    category: "E-Vapes",
  },
  {
    id: "gpen-connect",
    name: "G Pen Connect",
    description: "510-thread concentrate adapter for any glass rig.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/gpen-connect.webp",
    priceMatch: true,
    category: "E-Vapes",
  },

  /* ---------- Gravity / Showpiece ---------- */
  {
    id: "hookah-gravity-bong",
    name: "Hookah Gravity Bong",
    description: "360° rotating water-powered gravity hookah.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/hookah-gravity-bong.webp",
    priceMatch: true,
    category: "Bongs",
  },
  {
    id: "stundenglass",
    name: "Stündenglass Gravity Infuser",
    description: "Premium 360° gravity bong with contactless mouthpiece.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/stundenglass.webp",
    priceMatch: true,
    category: "Bongs",
  },

  /* ---------- Glass & Essentials ---------- */
  {
    id: "cheap-bong",
    name: "Starter Glass Bong",
    description: "Affordable 10-inch beaker with ice pinch.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/cheap-bong.webp",
    buyUrl: "https://yourwoocommerce.com/product/starter-bong",
    category: "Bongs",
  },
  {
    id: "cheap-dab-kit",
    name: "Budget Dab Kit",
    description: "Mini rig, torch, carb cap & tool — all-in-one bundle.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/cheap-dab-kit.webp",
    buyUrl: "https://yourwoocommerce.com/product/budget-dab-kit",
    category: "Misc.",
  },
  {
    id: "pipes-assorted",
    name: "Assorted Glass Pipes",
    description: "Hand-pipes in assorted colors.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/pipes-assorted.webp",
    priceMatch: true,
    category: "Glass Pipes",
  },
  {
    id: "14mm-banger",
    name: "14 mm Quartz Banger",
    description: "High-quality flat-top for most rigs.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/14mm-banger.webp",
    buyUrl: "https://yourwoocommerce.com/product/14mm-banger",
    category: "Nails & Bangers",
  },

  /* ---------- Accessories ---------- */
  {
    id: "nectar-collector",
    name: "Simple Nectar Collector",
    description: "Straight quartz tip + dish for on-the-go dabs.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/nectar-collector.webp",
    buyUrl: "https://yourwoocommerce.com/product/nectar-collector",
    category: "Nectar Collector",
  },
  {
    id: "grinder-4pc",
    name: "Aluminium Grinder (4-pc)",
    description: "Magnetic lid, pollen screen & scraper.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/grinder-4pc.webp",
    buyUrl: "https://yourwoocommerce.com/product/4pc-grinder",
    category: "Grinders",
  },
  {
    id: "rolling-tray",
    name: "Metal Rolling Tray",
    description: "11 × 7 in steel tray with high walls.",
    image: "https://vapeaura.s3.us-east-2.amazonaws.com/products/rolling-tray.webp",
    buyUrl: "https://yourwoocommerce.com/product/rolling-tray",
    category: "Rolling Paper / Trays / Tips",
  },
];
