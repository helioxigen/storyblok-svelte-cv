<script>
	import { storyblokEditable, StoryblokComponent, renderRichText } from '@storyblok/svelte';

	export let blok;
</script>

<article use:storyblokEditable={blok}>
	<p class="text-gray-400 font-light text-sm">{blok.top_text}</p>
	<h3 class="text-lg font-medium mt-2 mb-4">{blok.title}</h3>
	<p class="text-gray-400 font-light">{blok.subtitle}</p>
</article>
