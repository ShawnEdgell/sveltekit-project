import daisyui from 'daisyui';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './src/app.html'],
	theme: {
		extend: {}
	},
	plugins: [daisyui, typography, aspectRatio],
	daisyui: {
		themes: ['light'] // Add light and dark themes
	}
};
