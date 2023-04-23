/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: "Quicksand",
      },
      colors: {
        dark: "#0F172A",
        gray: "#334155",
        grey: "#69758A",
        blue: "#38BDF8",
      },
    },
  },
  plugins: [],
};
