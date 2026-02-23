/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1F1F1F',
        'craft-amber': '#C47A2C',
        'forest-green': '#2F5D3A',
        'warm-beige': '#F4EDE4',
        'off-white': '#FAFAFA',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
