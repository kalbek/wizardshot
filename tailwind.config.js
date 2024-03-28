/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        muted: "#363636",
        black: "#000000",
        blackTransparent: "rgba(0, 0, 0, 0.56)",
        buttonPrimary: "#363636",
        buttonPrimary: "#18181C",
        buttonSecondary: "#B900",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      lineHeight: {
        tight: "1.2",
        normal: "1.3",
        loose: "1.4",
      },
    },
  },
  plugins: [],
};
