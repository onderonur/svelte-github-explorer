<script>
	import Fetcher from '../core/ui/components/Fetcher.svelte';
	import Link from '../core/ui/components/Link.svelte';
	import { searchUsers } from '../features/users/utils';
	import { page } from '$app/stores';
	import UserList from '../features/users/components/UserList.svelte';
	import Button from '../core/ui/components/Button.svelte';
	import { goto } from '$app/navigation';
	import { routes } from '../core/routing/utils';
	import { FIRST_PAGE } from '../core/shared/utils';

	let username;
	let searchFetcher;
	let pageNumber;

	$: {
		username = $page.url.searchParams.get('username');
		pageNumber = Number($page.url.searchParams.get('page'));
		pageNumber = pageNumber || FIRST_PAGE;
		searchFetcher = username && searchUsers(username, pageNumber);
	}

	function handleClickPrevious() {
		goto(routes.home({ username, page: pageNumber - 1 }));
	}

	function handleClickNext() {
		goto(routes.home({ username, page: pageNumber + 1 }));
	}
</script>

<div class="flex flex-col gap-2">
	<p class="text-sm md:text-base max-w-2xl mx-auto">
		You can type a username to search and see their repositories. This project uses <Link
			href="https://docs.github.com/en/rest"
			target="_blank"
			rel="noopener noreferrer"
		>
			GitHub API
		</Link> and there is a rate limit in it. So, you may encounter some error messages about this after
		trying this demo a couple of times.
	</p>
	{#if searchFetcher}
		<Fetcher fetcherFn={searchFetcher} let:data={users}>
			<UserList title={`${users.total_count} users found for "${username}"`} users={users.items} />
			<div class="flex gap-2 justify-center mt-4">
				{#if users.hasPreviousPage}
					<Button on:click={handleClickPrevious}>Previous</Button>
				{/if}
				{#if users.hasNextPage}
					<Button on:click={handleClickNext}>Next</Button>
				{/if}
			</div>
		</Fetcher>
	{/if}
</div>
