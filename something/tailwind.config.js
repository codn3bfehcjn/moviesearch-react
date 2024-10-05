/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      edu: ["Oswald", 'sans-serif']
    },
    colors:{
      "vishwam":'#6b7280',
      'metal': '#565584',
      "amber":"#f59e0b"
    },
    extend: {},
  },
  plugins: [],
};
