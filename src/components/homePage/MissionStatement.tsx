import Image from "next/image";

export default function MissionStatement() {
  return (
    <section
      id="mission"
      className="
        mx-auto my-5 w-full max-w-7xl
        overflow-hidden rounded-3xl shadow-xl
        p-[3px] bg-[radial-gradient(circle_at_left,_#01cc70,_#004448)]
        min-h-[400px] lg:min-h-[300px]
      "
    >
      <div
        className="
          flex flex-col lg:flex-row lg:gap-10 h-full
          bg-white/90 dark:bg-black/90 rounded-3xl
        "
      >
        {/* ─────────── Text Column ─────────── */}
        <article
          className="
            order-2 lg:order-1
            w-full lg:w-3/5
            p-8 sm:p-12 space-y-6
            text-midnight dark:text-steam
          "
        >
          <header className="space-y-3">
            <h2 className="text-5xl font-extrabold text-neptune-light">
              OUR&nbsp;PROMISE
            </h2>
            <p className="leading-relaxed">
              <strong>Aura Hemp &amp; Vapor</strong> is a one‑person Georgia‑based
              outfit committed to premium glass, vapes&nbsp;&amp;&nbsp;hemp
              while keeping prices lower than the big boxes. <br />
              <strong>Price‑Match&nbsp;Guarantee:</strong> spot a cheaper
              advertised price and I’ll beat it—no hoops.
            </p>
          </header>

          <section className="space-y-4">
            <p className="leading-relaxed">
              • <strong>What we sell now …</strong> top‑shelf vaporizers,
              artisan glass, papers, torches and accessories. <br />
              • <strong>What’s coming …</strong> a proprietary hemp line
              (teaser drops this summer&nbsp;👀).
            </p>
            <p className="leading-relaxed">
              Every order supports a local entrepreneur, not a conglomerate.
              Thanks for keeping small business alive.
            </p>
          </section>
        </article>

        {/* ─────────── Image Column ─────────── */}
        <div
          className="
            order-1 lg:order-2
            relative
            w-full aspect-[1]               /* ≤639 px: unchanged square  */
            sm:aspect-[4/5] md:aspect-[3/4] /* ≥640 px: slim the height   */
            lg:w-1/5                        /* desktop: ~20 % width       */
            lg:min-h-[200px]
            rounded-t-3xl lg:rounded-r-3xl overflow-hidden
          "
        >
          <Image
            src='https://vapeaura.s3.us-east-2.amazonaws.com/home/sections/AuraHempVapor.webp'
            alt='Aura Hemp & Vapor delivery theme'
            fill
            className='object-cover'
            priority
          />
        </div>
      </div>
    </section>
  );
}
