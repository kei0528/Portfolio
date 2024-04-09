/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'selector',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      base: ['var(--font-pt-mono)'],
    },
    colors: {
      white: '#ffffff',
      'grey-100': '#F3F4F6',
      'grey-200': '#D9D9D9',
      'grey-600': '#39393c',
      'grey-800': '#1F1F20',
      'purple-400': '#AE8DFA',
      'purple-600': '#5E37B8',
      'yellow-400': '#E1E1B3',
      'yellow-600': '#E6AF23',
      'blue-300': '#99C7DE',
      'blue-400': '#4FADDE',
      'blue-500': '#198BC7',
      'orange-400': '#E68023',
      'green-600': '#4D7059',
      'green-500': '#A3A340',
      'green-400': '#95B29F',
      'green-300': '#37bb3f',
    },
  },
  extend: {
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: '0' },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
