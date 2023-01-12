/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Manrope: ["Manrope", "sans-serif"],
			},
			colors: {
				dark: "#1d3557",
				light: "#f1faee",
			},
		},
	},
	plugins: [],
};
