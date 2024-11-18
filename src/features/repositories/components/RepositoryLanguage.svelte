<script>
	import Chip from '../../../core/ui/components/Chip.svelte';

	export let language;
</script>

{#if language}
	<Chip color="blue">{language}</Chip>
{/if}
