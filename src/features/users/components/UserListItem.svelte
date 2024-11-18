<script>
	import Card from '../../../core/ui/components/Card.svelte';
	import CardContent from '../../../core/ui/components/CardContent.svelte';
	import Link from '../../../core/ui/components/Link.svelte';
	import ListItem from '../../../core/ui/components/ListItem.svelte';
	import { routes } from '../../../core/routing/utils';

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
