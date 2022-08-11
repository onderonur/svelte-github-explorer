<script>
	export let type;
</script>

<button
	class="border-0 bg-emerald-200 rounded-md rounded-l-none text-emerald-700 font-semibold px-4 py-2"
	on:click
	{type}
>
	<slot />
</button>
