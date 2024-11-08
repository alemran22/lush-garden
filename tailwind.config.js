/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": 'url("/src/assets/images/image 1.png")',
      },
      colors: { green: "#285A43" },
    },
  },
  plugins: [require("daisyui")],
};
