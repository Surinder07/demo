/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nb: {
          bg: "#0c0c0a",
          text: "#f6f3e8",
          border: "#262521",
          card: "rgba(255,255,255,0.035)",
          accent: "#e9b949",
          accent600: "#d4a514",
          muted: "#9aa0a6",
          soft: "#c9c9bd"
        }
      },
      borderRadius: { "2xl": "1rem" }
    }
  },
  plugins: []
}
