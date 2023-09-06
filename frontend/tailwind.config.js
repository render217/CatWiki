/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'MysteryQuest':['Mystery Quest','sans-serif'],
        'Montserrat':['Montserrat','sans-serif']
      },
      colors:{
        cZinnwalditeBrown:"#291507",
        cNight:'#050709',
        cPerlBush:"#E3E1DC",
        cBrownDerby:'#4D270C',
        cZinnwalditeBrownOp:'rgba(41, 21, 7, 0.60)',
        cMountainMist:"#979797",
        cJudgeGrey:"#544439",
        cLavenderPinocchio:"#E0E0E0",
      },
    
    },
  },
  plugins: [],
}