<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;

	const rows = blok.list.split('\n');
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="w-full">
		{#each rows as row}
			<div class=" pl-6 flex border-b border-gray-300 first:font-medium leading-10 font-light">
				{#each row.split(',') as cell}
					<span class="w-48">{cell}</span>
				{/each}
			</div>
		{/each}
	</div>
{/key}
