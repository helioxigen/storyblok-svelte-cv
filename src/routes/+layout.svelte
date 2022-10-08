<!-- <script context="module">
	import { storyblokInit, apiPlugin } from '@storyblok/svelte';
	import PageSection from '../components/layout/PageSection.svelte';
	import Page from '../components/layout/Page.svelte';
	import Hero from '../components/Data/Hero.svelte';
	import TableList from '../components/Data/TableList.svelte';
	import Chips from '../components/Data/Chips.svelte';
	import WorkEntry from '../components/Data/WorkEntry.svelte';

	storyblokInit({
		accessToken: 'VFtv6KgwooQFkSzOjcDBeAtt',
		use: [apiPlugin],
		components: {
			page: Page,
			page_section: PageSection,
			hero: Hero,
			table_list: TableList,
			chips: Chips,
			work_entry: WorkEntry
		}
	});
</script> -->
<script>
	import '../app.css';
	import 'photoswipe/style.css';

	import { useStoryblokBridge } from '@storyblok/svelte';
	import { onMount } from 'svelte';

	export let data;
	let { story } = data;
	onMount(() => {
		useStoryblokBridge(story?.id, (newStory) => (story = newStory));
	});
</script>

<main class="prose prose-xl">
	<slot />
</main>

<style>
	/* @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');

	.text-jul {
		font-family: 'Julius Sans One', sans-serif;
	} */
</style>
