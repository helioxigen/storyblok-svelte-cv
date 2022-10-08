<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

<main use:storyblokEditable={blok} class="px-6">
	<div class="container mx-auto max-w-3xl">
		{#each blok.body as blok}
			<StoryblokComponent {blok} />
		{/each}
	</div>
</main>

<style>
	main .container {
		box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.13), 0px 3px 4px 0px rgba(0, 0, 0, 0.14),
			0px 1px 8px -2px rgba(0, 0, 0, 0.12);
	}
</style>
