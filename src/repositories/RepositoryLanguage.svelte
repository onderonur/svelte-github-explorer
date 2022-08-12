<script>
	import Chip from '../common/Chip.svelte';

	export let language;
</script>

{#if language}
	<Chip color="blue">{language}</Chip>
{/if}
