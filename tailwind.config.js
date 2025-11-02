module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 theme: { 
    extend: {
     fontFamily: {
  poppins: ['Poppins', 'sans-serif'],
},
    } 
  },
  plugins: [],
};