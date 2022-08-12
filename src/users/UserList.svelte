<script>
	import Link from '../common/Link.svelte';
	import ListItem from '../common/ListItem.svelte';
	import { routes } from '../routing/RoutingUtils';
	import UserCard from './UserCard.svelte';

	export let title;
	export let users;
</script>

<div>
	<div class="text-gray-700 font-semibold text-lg">{title}</div>
	<ul class="grid gap-2 grid-cols-[repeat(auto-fill,minmax(14rem,1fr))]">
		{#each users as user}
			<ListItem>
				<Link href={routes.user(user.login)}>
					<UserCard {user} />
				</Link>
			</ListItem>
		{/each}
	</ul>
</div>
