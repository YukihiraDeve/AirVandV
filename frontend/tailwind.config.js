/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration: {
        '0': '0ms',
        '100': '100ms',
      },
      height: {
        '18': '1rem',
        '70': '10rem',
        '100': '23rem',
        '101': '24rem',
        '102':'25rem',
        '114': '32rem',
        '120' : '38rem',
        '128': '42rem',
        '140': '45rem',
        '152': '48rem',
        '200': '108rem'
      },
      width: {
        '18': '1rem',
        '103': '20rem',
        '102':'25rem',
        '114': '32rem',
        '120' : '38rem',
        '128': '42rem',
        '140': '45rem',
        '152': '48rem',
      }
    },
  },
  daisyui: {
    themes: [{
      light: {
        "primary": "#f4e47a",
        "secondary": "#ff9800",        
        "accent": "#181818",          
        "neutral": "#fffffff",             
        "base-100": "#f3f4f6",           
        "info": "#777777",          
        "success": "#25DACB",              
        "warning": "#B9940E",           
        "error": "#F75E82",
        "normal": "#000000",
        "special": "#181818",
      },
      dark: {
        "primary": "#8851d6",   
        "secondary": "#ff9800",          
        "accent": "#5047ef",          
        "neutral": "#f3f4f6",            
        "base-100": "#000000",       
        "info": "#ff9800",    
        "font": "#000000",      
        "success": "#24A388",            
        "warning": "#F4D366",            
        "error": "#EF2565",
        "normal": "#ffffff",
        "special": "#8851d6",
    },
  }
  ],
  },
  plugins: [require("daisyui")],
}