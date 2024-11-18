<script>
	import AlertError from './AlertError.svelte';
	import Loading from './Loading.svelte';

	export let fetcherFn;
</script>

{#await fetcherFn}
	<Loading />
{:then data}
	<slot {data} />
{:catch error}
	<AlertError {error} />
{/await}
