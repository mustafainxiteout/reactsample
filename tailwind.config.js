module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        GoogleSans: "'Google Sans', sans-serif",
        Poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}