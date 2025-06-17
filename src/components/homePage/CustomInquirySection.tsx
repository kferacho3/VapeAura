/* ------------------------------------------------------------------
 *  CustomInquirySection – wider / shorter variant
 * ----------------------------------------------------------------- */
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FiUpload } from "react-icons/fi";
import { MdSearchOff } from "react-icons/md";

/* —————— Form elements —————— */
const FormInput = (props: React.ComponentPropsWithoutRef<"input">) => (
  <input
    {...props}
    className="
      w-full rounded-md p-3 text-base outline-none
      ring-1 ring-slate-300
      focus:ring-2 focus:ring-brand-green
      bg-white text-slate-800
      dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-600
    "
  />
);

const FormTextarea = (props: React.ComponentPropsWithoutRef<"textarea">) => (
  <textarea
    {...props}
    className="
      w-full rounded-md p-3 text-base outline-none resize-none
      ring-1 ring-slate-300
      focus:ring-2 focus:ring-brand-green
      bg-white text-slate-800
      dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-600
    "
  />
);

const FormFileInput = (
  props: React.ComponentPropsWithoutRef<"input"> & { id: string }
) => (
  <div className="relative">
    <label
      htmlFor={props.id}
      className="
        flex w-full cursor-pointer items-center justify-center gap-2
        rounded-md border border-dashed border-slate-400 p-3
        text-slate-600 transition-colors
        hover:border-brand-green hover:text-brand-green
        dark:border-slate-600 dark:text-slate-300
        dark:hover:text-white
      "
    >
      <FiUpload />
      <span>Upload Reference File</span>
    </label>
    <input
      {...props}
      type="file"
      className="absolute -z-10 h-px w-px opacity-0"
    />
  </div>
);

interface CustomInquirySectionProps {
  environmentMode?: "day" | "night";
}

export default function CustomInquirySection({
  environmentMode = "night",
}: CustomInquirySectionProps) {
  const isNight = environmentMode === "night";

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="custom-inquiry" className="relative isolate my-20 lg:my-24">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`
          container group relative mx-auto max-w-7xl overflow-hidden
          rounded-3xl border shadow-xl
          ${isNight
            ? "bg-slate-900 border-slate-700 shadow-brand-green/20"
            : "bg-white border-slate-200 shadow-black/5"}
        `}
      >
        {/* animated conic accent */}
        <div
          className="
            pointer-events-none absolute -inset-0.5 -z-10 rounded-[inherit]
            bg-[conic-gradient(from_270deg_at_50%_50%,#01cc70_0%,transparent_30%,transparent_70%,#01cc70_100%)]
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100 group-hover:animate-spin-slow
          "
        />

        <div className="grid md:grid-cols-2 h-full">
          {/* ---------- Image ---------- */}
          <div className="relative w-full min-h-[420px] md:min-h-full overflow-hidden">
            <div
              className="
                absolute inset-0 pointer-events-none
                bg-gradient-to-t md:bg-gradient-to-l
                from-black/40 via-transparent to-transparent
              "
            />
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-full w-full"
            >
              <Image
                src="https://vapeaura.s3.us-east-2.amazonaws.com/home/background/VapeAura3.webp"
                alt="Stylized vaping lifestyle imagery"
                fill
                priority
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>

          {/* ---------- Form ---------- */}
          <div className="order-2 flex flex-col gap-6 px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
            <div className="text-brand-green">
              <MdSearchOff size={46} />
            </div>
            <h2
              className={`text-4xl lg:text-5xl font-extrabold leading-tight ${
                isNight ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Can&rsquo;t&nbsp;Find&nbsp;It?<br />
              We&rsquo;ll&nbsp;
              <span className="text-brand-green">Source&nbsp;It.</span>
            </h2>
            <p
              className={`max-w-md ${
                isNight ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Hunting for a specific brand, model, or color? Provide the
              details&mdash;our specialists will handle the rest.
            </p>

            <form
              action="https://formspree.io/f/your-id"
              method="POST"
              encType="multipart/form-data"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput name="name" placeholder="Your Name" required />
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <FormTextarea
                name="message"
                rows={4}
                required
                placeholder="Describe the item you're looking for..."
              />
              <FormFileInput
                id="ref-file"
                name="attachment"
                accept="image/*,.pdf"
              />
              <button
                type="submit"
                className="
                  w-full rounded-full py-3 font-bold transition-all
                  bg-brand-green text-midnight
                  shadow-lg shadow-brand-green/30
                  hover:brightness-110 hover:shadow-brand-green/50
                  focus:outline-none focus:ring-2 focus:ring-brand-green
                "
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
