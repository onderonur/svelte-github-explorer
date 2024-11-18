<script>
	import Link from '../../../core/ui/components/Link.svelte';
	import Card from '../../../core/ui/components/Card.svelte';
	import CardContent from '../../../core/ui/components/CardContent.svelte';
	import RepositoryCountInfo from './RepositoryCountInfo.svelte';
	import RepositoryLanguage from './RepositoryLanguage.svelte';
	import RepositoryTopics from './RepositoryTopics.svelte';
	import { routes } from '../../../core/routing/utils';

	export let repository;
</script>

<Card>
	<CardContent class="flex flex-col gap-2">
		<div>
			<div class="flex justify-between gap-2">
				<Link
					href={routes.repository({
						username: repository.owner.login,
						repository: repository.name
					})}
					class="font-semibold text-lg"
				>
					{repository.name}
				</Link>
				<div class="text-slate-400 text-sm">
					{new Date(repository.created_at).toLocaleDateString()}
				</div>
			</div>
			{#if repository.description}
				<p>{repository.description}</p>
			{/if}
		</div>
		{#if repository.homepage}
			<Link href={repository.homepage} target="_blank" rel="noopener noreferrer">
				{repository.homepage}
			</Link>
		{/if}
		<RepositoryCountInfo
			stargazers={repository.stargazers_count}
			forks={repository.forks_count}
			watchers={repository.watchers}
			openIssues={repository.open_issues}
		/>
		<RepositoryTopics topics={repository.topics} />
		<RepositoryLanguage language={repository.language} />
	</CardContent>
</Card>
