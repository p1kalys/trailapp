/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'darkGray': '#434142',
        'azure': '#50b8d2',
        'limeGreen': '#CEFF66',
        'lightGrey': '#DCDEE0',
        'white': '#FFFFFF',
        'primary': '#2F395C',
      },
      fontFamily: {
        "century-regular": ['"Century-Gothic-Regular"', ...defaultTheme.fontFamily.sans],
        "century-bold": ['"Century-Gothic-Bold"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
