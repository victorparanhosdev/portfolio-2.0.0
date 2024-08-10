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
        "linear-blue": 'linear-gradient(180deg, #a8d8f0, #326181);',
        "linear-gray": "linear-gradient(180deg,#121212,#1a1a1a, #121212)",
        "linear-gray-2": "linear-gradient(0deg,#121212,#262626)",
        "linear-gray-3": "linear-gradient(180deg, rgba(18, 18, 18, 0) 1%, #121212 37%)",
    },
      colors: {
        blue: {
          dark: {
            '100': '#41bbff', //botao text, span
            '200': '#1f2937' // botao switch icone
          }
        },
        gray:{
          dark: {
  
            '100': '#ffffff12', // background do header
            '200': '#ffffff1c', //divide e background do switch
            '300': '#ffffff99', //text descricao, menu, botao swtich
            '400': '#ffffffde', // hover do text e descricao menu e logomarca, titulo princiapl,
            '450': '#d1d5db', // botao menu hambuguer
            '500': '#121212', //background principal
          }
        }

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
