<script>
	import '../app.css';
	import Link from '../common/Link.svelte';
	import SearchForm from '../users/UserSearchForm.svelte';
	import GitHubIcon from '../icons/GitHubIcon.svelte';
	import Head from '../common/Head.svelte';
	import { routes } from '../routing/RoutingUtils';
</script>

<Head />

<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
	<header class="h-16 bg-slate-700 flex items-center justify-between gap-4 p-4">
		<Link href={routes.home()} class="text-white font-semibold text-xl md:text-2xl"
			>svelte-github-explorer</Link
		>
		<Link
			href="https://github.com/onderonur/svelte-github-explorer"
			target="_blank"
			rel="noopener noreferrer"
			class="h-8 w-8 fill-white"
		>
			<GitHubIcon />
		</Link>
	</header>
	<main class="max-w-screen-xl mx-auto p-4 w-full">
		<SearchForm />
		<slot />
	</main>
	<footer class="h-16 bg-slate-200 flex items-center p-4 text-slate-600">
		Built with
		<a
			href="https://kit.svelte.dev/"
			target="_blank"
			rel="noopener noreferrer"
			class="underline ml-1"
		>
			SvelteKit
		</a>
	</footer>
</div>
