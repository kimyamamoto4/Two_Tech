/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.blade.php', './resources/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#29281f', paper: '#fbf8ef', gold: '#dcae1c' },
      fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
    },
  },
  plugins: [],
};
