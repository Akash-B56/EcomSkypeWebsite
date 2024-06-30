/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0779E4",
        secondary: "#5AB2FF",
      },
    
    },
  },
  plugins: [],
};
