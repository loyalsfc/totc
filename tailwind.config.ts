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
        'green-100': "#33EFA0"
      },
      fontFamily:{
        "nunito-sans": ['var(--font-nunito-sans)']
      }
    },
  },
  plugins: [],
}
export default config
