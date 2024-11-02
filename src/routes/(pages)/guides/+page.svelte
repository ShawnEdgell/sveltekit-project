<script lang="ts">
	import { pageHeader, GettingStarted, MapGear, StatsSettings } from '$lib';

	const { title, description, heading } = pageHeader.guides;
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

<GettingStarted />
<MapGear />
<StatsSettings />
