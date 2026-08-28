/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        eng: {
          bg: '#f8f9fa',
          surface: '#ffffff',
          card: '#f1f3f5',
          border: '#e9ecef',
          text: '#121212',
          muted: '#6c757d',
          accent: '#0055ff',
          code: '#1e293b'
        },
        art: {
          bg: '#f6f4ee',
          surface: '#faf8f5',
          card: '#eeeae1',
          border: '#dcd6c8',
          text: '#1a1917',
          muted: '#787367',
          accent: '#8c3a2b', // Burnt sienna
          charcoal: '#222222',
          amber: '#c87d46'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.15em',
        ultra: '0.25em',
      },
      transitionDuration: {
        '1000': '1000ms',
        '1200': '1200ms',
      }
    },
  },
  plugins: [],
}
