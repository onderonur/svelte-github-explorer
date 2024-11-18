<script>
	import Count from '../../../core/ui/components/Card.svelte';
	import ListItem from '../../../core/ui/components/ListItem.svelte';

	export let direction = 'horizontal';
	$: isHorizontal = direction === 'horizontal';

	export let stargazers;
	export let forks;
	export let watchers;
	export let openIssues;
</script>

<ul
	class="flex flex-wrap"
	class:gap-2={isHorizontal}
	class:flex-col={!isHorizontal}
	class:items-center={isHorizontal}
>
	<ListItem hasMiddot={isHorizontal}>
		<Count count={stargazers} suffix="Stars" />
	</ListItem>
	<ListItem hasMiddot={isHorizontal}>
		<Count count={forks} suffix="Forks" />
	</ListItem>
	<ListItem hasMiddot={isHorizontal}>
		<Count count={watchers} suffix="Watchers" />
	</ListItem>
	<ListItem hasMiddot={isHorizontal}>
		<Count count={openIssues} suffix="Open Issues" />
	</ListItem>
</ul>
