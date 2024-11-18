<script>
	export let hasMiddot = false;
</script>

<li
	class={hasMiddot
		? "flex items-center gap-2 last:after:content-[''] after:content-['·'] after:text-slate-500"
		: ''}
>
	<slot />
</li>
