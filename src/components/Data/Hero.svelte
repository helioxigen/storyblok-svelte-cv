<script>
	import { storyblokEditable } from '@storyblok/svelte';

	export let blok;
</script>

{#key blok}
	<div use:storyblokEditable={blok}>
		<div class="px-6 p-12">
			<div class="mx-auto sm:flex items-center sm:gap-10">
				<img
					class="rounded-full flex-shrink-0 h-40 w-40 mb-5 mx-auto"
					alt={blok.avatar.name}
					src={blok.avatar.filename}
				/>
				<article>
					<header class="mb-10 text-center sm:text-left">
						<h1 class="text-2xl sm:text-3xl font-medium text-gray-900 leading-tight mb-2">
							{blok.title}
						</h1>
						<h2 class="text-base text-gray-400 leading-tight">
							{blok.subtitle}
						</h2>
					</header>
					<p class="text-sm py-1 px-2 rounded">
						{blok.body}
					</p>
				</article>
			</div>
		</div>
	</div>
{/key}
