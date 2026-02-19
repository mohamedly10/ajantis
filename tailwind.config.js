/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37', // Gold
          dark: '#B5932B',
        },
        secondary: '#0A192F', // Deep Blue/Black
        accent: '#112240',
        text: {
          light: '#E6F1FF',
          muted: '#8892B0',
          dark: '#0A192F',
        },
        background: '#020c1b',
        card: '#112240',
      },
      fontFamily: {
        heading: ['"CairoFont"', 'serif'],
        body: ['"CairoFont"', 'sans-serif'],
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          // هنا تقدر تضيف متغيرات جديدة خاصة بك
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1200px',
        },
      },
    },
  },
  plugins: [],
}
