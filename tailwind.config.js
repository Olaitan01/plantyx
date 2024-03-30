/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    
    colors:{
      'gray':'rgb(207,207,207)',
      'black':'rgb(0,0,0)',
      'white':'rgb(255,255,255)',
     ' purple': 'rgb(220,198,255)',
     'steps': 'rgb(237,237,237)'
    },
    fontSize:{
      sm : '0.2rem'
    },
    extend: {
     
    },
  },
  plugins: [],
}

