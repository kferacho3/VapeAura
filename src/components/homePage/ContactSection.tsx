/* ------------------------------------------------------------------
 *  ContactSection – wider / shorter variant
 * ----------------------------------------------------------------- */
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone, FiUser } from "react-icons/fi";

/* —————— Re-usable form controls —————— */
const FormInput = (
  props: React.ComponentPropsWithoutRef<"input"> & { icon: React.ReactNode }
) => (
  <label className="relative block">
    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-brand-green">
      {props.icon}
    </span>
    <input
      {...props}
      className="
        w-full rounded-md py-3 pl-11 pr-3 text-base outline-none
        ring-1 ring-slate-300
        transition focus:ring-2 focus:ring-brand-green
        bg-white text-slate-800
        dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-600
      "
    />
  </label>
);

const FormTextarea = (
  props: React.ComponentPropsWithoutRef<"textarea">
) => (
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

interface ContactSectionProps {
  environmentMode?: "day" | "night";
}

export default function ContactSection({
  environmentMode = "night",
}: ContactSectionProps) {
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
    <section id="contact" className="relative isolate my-20 lg:my-24">
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
            bg-[conic-gradient(from_90deg_at_50%_50%,#01cc70_0%,transparent_30%,transparent_70%,#01cc70_100%)]
            opacity-0 transition-opacity duration-500
            group-hover:opacity-100 group-hover:animate-spin-slow
          "
        />

        <div className="grid md:grid-cols-2 h-full">
          {/* ---------- Form ---------- */}
          <div className="order-2 md:order-1 flex flex-col gap-6 px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
            <h2
              className={`text-4xl lg:text-5xl font-extrabold leading-tight ${
                isNight ? "text-slate-100" : "text-slate-900"
              }`}
            >
              Let&rsquo;s&nbsp;
              <span className="text-brand-green">Connect</span>
            </h2>
            <p
              className={`max-w-md ${
                isNight ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Have a question, feedback, or a partnership idea? Drop us a
              line&nbsp;&mdash;&nbsp;we’re here to help.
            </p>

            <form
              action="https://formspree.io/f/your-id"
              method="POST"
              encType="multipart/form-data"
              className="space-y-5"
            >
              <input type="hidden" name="subject" value="general" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput
                  name="name"
                  placeholder="Name"
                  required
                  icon={<FiUser />}
                />
                <FormInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  icon={<FiMail />}
                />
              </div>
              <FormInput
                name="phone"
                placeholder="Phone (Optional)"
                icon={<FiPhone />}
              />
              <FormTextarea
                name="message"
                rows={5}
                required
                placeholder="Your message..."
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
                Send Message
              </button>
            </form>

            {/* Socials */}
            <div className="mt-8 flex flex-col items-center gap-4 border-t pt-6 border-slate-200 dark:border-slate-700">
              <p
                className={`font-medium tracking-wide ${
                  isNight ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Find us on social
              </p>
              <div className="flex gap-6 text-2xl">
                <a
                  href="https://facebook.com/vapeaura"
                  aria-label="Facebook"
                  className="transition-colors hover:text-brand-green text-slate-500 dark:text-slate-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com/vapeaura"
                  aria-label="Instagram"
                  className="transition-colors hover:text-brand-green text-slate-500 dark:text-slate-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com/vapeaura"
                  aria-label="Twitter / X"
                  className="transition-colors hover:text-brand-green text-slate-500 dark:text-slate-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* ---------- Hero Image ---------- */}
          <div className="order-1 md:order-2 relative w-full min-h-[420px] md:min-h-full overflow-hidden">
            <div
              className="
                absolute inset-0 pointer-events-none
                bg-gradient-to-t md:bg-gradient-to-r
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
                src="https://vapeaura.s3.us-east-2.amazonaws.com/home/background/VapeAura2.webp"
                alt="A person holding a vape pen with a cloud of vapor"
                fill
                priority
                className="object-cover object-bottom"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
