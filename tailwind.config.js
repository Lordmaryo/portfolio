/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textShadow: {
        glow: "0 0 5px #dcd2cd",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-glow": {
          textShadow:
            "0 0 5px #dcd2cd",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
