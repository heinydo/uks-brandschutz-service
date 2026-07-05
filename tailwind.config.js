/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#E2231A',
          dark: '#B71C13',
          light: '#FDECEB'
        },
        ink: '#1A1C1F'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
