<script>
	import { page } from '$app/stores';
	import { fetchUser } from '../../features/users/utils';
	import UserDetails from '../../features/users/components/UserDetails.svelte';
	import Fetcher from '../../core/ui/components/Fetcher.svelte';
	import Head from '../../core/ui/components/Head.svelte';

	let username;
	let userFetcher;

	$: {
		username = $page.params.username;
		userFetcher = fetchUser(username);
	}
</script>

<Head title={username} />

<Fetcher fetcherFn={userFetcher} let:data={user}>
	<div class="grid md:grid-cols-[theme(spacing.72)_1fr] gap-4">
		<div class="mx-auto md:mx-0 max-w-xs md:max-w-none">
			<UserDetails {user} />
		</div>
		<slot />
	</div>
</Fetcher>
