/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'bg': '#FAF9F6',
        'or-pale': '#D4AF37',
        'rose': '#EEE8DF',
        'gd-txt': '#2E2E2E',
        'txt': '#1C3D5A',
        'verte-menthe': '#B2D8B6',
        'txt-style': '#DAC3A4',
      },
      fontFamily:{
        'Poppins':["Poppins", "sans-serif"],
        'Playwrite':["Playwrite BE VLG", "cursive"]
      },
     backgroundImage: {
       'custom-image': "url('/img1.jpg')",
}
    },
  },
  plugins: [],  
}

