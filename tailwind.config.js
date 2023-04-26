/** @type {import('tailwindcss').Config} */
const themeColors = require("./theme-colors.json");
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1240px",

      "2xl": "1440px",

      "3xl": "1620px",

      "4xl": "1820px",
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.25rem",
      "8xl": "8rem",
      "10xl": "10rem",
    },
    extend: {
      lineHeight: {
        "extra-tight": "1.1",
      },
      fontSize: {
        xxs: ".5rem",
      },
      borderRadius: {
        "4xl": "60px",
      },
      borderWidth: {
        3: "3px",
        1: "1px",
      },
      boxShadow: {
        DEFAULT: "2px 2px 4px rgba(38, 50, 67, 0.1)",
        md: "4px 4px 10px rgba(38, 50, 67, 0.1)",
        lg: "8px 8px 16px rgba(38, 50, 67, 0.1)",
        xl: "12px 12px 24px 20px rgba(38, 50, 67, 0.1)",
      },
      colors: {
        ...themeColors,
      },
    },
  },
  plugins: [],
};
