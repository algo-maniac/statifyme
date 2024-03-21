/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgb(98 190 252)", // 60%
        secondary: "#2366e4", // 30%
        backup: "#2366e4", // 10%
        tertiary: "black", // text
      },
      fontFamily: {
        sanSerif: ["San serif", "sans-serif"],
        anta: ["Anta", "anta"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
};
