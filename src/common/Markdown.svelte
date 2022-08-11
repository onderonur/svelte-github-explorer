<script>
	import { marked } from 'marked';

	export let content;
</script>

<div class="markdown">
	{@html marked.parse(content)}
</div>

<style>
	:global(.markdown h1) {
		@apply text-3xl mb-4 border-b;
	}

	:global(.markdown h2) {
		@apply text-2xl my-3 border-b;
	}

	:global(.markdown h3) {
		@apply text-xl border-b;
	}

	:global(.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6) {
		@apply font-semibold my-2;
	}

	:global(.markdown ul) {
		@apply list-disc;
	}

	:global(.markdown li) {
		@apply ml-8;
	}

	:global(.markdown a) {
		@apply text-sky-600;
	}

	:global(.markdown pre) {
		@apply overflow-x-auto bg-gray-200 px-1;
	}

	:global(.markdown p) {
		@apply my-2;
	}

	:global(.markdown img) {
		@apply inline-block;
	}
</style>
