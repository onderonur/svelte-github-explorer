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

<search>
	<form class="max-w-2xl w-full mx-auto" novalidate autocomplete="off" on:submit={handleSearch}>
		<div class="flex">
			<input
				type="search"
				class="flex-1 p-2 px-3 md:text-lg rounded-md rounded-r-none border border-r-0"
				name="username"
				placeholder="Type a username to search..."
			/>
			<Button type="submit" class="rounded-l-none ">
				<SearchIcon class="size-6 fill-emerald-800" />
			</Button>
		</div>
	</form>
</search>
