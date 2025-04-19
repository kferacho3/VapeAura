/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        chrome: {
          DEFAULT: '#C7CED6',    // soft chrome silver
          dark:    '#A9B1BA',    // muted chrome
        },
        deepsea: {
          DEFAULT: '#004F63',    // deep‑sea blue
          light:   '#006D77',    // bright‑sea accent
        },
      },
    },
  },
  safelist: [
    'bg-deepsea',
    'bg-deepsea-light',
    'text-chrome',
    'text-chrome-dark',
  ],
  plugins: [],
}
