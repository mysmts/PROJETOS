module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6600', // Cor do botão e detalhes
        secondary: '#007bff', // Cor do link
        background: '#f7f7f7', // Cor de fundo
        heading: '#2d2d2d', // Cor dos títulos
        paragraph: '#333', // Cor do texto
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

  
  