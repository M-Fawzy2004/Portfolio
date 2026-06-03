/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#050507',
          50: '#050507',
          100: '#0C0C0F',
          200: '#0E0E12',
          300: '#12131A',
          400: '#16171D',
          500: '#1C1D26',
        },
        glass: {
          DEFAULT: 'rgba(18,19,26,0.5)',
          border: 'rgba(255,255,255,0.04)',
          hover: 'rgba(255,255,255,0.06)',
        },
        accent: {
          cyan: '#22D3EE',
          violet: '#8B5CF6',
          DEFAULT: '#22D3EE',
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
