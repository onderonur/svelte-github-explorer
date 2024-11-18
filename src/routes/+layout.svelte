<script>
	import '../app.css';
	import Link from '../core/ui/components/Link.svelte';
	import UserSearchForm from '../features/users/components/UserSearchForm.svelte';
	import GitHubIcon from '../core/icons/components/GitHubIcon.svelte';
	import Head from '../core/ui/components/Head.svelte';
	import { routes } from '../core/routing/utils';
</script>

<Head />

<div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
	<header class="h-12 md:h-14 bg-slate-700 flex items-center justify-between gap-4 p-4">
		<Link href={routes.home()} class="text-white font-semibold text-xl md:text-2xl"
			>svelte-github-explorer</Link
		>
		<Link
			href="https://github.com/onderonur/svelte-github-explorer"
			target="_blank"
			rel="noopener noreferrer"
			class="size-7 md:size-8 fill-white"
		>
			<GitHubIcon />
		</Link>
	</header>
	<main class="max-w-screen-xl mx-auto p-2 md:p-3 w-full flex flex-col gap-2 md:gap-3">
		<UserSearchForm />
		<slot />
	</main>
	<footer
		class="h-14 md:h-16 mt-8 bg-slate-200 flex items-center p-4 text-slate-600 text-sm md:text-base"
	>
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
