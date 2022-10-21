import { useStoryblokApi } from '@storyblok/svelte';
import { env } from '$env/dynamic/public';
import { storyblokInit, apiPlugin } from '@storyblok/svelte';
import { components } from '../components/storyblok';

console.log(env);

storyblokInit({
	accessToken: env.PUBLIC_STORYBLOK_TOKEN,
	use: [apiPlugin],
	components
});

export async function load() {
	const storyblokApi = useStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/home', {
		version: 'draft'
	});

	return {
		story: data?.story
	};
}

export const prerender = false;
