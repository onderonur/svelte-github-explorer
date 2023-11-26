<script>
	import Card from '../common/Card.svelte';
	import CardContent from '../common/CardContent.svelte';
	import Count from '../common/Count.svelte';
	import Link from '../common/Link.svelte';

	export let user;
</script>

<Card title={user.login}>
	<div class="aspect-square overflow-hidden">
		<img src={user.avatar_url} alt={user.login} />
	</div>
	<CardContent class="flex flex-col gap-2">
		<h1>
			<div class="text-2xl font-bold text-ellipsis overflow-hidden">
				{user.login}
			</div>
			{#if user.name}
				<div class="text-lg text-slate-500">{user.name}</div>
			{/if}
		</h1>
		<p />
		{#if user.bio}
			<p>
				{user.bio}
			</p>
		{/if}
		<div>
			<Count count={user.followers} suffix="Followers" />
			<Count count={user.following} suffix="Following" />
			<Count count={user.public_repos} suffix="Public Repositories" />
		</div>
		{#if user.company || user.location || user.blog || user.twitter_username}
			<div>
				{#if user.company}
					<div class="text-sm text-slate-500">
						{user.company}
					</div>
				{/if}
				{#if user.location}
					<div class="text-sm text-slate-500">
						{user.location}
					</div>
				{/if}
				{#if user.blog}
					<div>
						<Link href={user.blog} target="_blank" rel="noopener noreferrer" class="text-sm">
							{user.blog}
						</Link>
					</div>
				{/if}
				{#if user.twitter_username}
					<div>
						<Link
							href={`https://twitter.com/${user.twitter_username}`}
							target="_blank"
							rel="noopener noreferrer"
							class="text-sm"
						>
							{user.twitter_username}
						</Link>
					</div>
				{/if}
			</div>
		{/if}
	</CardContent>
</Card>
