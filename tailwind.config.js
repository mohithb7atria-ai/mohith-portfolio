/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mint: {
          DEFAULT: '#B8DCCB',
          light: '#CEE8DC',
          dark: '#9AC6B0',
          glow: 'rgba(184, 220, 203, 0.25)'
        },
        cream: {
          DEFAULT: '#F7F4EA',
          muted: '#E6E2D5',
          faded: '#B8B5A9'
        },
        charcoal: {
          DEFAULT: '#252B29',
          light: '#2E3533',
          lighter: '#38413E',
          card: '#1F2422',
          deep: '#181C1B',
          darkest: '#101312'
        },
        mutedGreen: {
          DEFAULT: '#779D89',
          light: '#8EAEA0',
          dark: '#5E816F'
        },
        softWhite: '#FFFFFF',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        display: ['Michroma', 'sans-serif'],
        serif: ['Prata', 'serif'],
      },
      boxShadow: {
        'mint-glow': '0 0 30px rgba(184, 220, 203, 0.2)',
        'mint-hover': '0 10px 40px rgba(184, 220, 203, 0.35)',
        'card-soft': '0 20px 40px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
