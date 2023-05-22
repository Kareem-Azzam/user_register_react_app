/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    
    extend: {
      colors: {
        primary: "#04192e",
        secondColor: "#03EE61"
      },
      boxShadow: {
        'nav_shadow': '3px 7px 12px #031323',
      },
      Bordernumcity: {
        'nav2_shadow': '1px solid rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}

