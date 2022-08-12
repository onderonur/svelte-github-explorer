<script>
	import { goto } from '$app/navigation';
	import Button from '../common/Button.svelte';
	import SearchIcon from '../icons/SearchIcon.svelte';
	import { routes } from '../routing/RoutingUtils';

	function handleSearch(e) {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const newUsername = formData.get('username');
		goto(routes.home({ username: newUsername }));
	}
</script>

<form class="max-w-2xl mx-auto mb-4" novalidate autocomplete="off" on:submit={handleSearch}>
	<div class="flex">
		<input
			class="flex-1 p-2 text-lg rounded-md rounded-r-none border border-r-0"
			name="username"
			placeholder="Type a username to search..."
		/>
		<Button type="submit" class="rounded-l-none ">
			<SearchIcon class="h-6 w-6 fill-emerald-800" />
		</Button>
	</div>
</form>
