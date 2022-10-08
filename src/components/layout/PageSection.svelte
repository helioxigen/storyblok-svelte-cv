<script>
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

	export let blok;
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="border-t border-gray-300 p-5 pt-12 flex overflow-hidden">
		<div class="sm:flex w-full">
			<header class="sm:w-64 flex-shrink-0 mb-8 lg:m-0">
				<img class="inline mr-1" alt={blok.icon.name} src={blok.icon.filename} />
				<h2 class="text-lg inline align-middle font-medium leading-tight mb-8 ">
					{blok.title}
				</h2>
			</header>
			<div>
				{#each blok.content as blok}
					<StoryblokComponent {blok} />
				{/each}
			</div>
		</div>
	</div>
{/key}
