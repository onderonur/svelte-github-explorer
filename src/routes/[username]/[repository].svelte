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
	<div class="flex flex-col gap-4">
		<div class="flex gap-4 flex-col lg:flex-row">
			<div class="flex-1">
				<h1 class="text-xl font-semibold mb-1">
					<Link href={routes.user(repository.owner.login)}>{repository.owner.login}</Link
					>/{repository.name}
				</h1>
				<RepositoryFiles {repositoryFiles} />
			</div>
			<div class="flex-none basis-64">
				<RepositorySummary {repository} />
			</div>
		</div>
		<Fetcher fetcherFn={readmeFetcher} let:data={readme}>
			<RepositoryReadMe content={readme.content} />
		</Fetcher>
	</div>
</Fetcher>
