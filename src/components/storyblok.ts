import Chips from "./Data/Chips.svelte";
import Hero from "./Data/Hero.svelte";
import TableList from "./Data/TableList.svelte";
import TextBlock from "./Data/TextBlock.svelte";
import WorkEntry from "./Data/WorkEntry.svelte";
import Page from "./layout/Page.svelte";
import PageSection from "./layout/PageSection.svelte";
import Subheader from "./layout/Subheader.svelte";

export const components = {
    page: Page,
    page_section: PageSection,
    hero: Hero,
    table_list: TableList,
    chips: Chips,
    work_entry: WorkEntry,
    text_block: TextBlock,
    subheader: Subheader,
}