<script>
	export let href = undefined;
	export let rel = undefined;
	export let target = undefined;
	let className = '';
	export { className as class };
</script>

<a {href} {rel} {target} class={`cursor-pointer text-sky-500 ${className}`}>
	<slot />
</a>
