<script>
	import { storyblokEditable, StoryblokComponent, renderRichText } from '@storyblok/svelte';
	import moment from 'moment';
	import Chip from '../common/Chip.svelte';
	import Gallery from './Gallery.svelte';

	export let blok;

	$: articleHTML = renderRichText(blok.description);
</script>

<section use:storyblokEditable={blok}>
	<h5 class="font-bold mb-2">{blok.product_title}</h5>
	<p class="mb-2">
		<a class="text-blue-400 cursor-pointer" href={blok.product_url}>{blok.product_url}</a>
	</p>
	<section class="text-gray-500 font-light">{@html articleHTML}</section>
	<div class="flex flex-wrap gap-2 mt-4 mb-10">
		{#each blok.tags?.split('\n') as tag}
			<Chip {tag} />
		{/each}
	</div>
	<h5 class="font-medium mt-4 mb-6">Screenshots</h5>
	<Gallery galleryID={blok.product_title.toLowerCase().replace(/ /g, '')} assets={blok.assets} />
</section>
