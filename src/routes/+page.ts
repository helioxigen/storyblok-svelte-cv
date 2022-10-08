import { useStoryblokApi } from "@storyblok/svelte";

import { storyblokInit, apiPlugin } from '@storyblok/svelte';
import { components } from "../components/storyblok";

storyblokInit({
    accessToken: 'VFtv6KgwooQFkSzOjcDBeAtt',
    use: [apiPlugin],
    components
});


export async function load() {
    const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });

    
  return {
    story: data?.story,
  };
}

export const prerender = false;
