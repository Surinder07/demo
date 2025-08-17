/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nb: {
          bg: "#0b0d12",
          text: "#e6edf6",
          cyan: "#38bdf8",
          fuchsia: "#d946ef",
          violet: "#8b5cf6"
        }
      },
      backgroundImage: {
        'nb-gradient': 'linear-gradient(90deg, #38bdf8 0%, #d946ef 50%, #8b5cf6 100%)'
      },
      boxShadow: {
        'nb': '0 0 18px rgba(56,189,248,.35)'
      }
    },
  },
  plugins: [],
}
