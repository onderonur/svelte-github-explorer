<script>
	import Link from '../common/Link.svelte';
	import RepositoryCountInfo from './RepositoryCountInfo.svelte';
	import RepositoryLanguage from './RepositoryLanguage.svelte';
	import RepositoryTopics from './RepositoryTopics.svelte';

	export let repository;
</script>

<div class="flex flex-col gap-2">
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
	<RepositoryTopics topics={repository.topics} />
	<RepositoryCountInfo
		direction="vertical"
		stargazers={repository.stargazers_count}
		forks={repository.forks_count}
		watchers={repository.watchers}
		openIssues={repository.open_issues_count}
	/>
	<RepositoryLanguage language={repository.language} />
</div>
