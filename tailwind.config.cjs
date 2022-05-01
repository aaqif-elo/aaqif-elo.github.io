module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'text-slate-350': '#d5d5d5',
				'bg-blue-550': '#007ced'
			}
		},
		screens: {
			mobile: { max: '930px' }
		}
	},
	plugins: []
};
