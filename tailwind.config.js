/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        colors: {
          customGreen: '#9DD5CA',
          darkGreen : '#445046',
        }
      }
    }
  }
