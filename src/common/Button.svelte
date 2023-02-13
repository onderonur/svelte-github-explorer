<script>
	export let type = 'button';
	let className = '';
	export { className as class };
</script>

<button
	class={`border-0 bg-emerald-200 rounded-md text-emerald-700 font-semibold px-4 py-2 ${className}`}
	on:click
	{type}
>
	<slot />
</button>
