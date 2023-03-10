/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-dark": "#CF2C2C",
        "red-light": "#EE3535",
        black: "#040404",
        gray: "#C8C8C8",
        "gray-dark": "#131313",
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
