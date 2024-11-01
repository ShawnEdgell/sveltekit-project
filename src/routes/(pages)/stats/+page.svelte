<script lang="ts">
	import { pageContent } from '../../../data/pageContent';

	const { title, description, heading } = pageContent.stats;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section>
	<h1>{heading}</h1>
	<p>{description}</p>
</section>
