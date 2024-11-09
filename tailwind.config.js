/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": 'url("/src/assets/images/image 1.png")',
        "testimonial-bg-1": 'url("/src/assets/images/Testimonial.png")',
        "testimonial-bg-2": 'url("/src/assets/images/Testimonial (1).png")',
        "testimonial-bg-3": 'url("/src/assets/images/Testimonial (2).png")',
        "email-bg": 'url("/src/assets/images/CTA.png")',
        "footer-bg": 'url("/src/assets/images/Footer.png")',
      },
      colors: { green: "#285A43" },
    },
  },
  plugins: [require("daisyui")],
};
