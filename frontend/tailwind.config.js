/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Outfit': 'Outfit',
      },
      colors: {
        'regal-blue': '#4f63a0',  // Corrected hex color code
      },
      keyframes: {
        'gradient-animation': {
          '0%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-animation': 'gradient-animation 3s linear infinite',
      },
    },
  },
  plugins: [],
}
