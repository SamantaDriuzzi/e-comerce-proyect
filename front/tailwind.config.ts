import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "500": "600px",
        "900": "800px",
        "1000": "1230px",
        top: "-12rem",
      },
      colors: {
        blue: "rgba(218, 230, 232, 1)",
        bluePlus: "rgba(116, 172, 223, 1)",
        orangeBase: "rgba(246, 171, 74, 0.65)",
        orange: "rgba(246, 171, 74, 1)",
        orangeFull: "rgba(255, 165, 0, 1)",
      },
      animation: {
        descender: "descender 5s ease-in-out forwards",
      },
      keyframes: {
        descender: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100%) translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0) translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
