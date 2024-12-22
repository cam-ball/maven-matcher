/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fffdf4",
        dark: "#161A1D",
        wine: "#AD0041",
      },
      fontFamily: {
        header: "Federo, ui-serif",
      },
    },
  },
  plugins: [],
};
