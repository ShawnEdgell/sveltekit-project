<script lang="ts">
	import { pageContent } from '../../../data/pageContent';
	import GettingStarted from './content/GettingStarted.svelte';
	import MapGear from './content/MapGear.svelte';
	import StatsSettings from './content/StatsSettings.svelte';

	const { title, description, heading } = pageContent.guides;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section>
	<h1>{heading}</h1>
	<p>{description}</p>
</section>

<GettingStarted />
<MapGear />
<StatsSettings />
