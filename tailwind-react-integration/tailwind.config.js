/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Correct Tailwind v3 config
  purge: [], // Dummy purge array (ignored in v3)
  darkMode: "media", // Default dark mode option
  variants: {}, // Empty object (not needed in v3)
  theme: {
    extend: {},
  },
  plugins: [],
};
