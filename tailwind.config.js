/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        muted: "#363636",
        black: "#000000",
        black: "#000000",
        blackTransparent: "rgba(0, 0, 0, 0.56)",
        buttonPrimary: "#363636",
      },
    },
  },
  plugins: [],
};
