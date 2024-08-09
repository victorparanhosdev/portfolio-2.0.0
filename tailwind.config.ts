import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
    
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-victor": 'linear-gradient(190deg, #96c7e0, #3661a6);'
      },
      fontFamily:{
        'preahvihear': 'var(--font-preahvihear)'
      },
      colors: {
        'victor':{
          '100': 'var(--victor-bg-100)',
          '200': 'var(--victor-header-200)',
          '300': 'var(--victor-text-300)',
          '400': 'var(--victor-text-400)',
          '500': 'var(--victor-menu-500)',
          '600': 'var(--victor-button-600)',
          '700': 'var(--victor-button-text-700)'
        },
        'brand-color': 'var(--brand-color)',
        'brand-hover':'var(--brand-hover)',
        'brand-light':'var(--brand-light)',
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
        layout: '70px 1fr auto'
      },
      gridTemplateColumns:{
        projects: 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: { opacity: '0', transform: 'translateX(150%)' },
          to: { opacity: '1', transform: 'translateX(0%) scale(1)' },
        },
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateX(100px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 350ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      minHeight: {
        'homescreen': 'calc((100vh - 128px))'
      },
      
    },
  
  },
  plugins: [],
};

export default config;
