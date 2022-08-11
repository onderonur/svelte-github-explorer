<script>
	import { page } from '$app/stores';
	import { fetchRepository, fetchRepositoryContent } from '../../repositories/RepositoryUtils';
	import { Buffer } from 'buffer';
	import Chip from '../../common/Chip.svelte';
	import Fetcher from '../../common/Fetcher.svelte';
	import Link from '../../common/Link.svelte';
	import ListItem from '../../common/ListItem.svelte';
	import RepositoryFiles from '../../repositories/RepositoryFiles.svelte';
	import Markdown from '../../common/Markdown.svelte';

	let repositoryFetcher;
	let readmeFetcher;

	$: {
		const username = $page.params.username;
		const repositoryName = $page.params.repository;
		repositoryFetcher = fetchRepository(username, repositoryName);
		readmeFetcher = fetchRepositoryContent(username, repositoryName, 'README.md');
	}
</script>

<Fetcher fetcherFn={repositoryFetcher} let:data={{ repository, repositoryFiles }}>
	<div class="flex gap-4 flex-col lg:flex-row">
		<div class="flex-1">
			<h1 class="text-xl font-semibold mb-1">
				{repository.name}
			</h1>
			<RepositoryFiles {repositoryFiles} />
		</div>
		<div class="max-w-xs flex flex-col gap-2">
			{#if repository.description}
				<div>
					<h2 class="font-semibold">About</h2>
					{repository.description}
				</div>
			{/if}
			{#if repository.homepage}
				<Link
					href={repository.homepage}
					target="_blank"
					rel="noopener noreferrer"
					class="font-semibold"
				>
					{repository.homepage}
				</Link>
			{/if}
			{#if repository.topics.length}
				<ul class="flex flex-wrap gap-1">
					{#each repository.topics as topic}
						<ListItem>
							<Chip>{topic}</Chip>
						</ListItem>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
	<Fetcher fetcherFn={readmeFetcher} let:data={readme}>
		<div class="rounded-md border mt-4 [&>*]:px-4 [&>*]:py-2">
			<div class="border-b">README.md</div>
			<Markdown content={Buffer.from(readme.content, 'base64').toString()} />
		</div>
	</Fetcher>
</Fetcher>
