import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}", // Importante para ler os ícones dos dados
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        // Paleta Nude & Luxury
        cream: {
          50: '#F9F8F6', // Fundo principal (Off-white quente)
          100: '#F2EFE9',
          200: '#E6E0D4',
        },
        stone: {
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          800: '#292524', // Texto escuro
          900: '#1C1917',
        },
        gold: {
          200: '#fde68a',
          400: '#D4AF37', // Dourado metálico
          500: '#C5A028',
        },
        moss: {
          500: '#4A5D4F', // Verde Musgo Sofisticado
          600: '#3A4A3F',
        }
      },
      animation: {
        'fade-up': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      borderRadius: {
        '4xl': '2.5rem',
      }
    },
  },
  plugins: [],
};
export default config;