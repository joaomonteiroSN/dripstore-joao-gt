/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        dark: {
          DEFAULT: 'var(--color-dark-gray)',
          2: 'var(--color-dark-gray-2)',
          3: 'var(--color-dark-gray-3)',
        },
        light: {
          DEFAULT: 'var(--color-light-gray)',
          2: 'var(--color-light-gray-2)',
          3: 'var(--color-light-gray-3)',
        },
        white: 'var(--color-white)',
      },
    },
  },
  plugins: [],
}