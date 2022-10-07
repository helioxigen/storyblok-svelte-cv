<script>
	import { storyblokEditable } from '@storyblok/svelte';
	import Chip from '../common/Chip.svelte';

	export let blok;
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="flex flex-wrap gap-2">
		{#each blok.list.split('\n') as tag}
			<Chip {tag} />
		{/each}
	</div>
{/key}
