/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          primary: '#F5A623',
          hover: '#e09520',
        },
        dark: {
          bg: '#0D0000',
          card: '#1A0A00',
          border: '#2a1500',
        }
      },
      fontFamily: {
        display: ['Bebas Neue', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
