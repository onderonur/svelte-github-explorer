<script>
	import { page } from '$app/stores';
	import { fetchUser } from '../../users/UserUtils';
	import UserCard from '../../users/UserCard.svelte';
	import Fetcher from '../../common/Fetcher.svelte';
	import Head from '../../common/Head.svelte';

	let username;
	let userFetcher;

	$: {
		username = $page.params.username;
		userFetcher = fetchUser(username);
	}
</script>

<Head title={username} />

<Fetcher fetcherFn={userFetcher} let:data={user}>
	<div class="flex gap-4 flex-col md:flex-row">
		<div class="mx-auto max-w-xs basis-72 flex-none">
			<UserCard {user} />
		</div>
		<div class="flex-1 min-w-0">
			<slot />
		</div>
	</div>
</Fetcher>
