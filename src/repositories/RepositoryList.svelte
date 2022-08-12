<script>
	import RepositoryCard from '../repositories/RepositoryCard.svelte';
	import ListItem from '../common/ListItem.svelte';

	export let repositories;
</script>

<ul class="flex flex-col gap-3">
	{#each repositories as repository}
		<ListItem>
			<RepositoryCard {repository} />
		</ListItem>
	{/each}
</ul>
