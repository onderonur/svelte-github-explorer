<script>
	import Card from '../common/Card.svelte';
	import CardContent from '../common/CardContent.svelte';
	import Link from '../common/Link.svelte';
	import ListItem from '../common/ListItem.svelte';
	import { routes } from '../routing/RoutingUtils';

	export let user;
</script>

<ListItem>
	<Link href={routes.user(user.login)}>
		<Card title={user.login}>
			<div class="aspect-square overflow-hidden">
				<img src={user.avatar_url} alt={user.login} />
			</div>
			<CardContent class="flex flex-col gap-2">
				<h2 class="text-lg font-bold text-ellipsis overflow-hidden">
					{user.login}
				</h2>
			</CardContent>
		</Card>
	</Link></ListItem
>
