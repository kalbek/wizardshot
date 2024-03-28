/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        muted: "#666666",
        darkGray: "#4F4F4F",
        grayBase: "#363636",
        blackTransparent: "rgba(0, 0, 0, 0.56)",
        buttonPrimary: "#18181C",
        buttonSecondary: "#B900",
        lightGray: "#1E293B",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      lineHeight: {
        extratight: "1.1",
        tight: "1.2",
        normal: "1.3",
        loose: "1.4",
        extraloose: "1.6",
      },
      fontSize: {
        sm: "14px",
        base: "1rem",
        upperbase: "18px",
        big: "20px",
        bigger: "32px",
        large: "40px",
        extralarge: "58px",
      },
      maxWidth: {
        extralarge: "750px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(171, 150, 248, 1) 0%, rgba(217, 152, 226, 1) 50%, rgba(255, 153, 208, 1) 100%)",
        "categories-gradient":
          "linear-gradient(to right, rgba(68, 255, 154, 1) 0%, rgba(68, 176, 255, 1) 23%, rgba(100, 127, 255, 1) 35%,rgba(139, 68, 255, 1) 49%,  rgba(255, 102, 68, 1) 74%, rgba(235, 255, 112, 1) 100%)",
      },
      height: {
        smallVideoFrame: "247px",
        largeVideoFrame: "829px",
      },
    },
  },
  plugins: [],
};
