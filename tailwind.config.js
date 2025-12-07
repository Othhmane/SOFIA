/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#007BFF',
          violet: '#6A0DAD',
          turquoise: '#17C3B2',
          mint: '#20C997',
          dark: '#343A40'
        },
        gray: {
          light: '#F4F4F4'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};