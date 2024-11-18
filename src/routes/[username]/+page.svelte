<script>
	import { page } from '$app/stores';
	import { fetchRepositories } from '../../features/repositories/utils';
	import RepositoryList from '../../features/repositories/components/RepositoryList.svelte';
	import Fetcher from '../../core/ui/components/Fetcher.svelte';

	let username;
	let repositoriesFetcher;

	$: {
		username = $page.params.username;
		repositoriesFetcher = fetchRepositories(username);
	}
</script>

<Fetcher fetcherFn={repositoriesFetcher} let:data={repositories}>
	<RepositoryList {repositories} />
</Fetcher>
