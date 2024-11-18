<script>
	import FolderIcon from '../../../core/icons/components/FolderIcon.svelte';
	import FileIcon from '../../../core/icons/components/FileIcon.svelte';

	export let repositoryFiles;
</script>

<ul class="border rounded-md [&>*:not(:last-child)]:border-b">
	{#each repositoryFiles as file}
		<li class="flex items-center gap-2 px-2 py-1">
			<div class="w-6">
				{#if file.type === 'dir'}
					<FolderIcon class="fill-sky-500" />
				{:else}
					<FileIcon />
				{/if}
			</div>
			{file.name}
		</li>
	{/each}
</ul>
