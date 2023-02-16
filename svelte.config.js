import adapter from '@sveltejs/adapter-static';

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html'
		}),
		paths: {
			base: isProd ? '/svelte-github-explorer' : ''
		}
	}
};

export default config;
