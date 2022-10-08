<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

<h6 use:storyblokEditable={blok} class="text-slate-700 font-medium first:mt-0 mb-5 mt-8">
	{blok.text}
</h6>
