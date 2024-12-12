/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      plus_jakarta: ['var(--font-plus-jakarta)', "sans-serif"],
    },
    extend: {
      colors: {
        'primary': '#f97316',
        'orange-light': '#fcf8f6'
      },
    },
  },
  plugins: [],
};
