<script>
	import { page } from '$app/stores';
	import { fetchUser } from '../../users/UserUtils';
	import UserInfo from '../../users/UserInfo.svelte';
	import Fetcher from '../../common/Fetcher.svelte';

	let username;
	let userFetcher;

	$: {
		username = $page.params.username;
		userFetcher = fetchUser(username);
	}
</script>

<svelte:head>
	<title>svelte-gitter | {username}</title>
</svelte:head>

<Fetcher fetcherFn={userFetcher} let:data={user}>
	<div class="flex gap-4 flex-col md:flex-row">
		<div class="mx-auto max-w-xs shrink-0 w-full">
			<UserInfo {user} />
		</div>
		<div class="w-full min-w-0">
			<slot />
		</div>
	</div>
</Fetcher>
