
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
          50:  '#d0c9d4',
          100: '#9f8fa8',
          200: '#8c709c',
          300: '#7a4b94',
          400: '#481c61',
          500: '#360a4f', // PRIMARY (Purple)
          600: '#300b45',
          700: '#270938',
          800: '#20082e',
          900: '#14061c',
        },
        deepBlue:    { DEFAULT: '#113e54' },
        accentBlue:  { DEFAULT: '#17516e' },
        accentGreen: { DEFAULT: '#22c55e' },
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
