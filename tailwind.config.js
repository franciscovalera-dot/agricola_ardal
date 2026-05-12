/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // tokens del scaffold (home/productos/footer)
        'verde-noche': '#0E240B',
        'verde-oscuro': '#2D4A1E',
        'crema': '#F5F0D0',
        'verde-lima': '#8BC34A',
        'negro': '#111111',
        'blanco': '#FFFFFF',
        // tokens del diseño de páginas de fruta y secciones largas
        cream: '#F5F5F5',
        sand: '#F6F3EA',
        paper: '#FCF9F0',
        ink: '#0B2407',
        ardalYellow: '#FFD533',
        ardalYellowSoft: '#FFE680',
        ardalGreen: '#8DC83E',
        ardalGreenDark: '#83BA38',
        ardalGreenDeep: '#133A0D',
        nectarinaPink: '#FF9E9D',
        naranjaOrange: '#FFB170',
        limonYellow: '#FFEF88',
      },
      fontFamily: {
        heading: ['"Grove Peach"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Aeonik"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-36px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.9s ease-out both',
        'slide-in-left': 'slideInLeft 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
