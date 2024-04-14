/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {

    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: '#101828',
        secondary: '#667085',
        accent: {
          DEFAULT: 'ed1d24',
          hover: 'dd242a',
        },
        body: '#dedede',
        "black-100": "#2B2C35",
        "coral": "#F88379",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        "primary-green": {
          DEFAULT: "#1BA8A0",
          100: "#AFEEEE",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        //'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        //'gradient-conic':
        //'conic-gradient(from 180deg at 50% 50%, var (--tw-gradient-stops))',
        'pattern': "url('/pattern3.png')",
        'hero-bg': "url('/hero-bg2.png')",
      }
    },
  },
  plugins: [],
};