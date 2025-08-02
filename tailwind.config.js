/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#f9f6f2",
        accent: "#6b4327",
        hover: "#54351e",
        text: "#232434b3",
      },
    },
  },
  plugins: [],
}