module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(244,114,182,0.08)',
        glow: '0 0 30px rgba(244,114,182,0.45), 0 0 70px rgba(244,114,182,0.15)',
        'glow-sm': '0 0 15px rgba(244,114,182,0.3)',
        card: '0 24px 80px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)',
      },
      colors: {
        petal: '#f9a8d4',
        gold: '#fbbf24',
        midnight: '#0c0812',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        heartFloat: {
          '0%':   { transform: 'translateY(0px) rotate(-4deg) scale(1)' },
          '33%':  { transform: 'translateY(-22px) rotate(5deg) scale(1.07)' },
          '66%':  { transform: 'translateY(-9px) rotate(-2deg) scale(0.96)' },
          '100%': { transform: 'translateY(0px) rotate(-4deg) scale(1)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15', transform: 'scale(0.7)' },
          '50%':       { opacity: '0.95', transform: 'scale(1.35)' },
        },
        heartRise: {
          '0%':   { transform: 'translateY(0) translateX(0) rotate(-5deg) scale(0.8)', opacity: '0' },
          '8%':   { opacity: '0.85' },
          '50%':  { transform: 'translateY(-50vh) translateX(15px) rotate(12deg) scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) translateX(-10px) rotate(-18deg) scale(0.7)', opacity: '0' },
        },
        aurora1: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.5' },
          '33%':      { transform: 'translate(60px,-40px) scale(1.08)', opacity: '0.7' },
          '66%':      { transform: 'translate(-30px,30px) scale(0.94)', opacity: '0.45' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.4' },
          '33%':      { transform: 'translate(-55px,38px) scale(1.06)', opacity: '0.6' },
          '66%':      { transform: 'translate(40px,-28px) scale(0.93)', opacity: '0.35' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)', opacity: '0.3' },
          '50%':      { transform: 'translate(28px,-48px) scale(1.1)', opacity: '0.55' },
        },
        scanLine: {
          '0%':   { top: '5%', opacity: '0' },
          '8%':   { opacity: '1' },
          '92%':  { opacity: '1' },
          '100%': { top: '95%', opacity: '0' },
        },
      },
      animation: {
        shimmer:    'shimmer 4s linear infinite',
        heartFloat: 'heartFloat 7s ease-in-out infinite',
        twinkle:    'twinkle 2.8s ease-in-out infinite',
        heartRise:  'heartRise linear infinite',
        aurora1:    'aurora1 16s ease-in-out infinite',
        aurora2:    'aurora2 20s ease-in-out infinite',
        aurora3:    'aurora3 13s ease-in-out infinite',
        scanLine:   'scanLine 2s cubic-bezier(0.4,0,0.6,1) infinite',
      },
    },
  },
  plugins: [],
};
