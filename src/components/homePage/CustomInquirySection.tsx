// src/components/homePage/CustomInquirySection.tsx
import Image from "next/image";
import Link from "next/link";
import { MdSearchOff } from "react-icons/md";

export default function CustomInquirySection() {
  return (
    <section
      id="custom-inquiry"
      className="
        mx-auto max-w-6xl
        overflow-hidden rounded-2xl shadow-lg
        bg-white dark:bg-midnight
        text-midnight dark:text-steam
        p-6 md:p-12
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* image first on both mobile & desktop */}
        <div className="order-1 md:order-1 relative w-full aspect-square overflow-hidden rounded-2xl">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraCustomInquiry.webp"
            alt="Custom product sourcing"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* text second on both mobile & desktop */}
        <div className="order-2 md:order-2 space-y-6">
          <div className="flex items-center space-x-3">
            <MdSearchOff size={36} className="text-amber-400" />
            <h3 className="uppercase text-4xl md:text-6xl font-extrabold text-amber-400">
              DON’T SEE WHAT YOU NEED?
            </h3>
          </div>
          <p className="text-xl leading-relaxed">
            Text, call, or email us — we can source nearly any product on
            request.
          </p>
          <Link
            href="/custom-inquiry"
            className="
              inline-block rounded bg-amber-400 px-6 py-4
              text-lg font-semibold text-black
              hover:bg-amber-400/90 transition
            "
          >
            CUSTOM INQUIRY
          </Link>
        </div>
      </div>
    </section>
);
}
