/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
			'body': '#333',
			'lightgrey': '#eee',
			'offwhite': '#ddd',
			'light': '#fff',
			'dark': '#000',
			'lightdark': '#666',
			'primary': '#7C2045',
      'secondary': '#009dc4'
		},
  },
  plugins: [],
}