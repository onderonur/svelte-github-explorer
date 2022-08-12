import { FIRST_PAGE, octokit } from '../common/CommonUtils';

export async function fetchUser(username) {
	const user = await octokit.request('GET /users/{username}', { username });

	return user.data;
}

export async function searchUsers(username, pageNumber) {
	const pageSize = 30;

	const users = await octokit.request(
		`GET /search/users?q=${encodeURIComponent(
			`${username} in:login type:user`
		)}&page=${pageNumber}&per_page=${pageSize}`
	);

	const hasPreviousPage = pageNumber > FIRST_PAGE;
	const hasNextPage = pageNumber * pageSize < users.data.total_count;

	return { ...users.data, hasPreviousPage, hasNextPage };
}
