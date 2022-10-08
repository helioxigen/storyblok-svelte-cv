import { useStoryblokApi } from "@storyblok/svelte";

import { storyblokInit, apiPlugin } from '@storyblok/svelte';
import { components } from "../components/storyblok";

storyblokInit({
    accessToken: 'VFtv6KgwooQFkSzOjcDBeAtt',
    use: [apiPlugin],
    components
});