<script lang="ts">
	import VideoItem from '../components/VideoItem.svelte';

	export let data;
	let { videos } = data;
	let activePlaylistId = 'ALL';

	const channels = [
		{ name: 'All', playlistId: 'ALL' },
		{ name: 'Skater XL', playlistId: 'UUpBQRZl7apZt_LQXKgqKQiQ' },
		{ name: 'Session', playlistId: 'PLWmRSsZZ1RCW-0uQWKlCAiGZVnIaRYaTm' },
		{ name: 'Skate.', playlistId: 'UUSBQJEWTWOUCO65xvoDfljw' }
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://www.youtube.com" />
	<link rel="preconnect" href="https://img.youtube.com" />
	<title>Popland - Recent News</title>
	<meta
		name="description"
		content="Discover the latest official updates, news, and videos from Skater XL, Session, Skate, and more—all in one place."
	/>
</svelte:head>

<article>
	<div class="header">
		<h1>Recent News</h1>
		<p>
			Discover the latest official updates, news, and videos from Skater XL, Session, Skate, and
			more—all in one place.
		</p>
	</div>

	<div class="flex flex-wrap mb-4">
		{#each channels as { name, playlistId }}
			<button
				on:click={() => (activePlaylistId = playlistId)}
				class="btn btn-sm mr-2 mb-2 {activePlaylistId === playlistId
					? 'bg-blue-700 text-white'
					: 'bg-gray-200 text-gray-800'}"
			>
				{name}
			</button>
		{/each}
	</div>
	<hr class="border-t-2 my-4" />

	{#each videos as video (video.videoId)}
		{#if activePlaylistId === 'ALL' || activePlaylistId === video.playlistId}
			<VideoItem {video} />
		{/if}
	{/each}
</article>
