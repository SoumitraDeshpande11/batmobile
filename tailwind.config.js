/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        poppins: ['var(--font-poppins)'],
      },
      colors: {
        'neon-blue': '#00f3ff',
        'dark-chrome': '#1a1a1a',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 10px #00f3ff' },
          '100%': { textShadow: '0 0 20px #00f3ff, 0 0 30px #00f3ff' },
        },
      },
    },
  },
  plugins: [],
}