/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all your React files
  ],
  theme: {
    extend: {
      colors: {
        'custom-main': '#2f2f2f', // Corrected key name to `colors`
      },
    },
  },
  plugins: [],
}
