import { useStoryblokApi } from "@storyblok/svelte";

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

export async function load() {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
    
  return {
    story: data.story,
  };
}
