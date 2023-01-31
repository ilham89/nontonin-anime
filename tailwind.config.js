/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../assets/aot-heroimg.jpg')",
      },
      boxShadow: {
        hero: 'inset 0 -100px 120px rgb(0 0 0 / 80%)',
      },
    },
  },
  plugins: [],
};
