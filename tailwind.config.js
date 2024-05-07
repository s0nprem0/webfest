/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{html,js,jsx}",
    "./src/components/**/*.{html,js,jsx}",
    "./index.html",
  ],
  theme: {},
  extend: {
    colors: {
      text: {
        50: "#f2f2f2",
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
        950: "#0d0d0d",
      },
      background: {
        50: "#f2f2f2",
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
        950: "#0d0d0d",
      },
      primary: {
        50: "#fff4e5",
        100: "#ffe9cc",
        200: "#ffd399",
        300: "#ffbd66",
        400: "#ffa733",
        500: "#ff9100",
        600: "#cc7400",
        700: "#995700",
        800: "#663a00",
        900: "#331d00",
        950: "#1a0e00",
      },
      secondary: {
        50: "#f2f3f3",
        100: "#e4e6e7",
        200: "#c9cecf",
        300: "#afb5b6",
        400: "#949c9e",
        500: "#798486",
        600: "#61696b",
        700: "#494f50",
        800: "#303536",
        900: "#181a1b",
        950: "#0c0d0d",
      },
      accent: {
        50: "#e5e5ff",
        100: "#ccccff",
        200: "#9999ff",
        300: "#6666ff",
        400: "#3333ff",
        500: "#0000ff",
        600: "#0000cc",
        700: "#000099",
        800: "#000066",
        900: "#000033",
        950: "#00001a",
      },
    },
    backgroundImage: {
      hero: "url('src/assets/hero/DIT.png')",
    },
  },
  plugins: [],
};
