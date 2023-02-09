<script>
	import { page } from '$app/stores';
	import { fetchRepository, fetchRepositoryContent } from '../../repositories/RepositoryUtils';
	import Fetcher from '../../common/Fetcher.svelte';
	import Link from '../../common/Link.svelte';
	import RepositoryFiles from '../../repositories/RepositoryFiles.svelte';
	import Head from '../../common/Head.svelte';
	import RepositoryReadMe from '../../repositories/RepositoryReadMe.svelte';
	import RepositorySummary from '../../repositories/RepositorySummary.svelte';
	import { routes } from '../../routing/RoutingUtils';

	let username;
	let repositoryName;
	let repositoryFetcher;
	let readmeFetcher;

	$: {
		username = $page.params.username;
		repositoryName = $page.params.repository;
		repositoryFetcher = fetchRepository(username, repositoryName);
		readmeFetcher = fetchRepositoryContent(username, repositoryName, 'README.md');
	}
</script>

<Head title={`${username} - ${repositoryName}`} />

<Fetcher fetcherFn={repositoryFetcher} let:data={{ repository, repositoryFiles }}>
	<div class="grid gap-4 lg:grid-cols-[1fr_theme('spacing.64')]">
		<div>
			<h1 class="text-xl font-semibold mb-1">
				<Link href={routes.user(repository.owner.login)}>{repository.owner.login}</Link
				>/{repository.name}
			</h1>
			<RepositoryFiles {repositoryFiles} />
		</div>
		<RepositorySummary {repository} />
		<div class="lg:col-span-2">
			<Fetcher fetcherFn={readmeFetcher} let:data={readme}>
				<RepositoryReadMe content={readme.content} />
			</Fetcher>
		</div>
	</div>
</Fetcher>
