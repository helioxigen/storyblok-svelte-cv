<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';
	import moment from 'moment';
	import Chip from '../common/Chip.svelte';

	export let blok;

	const dateStart = moment(blok?.date_start);
	const dateEnd = moment(blok?.date_end);

	const years = dateEnd.diff(dateStart, 'years');
	const months = dateEnd.diff(dateStart, 'months');
</script>

<article {...storyblokEditable(blok)}>
	<header class="flex justify-between">
		<span>
			<h3>{blok.title}</h3>
			<p class="text-gray-500">{blok.company}</p>
		</span>
		<span class="text-gray-500">
			<p>{years} years</p>
			<p>{months} months</p>
		</span>
	</header>
	<p>{blok.subtitle}</p>
	<h5>{blok.product_name}</h5>
	<p><a href={blok.product_url}>{blok.product_url}</a></p>
	<div set:html={blok.description} />
	<div>
		{#each blok.tags?.split('\n') as tag}
			<Chip {tag} />
		{/each}
	</div>
</article>
