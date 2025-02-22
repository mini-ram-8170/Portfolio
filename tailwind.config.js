/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 2s',
        'float-slow': 'float 10s ease-in-out infinite 1s',
        'shine': 'shine 1.5s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        }
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.card-hover': {
          'transform-style': 'preserve-3d',
          'transition': 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
          }
        },
        '.shine-effect': {
          'background': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
          'backgroundSize': '200% 100%',
          'animation': 'shine 1.5s ease-in-out infinite',
        }
      });
    }
  ],
}