/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        navy: '#0B1F5C',
        brand: {
          DEFAULT: '#0A6CFF',
          deep: '#0A3FD6',
          cyan: '#00C8E0',
          mist: '#EEF3FF',
          line: '#D6E0F7',
          muted: '#5A6B99',
        },
        income: '#16A34A',
        expense: '#E11D48',
      },
      fontFamily: {
        heading: ['"Sora Variable"', 'Sora', 'system-ui', 'sans-serif'],
        body: ['"DM Sans Variable"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        phone: '0 30px 60px -20px rgba(11,31,92,0.35), 0 12px 24px -12px rgba(10,63,214,0.25)',
        card: '0 10px 30px -12px rgba(11,31,92,0.18)',
        glow: '0 12px 40px -8px rgba(10,108,255,0.55)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg,#0A3FD6 0%,#0A6CFF 55%,#1AA7FF 100%)',
        'navy-gradient': 'linear-gradient(160deg,#0B1F5C 0%,#0A3FD6 120%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        spinSlow: { to: { transform: 'rotate(360deg)' } },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'dialog-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 1.2s infinite',
        shimmer: 'shimmer 1.6s infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
        'spin-slow': 'spinSlow 1s linear infinite',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'dialog-in': 'dialog-in 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
