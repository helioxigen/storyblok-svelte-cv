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
