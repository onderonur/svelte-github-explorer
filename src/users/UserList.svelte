<script>
	import UserListItem from './UserListItem.svelte';

	export let title;
	export let users;
</script>

<div>
	<div class="text-gray-700 font-semibold text-lg">{title}</div>
	<ul class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
		{#each users as user}
			<UserListItem {user} />
		{/each}
	</ul>
</div>
