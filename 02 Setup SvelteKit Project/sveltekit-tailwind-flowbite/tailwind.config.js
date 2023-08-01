/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#e5f4ff',
					100: '#cfebff',
					200: '#a9d7ff',
					300: '#75b9ff',
					400: '#3f8aff',
					500: '#145bff',
					600: '#0044ff',
					700: '#0045ff',
					800: '#003ee3',
					900: '#002395',
					950: '#001566'
				},
				secondary: {
					50: '#effefb',
					100: '#c8fff5',
					200: '#97feed',
					300: '#52f6e1',
					400: '#1fe2d0',
					500: '#06c6b6',
					600: '#01a096',
					700: '#067f78',
					800: '#0a6562',
					900: '#0e5350',
					950: '#003333'
				}
			}
		}
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')]
};
