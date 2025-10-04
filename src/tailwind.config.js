/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Couleurs personnalisées Caterpi
      colors: {
        'caterpi-night': '#0D0C2B',
        'caterpi-green': '#3BD16F',
        'caterpi-purple': '#A44DD8',
        'caterpi-red': '#E84343',
        'caterpi-gold': '#FFD86B',
      },
      // Polices personnalisées
      fontFamily: {
        'cinzel': ['Cinzel Decorative', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'caveat': ['Caveat', 'cursive'],
      },
      // Animations personnalisées
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      // Backdrop blur personnalisé
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};