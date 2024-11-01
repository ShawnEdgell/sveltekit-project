<script lang="ts">
	import { pageContent, categories } from '$lib';
	import ModWebsite from './content/ModWebsite.svelte';
	import XlHub from './content/XLHub.svelte';
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
	<hr />
</section>

<ModWebsite />
<XlHub />
<Tables {categories} />
