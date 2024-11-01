<script lang="ts">
	import VideoItem from '../components/VideoItem.svelte';
	import { pageContent } from '../data/pageContent';

	const { title, description, heading } = pageContent.news;

	export let data;
	let { videos } = data;
</script>

<svelte:head>
	<link rel="preconnect" href="https://www.youtube.com" />
	<link rel="preconnect" href="https://img.youtube.com" />
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section>
	<h1>{heading}</h1>
	<p>{description}</p>
</section>

<article>
	{#each videos as video (video.videoId)}
		<VideoItem {video} />
	{/each}
</article>
