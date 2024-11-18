<script>
	export let title = '';
</script>

<svelte:head>
	{#if title}
		<title>{title} | svelte-github-explorer</title>
	{:else}
		<title>svelte-github-explorer</title>
	{/if}
</svelte:head>
