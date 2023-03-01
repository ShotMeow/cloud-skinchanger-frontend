/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#CF2C2C",
        black: "#040404",
        gray: "#C8C8C8",
        "gray-dark": "#0A0A0A",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: 0,
      },
    },
  },
  plugins: [],
};
