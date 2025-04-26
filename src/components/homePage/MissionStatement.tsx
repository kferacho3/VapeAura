// src/components/homePage/MissionStatement.tsx
import Image from "next/image";

export default function MissionStatement() {
  return (
    <section
      id="mission"
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
        {/* Image column (2/3 width on md+) */}
        <div className="relative w-full md:w-2/3 h-full">
          <Image
            src="https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/VapeAuraMissionStatement.webp"
            alt="Delivery van and owner representing mission"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        {/* separator */}
        <div className="hidden md:block w-px bg-steam-faint" />

        {/* Text column (1/3 width on md+) */}
        <div className="w-full md:w-1/3 p-10 flex flex-col justify-center text-left">
          <h2 className="text-5xl font-extrabold text-neptune-light border-b-2 border-steam-faint pb-3">
            OUR PROMISE
          </h2>
          <p className="mt-6 text-black leading-relaxed break-words">
            VapeAura is a one-person, Georgia-based outfit. Because my overhead is
            tiny, I can <strong>match or beat</strong> the big-box chains and still
            ship anywhere in GA within <strong>1–3 days</strong>. If you find a
            better advertised price, send it over — I’ll meet it, no hoops.
          </p>
          <p className="mt-4 text-black leading-relaxed break-words">
            Every order supports a local entrepreneur, not a conglomerate. Thanks
            for keeping small business alive.
          </p>
        </div>
      </div>
    </section>
  );
}
