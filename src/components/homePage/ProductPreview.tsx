/* ------------------------------------------------------------------
 *  ProductPreviewSection – Horizontal scroll with parallax reveals
 * ----------------------------------------------------------------- */
"use client";

import {
    motion,
    MotionValue,
    useScroll,
    useTransform,
    Variants,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

/* ────────────────────────────────────────────────────────────── */
/*  Data & Types                                                 */
/* ────────────────────────────────────────────────────────────── */
interface PreviewProduct {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const previewProducts: PreviewProduct[] = [
  {
    id: 1,
    title: "Artisan Glassware",
    description:
      "Experience artistry and function with our curated collection of hand-blown glass pieces, designed for the connoisseur.",
    imageUrl:
      "https://vapeaura.s3.us-east-2.amazonaws.com/home/previews/preview-glass.webp",
    link: "/products?category=Glass",
  },
  {
    id: 2,
    title: "Advanced Vaporizers",
    description:
      "Cutting-edge technology meets sleek design. Our vaporizers offer unparalleled performance and flavor.",
    imageUrl:
      "https://vapeaura.s3.us-east-2.amazonaws.com/home/previews/preview-vapes.webp",
    link: "/products?category=Vapes",
  },
  {
    id: 3,
    title: "Premium Accessories",
    description:
      "From high-grade torches to organic papers, elevate your experience with accessories that match your standards.",
    imageUrl:
      "https://vapeaura.s3.us-east-2.amazonaws.com/home/previews/preview-accessories.webp",
    link: "/products?category=Accessories",
  },
];

/* ────────────────────────────────────────────────────────────── */
/*  Card Component                                               */
/* ────────────────────────────────────────────────────────────── */
interface ProductPreviewCardProps {
  product: PreviewProduct;
  i: number;
  scrollXProgress: MotionValue<number>;
}

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = ({
  product,
  i,
  scrollXProgress,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const cardCount = previewProducts.length;
  const margin = 0.1; // spacing slice between cards

  // Range for this card
  const start = i / cardCount + (i === 0 ? 0 : margin / 2);
  const end = (i + 1) / cardCount - (i === cardCount - 1 ? 0 : margin / 2);

  // Parallax transforms
  const scale = useTransform(
    scrollXProgress,
    [start - 0.2, start, end, end + 0.2],
    [0.8, 1, 1, 0.8]
  );
  const rotate = useTransform(scrollXProgress, [start, end], [5, -5]);
  const opacity = useTransform(
    scrollXProgress,
    [start - 0.1, start, end, end + 0.1],
    [0, 1, 1, 0]
  );

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, rotate, opacity }}
      className="relative flex-shrink-0 w-[90vw] md:w-[60vw] lg:w-[45vw] h-full"
    >
      <div className="grid h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50 shadow-xl md:grid-cols-2">
        {/* image */}
        <div className="relative h-64 md:h-full">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover"
            sizes="(max-width:768px) 90vw, (max-width:1024px) 60vw, 45vw"
          />
        </div>

        {/* copy */}
        <motion.div
          className="flex flex-col justify-center space-y-4 p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h3
            variants={textVariants}
            className="text-3xl font-bold text-white"
          >
            {product.title}
          </motion.h3>
          <motion.p variants={textVariants} className="text-gray-400">
            {product.description}
          </motion.p>
          <motion.div variants={textVariants}>
            <a
              href={product.link}
              className="group inline-flex items-center gap-2 font-semibold text-brand-green"
            >
              Explore Collection{" "}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────── */
/*  Preview Section                                              */
/* ────────────────────────────────────────────────────────────── */
export default function ProductPreviewSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  return (
    <section
      id="product-preview"
      className="relative isolate bg-black py-24"
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Hand-Picked for&nbsp;
            <span className="bg-gradient-to-r from-brand-green to-brand-teal bg-clip-text text-transparent">
              Perfection
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-gray-400">
            A curated look at our signature categories. Quality you can see and feel.
          </p>
        </header>
      </div>

      {/* horizontal scroller */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto py-10"
        style={{ perspective: "1000px" }}
      >
        {/* ghost padding start */}
        <div className="flex-shrink-0 w-[10vw] md:w-[20vw] lg:w-[25vw]" />

        <div className="flex gap-8 md:gap-12">
          {previewProducts.map((p, i) => (
            <ProductPreviewCard
              key={p.id}
              product={p}
              i={i}
              scrollXProgress={scrollXProgress}
            />
          ))}
        </div>

        {/* ghost padding end */}
        <div className="flex-shrink-0 w-[10vw] md:w-[20vw] lg:w-[25vw]" />
      </div>
    </section>
  );
}
