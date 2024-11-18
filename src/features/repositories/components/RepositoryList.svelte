<script>
	import RepositoryCard from '../../repositories/components/RepositoryCard.svelte';
	import ListItem from '../../../core/ui/components/ListItem.svelte';

	export let repositories;
</script>

<ul class="flex flex-col gap-3">
	{#each repositories as repository}
		<ListItem>
			<RepositoryCard {repository} />
		</ListItem>
	{/each}
</ul>
