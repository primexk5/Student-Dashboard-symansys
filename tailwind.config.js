/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: '#F5F4F9',
        lightGray: "#ECEBF1",
        lightBlue: "#EBEAEF",
        customGray: '#797979',
        lightergray: "#B8B8B8",
        grayish: "#969696",
        lightsgray: "#C9C9C9",
        grayCustom: '#8F8F8F',
        softBlue: '#D6DAFF',
        softYellow: "#FFE7CA",
        textYellow: "#B97624",
        lightishGray: "#F1F1F1",
        lightishBlue: "#CFCEFF"
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}