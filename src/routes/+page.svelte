<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ComponentType } from 'svelte';

	// Import the type of the VideoItem component
	import type VideoItemType from '../components/VideoItem.svelte';

	// Define the ExtendedVideoItem type
	type ExtendedVideoItem = {
		title: string;
		publishedAt: string;
		description: string;
		videoId: string;
		playlistId: string;
		showFullDescription: boolean;
		iframeLoaded: boolean;
	};

	let VideoItem: typeof VideoItemType;

	export let data: { videos: ExtendedVideoItem[] };
	const videos = writable<ExtendedVideoItem[]>(data.videos);

	const activePlaylistId = writable('ALL');

	const channels = [
		{ name: 'All', playlistId: 'ALL' },
		{ name: 'Skater XL', playlistId: 'UUpBQRZl7apZt_LQXKgqKQiQ' },
		{ name: 'Session', playlistId: 'PLWmRSsZZ1RCW-0uQWKlCAiGZVnIaRYaTm' },
		{ name: 'Skate.', playlistId: 'UUSBQJEWTWOUCO65xvoDfljw' }
	];

	onMount(async () => {
		// Dynamically import the VideoItem component
		VideoItem = (await import('../components/VideoItem.svelte')).default;

		// No need to fetch videos here since it's done server-side
	});

	function toggleNews(playlistId: string): void {
		activePlaylistId.set(playlistId);
	}
</script>

<article>
	<div class="header">
		<h1>Latest News</h1>
		<p>
			Discover the latest official updates, news, and videos from Skater XL, Session, Skate, and
			more—all in one place.
		</p>
	</div>

	<!-- Toggle Buttons -->
	<div class="flex flex-wrap mb-4">
		{#each channels as { name, playlistId }}
			<button
				on:click={() => toggleNews(playlistId)}
				class="btn btn-sm mr-2 mb-2 {$activePlaylistId === playlistId
					? 'bg-blue-500 text-white'
					: 'bg-gray-200 text-gray-800'}"
			>
				{name}
			</button>
		{/each}
	</div>
	<hr class="border-t-2 my-4" />

	<!-- Video List -->
	{#if VideoItem}
		{#each $videos as video (video.videoId)}
			{#if $activePlaylistId === 'ALL' || $activePlaylistId === video.playlistId}
				<svelte:component this={VideoItem} {video} />
			{/if}
		{/each}
	{/if}
</article>

<style>
	/* Optional: You can add custom styles here if needed */
</style>
