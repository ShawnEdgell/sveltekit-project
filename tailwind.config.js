import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html'],
	theme: {
		extend: {}
	},
	plugins: [
		daisyui, // Use the imported Daisy UI module
		typography // Add Tailwind Typography plugin here
	],
	daisyui: {
		themes: ['light'] // Add light and dark themes
	}
};
