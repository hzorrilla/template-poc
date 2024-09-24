/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import designTokens from './src/tokens/core.tw.figmaTokens.json'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: designTokens.colors,
      spacing: designTokens.spacing,
      fontSize: designTokens.fontSizes
    }
  },
  daisyui: {
    themes: [
      {
        //default theme
        mytheme: {
          primary: '#6e46e6',
          '--rounded-btn': '.2rem'
        }
      },
      //dark theme para modo oscuro
      'dark'
    ]
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [daisyui]
}

export default config
