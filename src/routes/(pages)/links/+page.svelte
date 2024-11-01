<script lang="ts">
	import { pageContent } from '../../../data/pageContent';
	import { categories } from '../../../data/discordLinks';
	import Tables from './content/Tables.svelte';

	const { title, description, heading } = pageContent.links;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section>
	<h1>{heading}</h1>
	<p>{description}</p>
</section>

<section>
	<h2>skaterxl.mod.io</h2>
	<p>
		Explore and share a wide range of mods, including scripts, gear, maps, and more, on the main hub
		for Skater XL modding.
	</p>
	<a
		href="https://mod.io/g/skaterxl"
		class="btn mr-2 variant-filled-secondary no-underline"
		target="_blank">skaterxl.mod.io</a
	>
</section>

<section>
	<h2>XL Hub by Fro</h2>
	<p>
		Browse, download, and manage your local and online community maps and mods. This application
		makes installing mods as easy as a single click.
	</p>
	<a
		href="https://mod.io/g/skaterxl/m/xlhub"
		class="btn mr-2 variant-filled-secondary no-underline"
		target="_blank">XL Hub on mod.io</a
	>
</section>

<Tables {categories} />
