import { octokit } from '../common/CommonUtils';

export async function fetchUser(username) {
	const user = await octokit.request('GET /users/{username}', { username });

	return user.data;
}

export async function fetchUserRepositories(username) {
	const userRepositories = await octokit.request('GET /users/{username}/repos', {
		username,
		sort: 'pushed'
	});

	return userRepositories.data;
}
