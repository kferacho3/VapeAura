// src/components/homePage/PriceMatchSection.tsx
import Image from "next/image";

export default function PriceMatchSection() {
  return (
    <section
      id="price-match"
      className="
        mx-auto my-16
        max-w-6xl
        p-[2px]
        bg-[radial-gradient(circle_at_left,_#01cc70,_#004448)]
        rounded-lg
        shadow-md shadow-neptune-light/30
        overflow-hidden
      "
    >
      <div className="flex flex-col md:flex-row h-auto md:h-[600px] bg-white/90 rounded-lg overflow-hidden">

      {/* Text column (1/3 width on md+) */}
      <div className="w-full md:w-1/3 p-10 flex flex-col justify-center text-left">
          <h2 className="text-5xl font-extrabold text-neptune-light border-b-2 border-steam-faint pb-3">
            PRICE MATCH GUARANTEED!
          </h2>
          <p className="mt-6 text-steam-faint leading-relaxed break-words">
            Show me a legit advertised price from any competitor — I’ll match or
            beat it on the spot. No loyalty cards, no fine print.
          </p>
        </div>
        {/* separator */}
        <div className="hidden md:block w-px bg-steam-faint" />

        {/* Image column (2/3 width on md+) */}
        <div className="relative w-full md:w-2/3 h-full">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraPriceMatch.webp"
            alt="Price-match guarantee graphic"
            fill
            className="object-cover w-full h-full"
          />
        </div>


  
      </div>
    </section>
  );
}
