<script>
	import { onMount } from 'svelte';
	// import PhotoSwipeLightbox from 'photoswipe/lightbox';
	// import 'photoswipe/style.css';
	import { browser } from '$app/environment';
	export let galleryID;
	export let images = [];

	export let assets = [];

	const modifyImage = (url, thumbW, fullW) => {
		return {
			full: `${url}/m/${fullW}x0`,
			thumb: `${url}/m/${thumbW}x0`
		};
	};

	assets.forEach((asset) => {
		const { full, thumb } = modifyImage(asset.filename, 300, 800);

		images.push({
			src: full,
			width: 540,
			height: 960,
			thumbnail: { src: thumb, width: 150, height: 340 }
		});
	});
</script>

<div class="pswp-gallery flex flex-wrap gap-0.5 pb-5" id={galleryID}>
	{#each images as image}
		<a
			href={image.src}
			data-pswp-src={image.src}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img class="object-contain w-[150px]" src={image.thumbnail.src} alt="" />
		</a>
	{/each}
</div>

<style>
	:global .pswp__img {
		object-fit: contain;
	}
</style>
