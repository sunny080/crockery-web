const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto-Slab": ["'Roboto Slab', serif"],
        Roboto: ["'Roboto', sans-serif"],
        Mulish: ["'Mulish', sans-serif;"],
        Inter: ["'Inter', sans-serif;"],
      },

      backgroundImage: {
        "primary-button":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%, #E7503D)",
      },

      colors: {
        "gray-50": "#F7F7F7",
        "gray-100": "#E6E6E6",
        "gray-200": "#CCCCCC",
        "gray-300": "#B2B2B2",
        "gray-400": "#999999",
        "gray-500": "#808080",
        "gray-600": "#666666", // Typography
        "gray-700": "#4D4D4D",
        "gray-800": "#333333",
        "gray-900": "#1A1A1A", // Typography
        black: "#000000",
        white: "#FFFFFF",

        primary_red_600: "#E7503D",
        primary_red_100: "#fce5e2",
        primary_blue_600: "#0A5071",
        primary_blue_400: "#38728F",
        primary_blue_100: "#87B1CF",
        primary_body_text: "#6D757D", // Typography
        primary_typography: "#072C3E", // Typography
      },
      maxWidth: {
        1512: "1512px",
      },
      spacing: {
        156: "156px",
        120: "120px",
      },
      boxShadow: {
        "nav-drop-down": " 0px 6px 48px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
