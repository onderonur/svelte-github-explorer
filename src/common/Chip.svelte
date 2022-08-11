<script>
	export let color = 'green';
</script>

<div
	class="inline-block text-sm px-2 py-1 rounded-md"
	class:text-emerald-700={color === 'green'}
	class:bg-emerald-100={color === 'green'}
	class:text-sky-700={color === 'blue'}
	class:bg-sky-100={color === 'blue'}
>
	<slot />
</div>
