<script>
	export let title = '';
</script>

<svelte:head>
	{#if title}
		<title>{title} | svelte-gitter</title>
	{:else}
		<title>svelte-gitter</title>
	{/if}
</svelte:head>
