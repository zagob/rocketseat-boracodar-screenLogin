/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#7C3AED",
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      backgroundImage: {
        background: "url('/bg.jpg')",
      },
      gridTemplateColumns: {
        w3: "repeat(3, minmax(0, 320px))",
        w2: "repeat(2, minmax(0, 320px))",
      },
    },
  },
  plugins: [],
};
