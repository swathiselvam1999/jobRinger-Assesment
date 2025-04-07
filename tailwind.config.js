/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:['Roboto', 'sans-serif'],
      },
      animation:{
        gradient: 'gradientMove 3s ease-in-out infinite',
      },
      keyframes:{
        gradientMove:{
          '0%, 100%':{
            'background-postion': '0% 50%'
          },
          '50%':{
            'background-position': '100% 50%'
          }
        }
      },
      backgroundSize:{
        '200': '200% 200%',
      },
    },
  },
  plugins: [],
}

