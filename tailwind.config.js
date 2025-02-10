/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'osemibold': ["OnestSemiBold"],
        'obold': ["OnestBold"],
        'omedium': ['OnestMedium'],
        'oregular': ['OnestRegular'],
        'olight': ['OnestLight'],
      },
      keyframes: {
        spinRightTop: {
          '0%': {transform: ['rotate(0deg)', 'translateY(10px)']},
          '100%': {transform: 'rotate(20deg)'},
        },
        spinRightBottom: {
          '0%': {transform: ['rotate(0deg)', 'translateY(-15px)']},
          '100%': {transform: 'rotate(-30deg)'},
        },
        spinLeftTop: {
          '0%': {transform: ['rotate(0deg)', 'translate(-10px, 10%)']},
          '100%': {transform: 'rotate(-20deg)'},
        },
        spinLeftBottom: {
          '0%': {transform: ['rotate(0deg)', 'translateY(-15px)']},
          '100%': {transform: 'rotate(-30deg)'},
        }
      },

      animation: {
        spinRightTop: 'spinRightTop 1.8s ease-in-out alternate infinite',
        spinRightBottom: 'spinRightBottom 2s ease-in-out alternate infinite',
        spinLeftTop: 'spinLeftTop 1.3s ease-in-out alternate infinite',
        spinLeftBottom: 'spinLeftBottom 1.2s ease-in-out alternate infinite',
      },
      colors: {
        'to': '#FE5000',
        'ty': '#FFD00A',
        'gr': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 53.2%, rgba(0, 0, 0, 0.8) 100%)',
        'ct': "linear-gradient(90deg, rgba(255,255,255,0) 0%, (0,0,0,0) 99%)"
      },
      content: {
        'arrowRight': 'url("/img/elements/vectors/arrow-right.png")',
        'arrowLeft': 'url("/img/elements/vectors/arrow-left.png")'
      },
      backgroundColor: {
        'bgGray': '#F2F2F2'
      },
      backgroundImage: {
        'feedbackGradient': 'linear-gradient(91.71deg, #FE5000 30.36%, #FFC600 100.08%)',
        'bgCareer': "url('/img/elements/career/bg.png')"
      },
      boxShadow: {
        'blockShadow': '0px 4px 32px 0px rgba(0, 0, 0, 0.08)',
        'qrShadow': '0px 2.05px 28.73px 0px rgba(39, 41, 48, 0.07)',
        'mapShadow': '0px 6px 13px 0px rgba(39, 41, 48, 0.06)',
        'numberShadow': '0px 2px 8px 0px rgba(0, 0, 0, 0.06)',
        'otherShadow': '0px 3px 13px 0px rgba(39, 41, 48, 0.09)',
        'searchShadow': '0px 3px 10px 0px rgba(0, 0, 0, 0.14)'
      }
    },

  },
  plugins: [],
}