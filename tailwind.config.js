/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nemesis: {
          bg: '#0A0A09',
          surface: '#111110',
          'surface-2': '#181816',
          border: '#262623',
          'border-light': '#333330',
          gold: '#C9A96E',
          'gold-dim': '#8B7040',
          'gold-glow': '#C9A96E33',
          ivory: '#F5F0E8',
          'ivory-dim': '#B8B4AC',
          muted: '#7A7870',
          'muted-light': '#5A5852',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display': ['clamp(1.8rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
      },
      animation: {
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.5s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        pulseGold: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(90deg, #C9A96E 0%, #E8D5A3 50%, #C9A96E 100%)',
      },
      boxShadow: {
        'gold-sm': '0 0 12px rgba(201,169,110,0.15)',
        'gold-md': '0 0 24px rgba(201,169,110,0.2)',
        'card': '0 1px 3px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
