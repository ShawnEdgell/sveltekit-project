<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import VideoItem from '../components/VideoItem.svelte';

	type Channel = {
		name: string;
		playlistId: string;
	};

	type ExtendedVideoItem = {
		title: string;
		publishedAt: string;
		description: string;
		videoId: string;
		playlistId: string;
		showFullDescription: boolean;
		iframeLoaded: boolean;
	};

	const channels: Channel[] = [
		{ name: 'All', playlistId: 'ALL' },
		{ name: 'Skater XL', playlistId: 'UUpBQRZl7apZt_LQXKgqKQiQ' },
		{ name: 'Session', playlistId: 'PLWmRSsZZ1RCW-0uQWKlCAiGZVnIaRYaTm' },
		{ name: 'Skate.', playlistId: 'UUSBQJEWTWOUCO65xvoDfljw' }
	];

	const videos = writable<ExtendedVideoItem[]>([]);
	const activePlaylistId = writable('ALL');
	const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

	onMount(async () => {
		const channelPromises = channels
			.filter((channel) => channel.playlistId !== 'ALL')
			.map((channel) => fetchVideos(channel.playlistId));

		const allVideosArrays = await Promise.all(channelPromises);
		const allVideos = allVideosArrays.flat();

		videos.set(
			allVideos.sort(
				(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
			)
		);
	});

	async function fetchVideos(playlistId: string): Promise<ExtendedVideoItem[]> {
		const response = await fetch(
			`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=5&key=${apiKey}`
		);
		const data = await response.json();
		return data.items.map((item: any) => ({
			title: item.snippet.title,
			publishedAt: item.snippet.publishedAt,
			description: item.snippet.description,
			videoId: item.snippet.resourceId.videoId,
			playlistId,
			showFullDescription: false,
			iframeLoaded: false
		}));
	}

	function toggleNews(playlistId: string) {
		activePlaylistId.set(playlistId);
	}
</script>

<article>
	<div class="header">
		<h1>Latest News</h1>
		<p>
			Discover the latest official updates, news, and videos from Skater XL, Session, Skate, and
			more — all in one place.
		</p>
	</div>

	<!-- Toggle Buttons -->
	<div class="flex flex-wrap mb-4">
		{#each channels as { name, playlistId }}
			<button
				on:click={() => toggleNews(playlistId)}
				class="btn btn-sm mr-2 mb-2
        {$activePlaylistId === playlistId ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}"
			>
				{name}
			</button>
		{/each}
	</div>
	<hr class="border-t-2 my-4" />

	<!-- Video List -->
	{#each $videos as video (video.videoId)}
		{#if $activePlaylistId === 'ALL' || $activePlaylistId === video.playlistId}
			<VideoItem {video} />
		{/if}
	{/each}
</article>
