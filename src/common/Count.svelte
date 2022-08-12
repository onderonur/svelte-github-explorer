<script>
	export let count;
	export let suffix;
</script>

{#if !isNaN(Number(count))}
	<div class="text-sm whitespace-nowrap text-slate-500">
		{count}
		{suffix}
	</div>
{/if}
