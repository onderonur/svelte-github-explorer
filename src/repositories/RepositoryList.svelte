<script>
	import RepositoryCard from '../repositories/RepositoryCard.svelte';
	import ListItem from '../common/ListItem.svelte';

	export let repositories;
</script>

<ul class="space-y-3">
	{#each repositories as repository}
		<ListItem>
			<RepositoryCard {repository} />
		</ListItem>
	{/each}
</ul>
