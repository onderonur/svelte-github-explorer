import { base } from '$app/paths';

export const routes = {
	home: ({ username, page } = {}) => {
		const searchParams = new URLSearchParams();

		if (username) {
			searchParams.set('username', username);
		}

		if (page) {
			searchParams.set('page', page);
		}

		const queryString = searchParams.toString();

		return `${base}/${queryString ? `?${queryString}` : ''}`;
	},
	user: (username) => `${base}/${username}`,
	repository: ({ username, repository }) => `${base}/${username}/${repository}`
};
