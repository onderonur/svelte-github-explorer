<script>
	import { Buffer } from 'buffer';
	import Markdown from '../common/Markdown.svelte';

	export let content;
</script>

{#if content}
	<div class="rounded-md border [&>*]:px-4 [&>*]:py-2">
		<div class="border-b text-sm text-gray-700">README.md</div>
		<Markdown content={Buffer.from(content, 'base64').toString()} />
	</div>
{/if}
