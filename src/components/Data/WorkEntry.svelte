<script>
	import { storyblokEditable, StoryblokComponent, renderRichText } from '@storyblok/svelte';
	import moment from 'moment';
	import Chip from '../common/Chip.svelte';
	import Gallery from './Gallery.svelte';

	export let blok;

	const dateStart = moment(blok?.date_start);
	const dateEnd = moment(blok?.date_end);

	const years = dateEnd.diff(dateStart, 'years');
	const months = dateEnd.diff(dateStart, 'months') % 12;

	$: articleHTML = renderRichText(blok.description);
</script>

<article class="relative" use:storyblokEditable={blok}>
	<span class="absolute -left-7 border-l-2 h-[calc(100%-10px)]">
		<span class="absolute top-0 w-3 h-3 -left-1.5 border-2 border-blue-600 bg-white rounded-full" />
	</span>
	<header class="flex justify-between mb-4">
		<span class="mb-4">
			<h3 class="font-bold">{blok.job_title}</h3>
			<p class="text-gray-500 text-sm">{blok.company}</p>
		</span>
		<span class="text-gray-500 whitespace-nowrap">
			<p>{dateStart.format('MMMM YYYY')} - {dateEnd.format('MMMM YYYY')}</p>
			<p>{years} yrs {months} mnths</p>
		</span>
	</header>
	<p class="font-light opacity-75 mb-6">{blok.subtitle}</p>
	{#each blok.projects || [] as blok}
		<StoryblokComponent {blok} />
	{/each}
</article>
