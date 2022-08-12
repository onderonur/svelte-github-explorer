<script>
	import Chip from '../common/Chip.svelte';

	import ListItem from '../common/ListItem.svelte';

	export let topics;
</script>

{#if topics.length}
	<ul class="flex flex-wrap gap-1">
		{#each topics as topic}
			<ListItem>
				<Chip>{topic}</Chip>
			</ListItem>
		{/each}
	</ul>
{/if}
