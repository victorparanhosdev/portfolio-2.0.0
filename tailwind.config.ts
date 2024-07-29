import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        'preahvihear': 'var(--font-preahvihear)'
      },
      colors: {
        'brand-color': 'var(--brand-color)',
        'brand-hover':'var(--brand-hover)',
        'dark': {
          10: '#0B0B0B',
          20: '#0E0E0E',
          30: '#151515',
          40: '#FFFFFF'
        },
      

      },
      boxShadow: {
        'brand-shadow': '0px 0px 150px -60px'

      },
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      },
      gridTemplateColumns:{
        projects: 'repeat(auto-fit, minmax(500px, 1fr))'
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          "2xl": "1218px",
        },
      }
    },
  },
  plugins: [],
};
export default config;
