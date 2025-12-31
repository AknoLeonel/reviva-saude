import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Procura na pasta app/
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Procura na pasta components/
    "./data/**/*.{js,ts,jsx,tsx,mdx}",       // Procura na pasta data/
    ],
  theme: {
    extend: {
      colors: {
        reviva: {
          gold: "#C5A059",
          goldDark: "#A07E3E",
          dark: "#1A1A1A",
          cream: "#FFFCF5",
          light: "#F4EFE6",
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
export default config;