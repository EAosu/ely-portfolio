
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6', // PRIMARY (Purple)
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        accentBlue:  { DEFAULT: '#38bdf8' }, // Sky-400
        accentGreen: { DEFAULT: '#22c55e' }, // Green-500
      },
      fontFamily: {
        sans: ['Heebo', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji']
      },
      backgroundImage: {
        'radial': 'radial-gradient(circle at 20% 20%, rgba(56,189,248,.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(168,85,247,.25), transparent 42%), radial-gradient(circle at 10% 90%, rgba(34,197,94,.25), transparent 35%)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
