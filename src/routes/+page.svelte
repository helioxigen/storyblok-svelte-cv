<script>
	import { onMount } from 'svelte';
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte';
	import { browser } from '$app/environment';
	// import { browser } from '$app/environment';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import PhotoSwipe from 'photoswipe';

	export let data;

	if (browser) {
		document.querySelectorAll('.pswp-gallery').forEach(async (el) => {
			let lightbox = new PhotoSwipeLightbox({
				gallery: '#' + el.id,
				children: 'a',
				pswpModule: PhotoSwipe,
				spacing: 0.5
			});
			lightbox.init();
		});
	}

	onMount(() => {
		useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
	});
</script>

<main>
	{#if data.story}
		<StoryblokComponent blok={data.story.content} />
	{/if}
</main>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;900&display=swap');

	:global body {
		font-family: 'Montserrat', sans-serif;
	}
</style>
