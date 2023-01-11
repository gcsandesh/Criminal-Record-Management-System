/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Manrope: ["Manrope", "sans-serif"],
			},
		},
	},
	plugins: [],
};
