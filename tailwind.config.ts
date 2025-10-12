
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
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
