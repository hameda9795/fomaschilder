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
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#1b263b',
          950: '#0f172a',
        },
        accent: {
          50: '#fdf6f0',
          100: '#faebd8',
          200: '#f5d5b0',
          300: '#eeba84',
          400: '#e5a060',
          500: '#d4883f',
          600: '#c47a36',
          700: '#a3602c',
          800: '#854e29',
          900: '#6d4224',
        },
        cta: {
          50: '#fdf3f0',
          100: '#f9e4dc',
          200: '#f3c8b9',
          300: '#eba592',
          400: '#e07d64',
          500: '#d66042',
          600: '#c65d3b',
          700: '#a4472f',
          800: '#873d2b',
          900: '#703628',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      screens: {
        'xs': '393px',
      },
    },
  },
  plugins: [],
}
