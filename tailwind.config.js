import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html'],
	theme: {
		extend: {}
	},
	plugins: [daisyui], // Use the imported module
	daisyui: {
		themes: ['light'] // Add light and dark themes
	}
};
