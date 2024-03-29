/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        muted: "#666666",
        darkGray: "#4F4F4F",
        graySecondary: "#212020",
        grayBase: "#363636",
        darkBaseGray: "#0F172A",
        blackTransparent: "rgba(0, 0, 0, 0.56)",
        buttonPrimary: "#18181C",
        buttonSecondary: "#03132E",
        lightGray: "#1E293B",
        categoryGray: "#F3F3F3",
        categoryLightGray: "#F6F6F6",
        dottedPurple: "#AB96F8",
        colorTryText: "#F9FAFB",
        lightFooter: "#0D0D0D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      lineHeight: {
        extratight: "1.1",
        tight: "1.2",
        normal: "1.3",
        loose: "1.4",
        extraloose: "1.6",
      },
      fontSize: {
        xs: "8px",
        sm: "14px",
        base: "1rem",
        upperbase: "18px",
        largebase: "22px",
        big: "20px",
        bigbase: "24px",
        extrabig: "28px",
        bigger: "32px",
        large: "40px",
        extralarge: "58px",
      },
      maxWidth: {
        extralarge: "750px",
        extafull: "120%",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, rgba(171, 150, 248, 1) 0%, rgba(217, 152, 226, 1) 50%, rgba(255, 153, 208, 1) 100%)",
        "categories-gradient":
          "linear-gradient(to right, rgba(68, 255, 154, 1) 0%, rgba(68, 176, 255, 1) 23%, rgba(100, 127, 255, 1) 35%,rgba(139, 68, 255, 1) 49%,  rgba(255, 102, 68, 1) 74%, rgba(235, 255, 112, 1) 100%)",
        "free-unlimited-gradient":
          "linear-gradient(to right, rgba(240, 251, 185, 1) 0%, rgba(251, 179, 160, 1) 29%, rgba(191, 162, 253, 1) 53%,rgba(164, 208, 252, 1) 75%,  rgba(159, 233, 226, 1) 84%, rgba(159, 250, 206, 1) 100%)",
        "testimonial-gradient":
          "linear-gradient(to right, rgba(68, 255, 154, 1) 0%, rgba(68, 176, 255, 1) 23%, rgba(139, 68, 255, 1) 49%,rgba(255, 102, 68, 1) 74%, rgba(235, 255, 112, 1) 100%)",
      },
      height: {
        smallVideoFrame: "247px",
        largeVideoFrame: "829px",
      },
      spacing: {
        8.9: "30px",
        10.5: "80.5%",
        50: "190px",
        110: "430px",
        112: "474px",
        115: "495px",
      },
      outlineWidth: {
        6: "6px",
      },
    },
  },
  plugins: [],
};
