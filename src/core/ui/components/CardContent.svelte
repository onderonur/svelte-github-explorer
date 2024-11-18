<script>
	let className = '';
	export { className as class };
</script>

<div class={`p-4 ${className}`}>
	<slot />
</div>
