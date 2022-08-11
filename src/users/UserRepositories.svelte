<script>
	import RepositoryCard from '../repositories/RepositoryCard.svelte';
	import ListItem from '../common/ListItem.svelte';

	export let userRepositories;
</script>

<ul class="flex flex-col gap-3">
	{#each userRepositories as userRepository}
		<ListItem>
			<RepositoryCard {userRepository} />
		</ListItem>
	{/each}
</ul>
