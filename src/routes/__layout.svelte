<script>
	import '../app.css';
	import Link from '../common/Link.svelte';
	import SearchForm from '../users/UserSearchForm.svelte';
	import { base } from '$app/paths';
	import GitHubIcon from '../icons/GitHubIcon.svelte';
</script>

<svelte:head>
	<title>svelte-gitter</title>
</svelte:head>

<div class="absolute inset-0 flex flex-col">
	<header class="h-16 bg-slate-700 flex items-center justify-between gap-4 p-4">
		<Link href={`${base}/`} class="text-white font-semibold text-2xl">svelte-gitter</Link>
		<Link
			href="https://github.com/onderonur/svelte-gitter"
			target="_blank"
			rel="noopener noreferrer"
			class="h-8 w-8 fill-white"
		>
			<GitHubIcon />
		</Link>
	</header>
	<main class="max-w-screen-xl mx-auto p-4 w-full flex-grow">
		<SearchForm />
		<slot />
	</main>
	<footer class="h-16 bg-slate-200 flex items-center p-4 text-slate-600">
		Built with
		<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer" class="underline ml-1">
			Svelte
		</a>
	</footer>
</div>
