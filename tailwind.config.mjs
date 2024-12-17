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
        'orange-light': '#fbf1eb'
      },
      boxShadow: {
        '3xl': "rgba(0, 0, 0, 0.05) 0px -1px 20px 4px"
      },
      animation: {
        shake: 'shake 0.6s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
