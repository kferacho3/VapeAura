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
        steam: {
          DEFAULT: "#E0E6ED",
          faint:   "#B8C0C8",
        },
        neptune: {
          DEFAULT: "#113B6E",
          light:   "#1C4C8B",
        },

        // used for text on light bg
        midnight: "#1B1B1B",
        // (if you still need pure black)
        black: "#000000",

        // “brand” gradient stops
        "brand-green": "#01cc70",
        "brand-teal":  "#004448",
      },
      backgroundImage: {
        // re-usable radial gradient
        "brand-gradient": "radial-gradient(circle at left, #01cc70, #004448)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  safelist: [
    "bg-neptune",
    "bg-neptune-light",
    "text-steam",
    "text-steam-faint",
    "text-midnight",
    "dark:text-steam",
  ],
  plugins: [],
};
