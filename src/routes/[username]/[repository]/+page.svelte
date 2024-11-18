<script>
	import { page } from '$app/stores';
	import { fetchRepository, fetchRepositoryContent } from '../../../features/repositories/utils';
	import Fetcher from '../../../core/ui/components/Fetcher.svelte';
	import Link from '../../../core/ui/components/Link.svelte';
	import RepositoryFiles from '../../../features/repositories/components/RepositoryFiles.svelte';
	import Head from '../../../core/ui/components/Head.svelte';
	import RepositoryReadMe from '../../../features/repositories/components/RepositoryReadMe.svelte';
	import RepositorySummary from '../../../features/repositories/components/RepositorySummary.svelte';
	import { routes } from '../../../core/routing/utils';

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
	<div class="grid gap-4 lg:grid-cols-[1fr_theme(spacing.64)]">
		<div>
			<h1 class="text-xl font-semibold mb-1">
				<Link href={routes.user(repository.owner.login)}>{repository.owner.login}</Link
				>/{repository.name}
			</h1>
			<RepositoryFiles {repositoryFiles} />
		</div>
		<RepositorySummary {repository} />
		<div class="lg:col-span-full">
			<Fetcher fetcherFn={readmeFetcher} let:data={readme}>
				<RepositoryReadMe content={readme.content} />
			</Fetcher>
		</div>
	</div>
</Fetcher>
