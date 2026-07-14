/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f6f3ec',
        sidebar: '#171c2b',
        'sidebar-hover': '#232a3d',
        'sidebar-active': '#262f46',
        'sidebar-text': '#9aa1b5',
        'sidebar-text-dim': '#6b7288',
        accent: '#6a5cf5',
        'accent-dark': '#17213a',
        card: '#ffffff',
        'card-border': '#ecebe5',
        ink: '#1b1d23',
        'ink-soft': '#74757c',
        line: '#eceae2',

        'blue-bg': '#e2e9fb',  'blue-ink': '#3454d1',
        'amber-bg': '#fbe9c9', 'amber-ink': '#9a6a15',
        'green-bg': '#d9efdd', 'green-ink': '#2f8f4e',
        'peach-bg': '#fbe3d3',

        'pill-wait-bg': '#f6e3c6',  'pill-wait-ink': '#8a5a17',
        'pill-draft-bg': '#dfe6fb', 'pill-draft-ink': '#33509e',
        'pill-done-bg': '#d9efdd',  'pill-done-ink': '#2f8f4e',
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'Malgun Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
