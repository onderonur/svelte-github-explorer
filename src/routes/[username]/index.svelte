<script>
	import { page } from '$app/stores';
	import { fetchUserRepositories } from '../../users/UserUtils';
	import UserRepositories from '../../users/UserRepositories.svelte';
	import Fetcher from '../../common/Fetcher.svelte';

	let username;
	let userRepositoriesFetcher;

	$: {
		username = $page.params.username;
		userRepositoriesFetcher = fetchUserRepositories(username);
	}
</script>

<Fetcher fetcherFn={userRepositoriesFetcher} let:data={userRepositories}>
	<UserRepositories {userRepositories} />
</Fetcher>
