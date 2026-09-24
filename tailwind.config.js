/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        hand: ['Caveat', 'cursive'],
        body: ['Quicksand', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#fefcf8',
          100: '#fdf8ee',
          200: '#faf0dc',
          300: '#f5e6c8',
          400: '#efd9b0',
          500: '#e7c994',
        },
        sky: {
          100: '#eef4fb',
          200: '#dceaf6',
          300: '#c4d9ee',
          400: '#a8c5e6',
          500: '#8db1d8',
        },
        blush: {
          100: '#fdf2f4',
          200: '#fbe5ea',
          300: '#f7d0da',
          400: '#f0b4c4',
          500: '#e89aae',
        },
        butter: {
          100: '#fef9ec',
          200: '#fdf0d4',
          300: '#fbe3b0',
          400: '#f5d27e',
        },
        sage: {
          100: '#f0f6ec',
          200: '#ddeed0',
          300: '#c4dfa8',
          400: '#a8ca84',
        },
        lavender: {
          100: '#f5f0fb',
          200: '#ebe0f7',
          300: '#d8c6ee',
          400: '#c4a9e0',
        },
      },
      animation: {
        'drift-slow': 'drift 20s ease-in-out infinite',
        'drift-slower': 'drift 30s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'flutter': 'flutter 3s ease-in-out infinite',
        'flicker': 'flicker 1.5s ease-in-out infinite',
        'bob': 'bob 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'wiggle': 'wiggle 0.5s ease-in-out',
        'squish': 'squish 0.3s ease-out',
        'pop-in': 'popIn 0.4s ease-out',
        'bounce-in': 'bounceIn 0.5s ease-out',
        'float-up': 'floatUp 4s ease-in infinite',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-slow': 'fadeIn 1.5s ease-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'page-turn': 'pageTurn 0.8s ease-in-out',
        'gentle-rotate': 'gentleRotate 8s ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '50%': { transform: 'translateX(30px) translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        flutter: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(5deg)' },
          '50%': { transform: 'translateY(-5px) rotate(-3deg)' },
          '75%': { transform: 'translateY(-12px) rotate(4deg)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scale(1) rotate(-1deg)', opacity: '1' },
          '50%': { transform: 'scale(1.1) rotate(1deg)', opacity: '0.85' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        squish: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9, 0.85)' },
          '100%': { transform: 'scale(1)' },
        },
        popIn: {
          '0%': { transform: 'scale(0) rotate(-15deg)', opacity: '0' },
          '70%': { transform: 'scale(1.15) rotate(5deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0) translateY(20px)', opacity: '0' },
          '60%': { transform: 'scale(1.1) translateY(-5px)', opacity: '1' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0.8' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0.8)', opacity: '0.4' },
          '50%': { transform: 'scale(1.2)', opacity: '1' },
        },
        pageTurn: {
          '0%': { transform: 'perspective(1200px) rotateY(0deg)', opacity: '1' },
          '50%': { transform: 'perspective(1200px) rotateY(-90deg)', opacity: '0.5' },
          '100%': { transform: 'perspective(1200px) rotateY(0deg)', opacity: '1' },
        },
        gentleRotate: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
};
