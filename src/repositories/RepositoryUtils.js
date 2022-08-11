import { octokit } from '../common/CommonUtils';

export async function fetchRepository(owner, repo) {
	const [repository, repositoryFiles] = await Promise.all([
		octokit.request('GET /repos/{owner}/{repo}', {
			owner,
			repo
		}),
		octokit.request('GET /repos/{owner}/{repo}/contents', {
			owner,
			repo
		})
	]);

	return {
		repository: repository.data,
		repositoryFiles: repositoryFiles.data.sort((a) => (a.type === 'dir' ? -1 : 0))
	};
}

export async function fetchRepositoryContent(owner, repo, path) {
	const content = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
		owner,
		repo,
		path
	});

	return content.data;
}
