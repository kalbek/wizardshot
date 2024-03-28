/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        muted: "#666666",
        darkGray: "#4F4F4F",
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
        big: "20px",
        large: "40px",
        extralarge: "58px",
      },
      maxWidth: {
        extralarge: "750px",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(171, 150, 248, 1) 0%, rgba(217, 152, 226, 1) 50%, rgba(255, 153, 208, 1) 100%)",
      },
      height: {
        smallVideoFrame: "247px",
        largeVideoFrame: "829px",
      },
    },
  },
  plugins: [],
};
