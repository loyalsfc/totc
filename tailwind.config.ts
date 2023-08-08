import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgba(73, 187, 189, 1)"
      },
      fontFamily:{
        "nunito-sans": ['var(--font-nunito-sans)']
      }
    },
  },
  plugins: [],
}
export default config
