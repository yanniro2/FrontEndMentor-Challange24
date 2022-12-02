/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "Mobile": { "min": "320px", "max": "480px" },
      "Tablet": { "min": "480px", "max": "768px" },
      "default": { "min": "768px", "max": "1024px" },
      "Desktop": { "min": "1024px", "max": "1200px" },
      "large": "1440px",
    },
    colors: {
      // ### Primary
      "Soft-orange": "hsl(35, 77%, 62%)",
      "soft-red": "hsl(5, 85%, 63%)",

      // ### Neutral
      "Off-white": "hsl(36, 100%, 99%)",
      "Grayish-blue": "hsl(233, 8%, 79%)",
      "Dark-grayish-blue": "hsl(236, 13%, 42%)",
      "Very-dark-blue": "hsl(240, 100%, 5%)",

      // Default
      "white": "#ffffff",
      "black": "#000000",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
    },
    fontSize: { m: "15px" },
    fontWeight: {
      ms: 400,
      lg: 700,
      xl: 800,
    }



  },
  plugins: [],
}
