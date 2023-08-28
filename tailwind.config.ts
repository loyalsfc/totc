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
        "primary": "#49BBBD",
        "turqoise": "#00CBB8",
        "blue": "#2F327D",
        "dark-blue": "#252641",
        'green-100': "#33EFA0",
        "dark": "#2D3436",
        'wrapper-background': "rgba(157, 204, 255, 0.2)"
      },
      fontFamily:{
        "nunito-sans": ['var(--font-nunito-sans)']
      }
    },
  },
  plugins: [],
}
export default config
