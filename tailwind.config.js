/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {

        "gradient-prism": {
          "0%": {
            backgroundPosition: "0% 50%",
            filter: "hue-rotate(0deg)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            filter: "hue-rotate(15deg)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            filter: "hue-rotate(0deg)",
          },
        },
      },
      animation: {
        // "gradient-prism": "gradientPrism 12s ease-in-out infinite",
        "flow-gradient": "flowGradient 10s ease infinite",
        "gradient-prism": "gradient-prism 12s ease-in-out infinite",
      },
      colors: {
        maincolor: "#5234C9",
        secondarycolor: "#666666",
      },
      boxShadow: {
        main: "0px 19px 73px rgba(213,203,254,0.05)",
        cardshadow: "0px 19px 73px rgba(213, 203, 254, 0.05)",
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
