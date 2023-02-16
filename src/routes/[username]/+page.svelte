<script>
	import { page } from '$app/stores';
	import { fetchRepositories } from '../../repositories/RepositoryUtils';
	import RepositoryList from '../../repositories/RepositoryList.svelte';
	import Fetcher from '../../common/Fetcher.svelte';

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
