<script>
	import Link from '../common/Link.svelte';
	import Chip from '../common/Chip.svelte';
	import Card from '../common/Card.svelte';
	import CardContent from '../common/CardContent.svelte';
	import ListItem from '../common/ListItem.svelte';
	import Count from '../common/Count.svelte';
	import { base } from '$app/paths';

	export let userRepository;
</script>

<Card>
	<CardContent class="flex flex-col gap-2">
		<div>
			<div class="flex justify-between gap-2">
				<Link href={`${base}/${userRepository.full_name}`} class="font-semibold text-lg">
					{userRepository.name}
				</Link>
				<div class="text-slate-400 text-sm">
					{new Date(userRepository.created_at).toLocaleDateString()}
				</div>
			</div>
			{#if userRepository.description}
				<p>{userRepository.description}</p>
			{/if}
		</div>
		{#if userRepository.homepage}
			<Link href={userRepository.homepage} target="_blank" rel="noopener noreferrer">
				{userRepository.homepage}
			</Link>
		{/if}
		<ul class="flex flex-wrap gap-2 items-center">
			<ListItem hasMiddot>
				<Count count={userRepository.stargazers_count} suffix="Stars" />
			</ListItem>
			<ListItem hasMiddot>
				<Count count={userRepository.forks_count} suffix="Forks" />
			</ListItem>
			<ListItem hasMiddot>
				<Count count={userRepository.watchers} suffix="Watchers" />
			</ListItem>
			<ListItem hasMiddot>
				<Count count={userRepository.open_issues} suffix="Open Issues" />
			</ListItem>
		</ul>
		{#if userRepository.topics.length}
			<ul class="flex flex-wrap gap-1">
				{#each userRepository.topics as topic}
					<ListItem>
						<Chip>
							{topic}
						</Chip>
					</ListItem>
				{/each}
			</ul>
		{/if}
		{#if userRepository.language}
			<div>
				<Chip color="blue">{userRepository.language}</Chip>
			</div>
		{/if}
	</CardContent>
</Card>
