/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        /* metallic accent */
        steam: {
          DEFAULT: "#E0E6ED",
          faint:   "#B8C0C8",
        },
        /* deep‑sea / space vibe */
        neptune: {
          DEFAULT: "#113B6E",   // core Neptune blue
          light:   "#1C4C8B",   // lighter accent
        },
        midnight: "#000000",     // pure black
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'], // Or Barlow Condensed, depending on your needs
      },

    },
  },
  safelist: [
    "bg-neptune",
    "bg-neptune-light",
    "text-steam",
    "text-steam-faint",
  ],
  plugins: [],
};
