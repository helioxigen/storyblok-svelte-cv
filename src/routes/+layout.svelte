<script context="module">
	// import { useStoryblokBridge } from '@storyblok/svelte';
	// import { onMount } from 'svelte';

	// export let data;
	// let { story } = data;
	// onMount(() => {
	// 	useStoryblokBridge(story.id, (newStory) => (story = newStory));
	// });
</script>

<script>
	import '../app.css';
</script>

<main class="prose prose-xl">
	<slot />
</main>
