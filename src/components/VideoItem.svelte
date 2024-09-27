<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let video: {
		title: string;
		publishedAt: string;
		description: string;
		videoId: string;
		playlistId: string;
		showFullDescription: boolean;
		iframeLoaded: boolean;
	};

	let container: HTMLElement;
	let observer: IntersectionObserver;

	function toggleDescription() {
		video.showFullDescription = !video.showFullDescription;
	}

	function formatDate(dateString: string) {
		return new Date(dateString).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						video.iframeLoaded = true;
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.25
			}
		);

		if (container) {
			observer.observe(container);
		}
	});

	onDestroy(() => {
		observer?.disconnect();
	});
</script>

<div class="mb-8">
	<h2 class="text-xl font-semibold">{video.title}</h2>
	<p class="text-sm text-gray-500 mb-2">{formatDate(video.publishedAt)}</p>

	{#if video.description?.trim()}
		{#if video.description.length > 100}
			{#if video.showFullDescription}
				<p class="mb-2">{video.description}</p>
				<button on:click={toggleDescription} class="text-blue-500 hover:underline mb-4"
					>Show less</button
				>
			{:else}
				<p class="mb-2">{video.description.slice(0, 100)}...</p>
				<button on:click={toggleDescription} class="text-blue-500 hover:underline mb-4"
					>Read more</button
				>
			{/if}
		{:else}
			<p class="mb-4">{video.description}</p>
		{/if}
	{/if}

	<div bind:this={container} class="relative aspect-w-16 aspect-h-9 mb-4">
		{#if video.iframeLoaded}
			<iframe
				src={`https://www.youtube.com/embed/${video.videoId}`}
				title={video.title}
				frameborder="0"
				allowfullscreen
				loading="lazy"
				class="absolute inset-0 w-full h-full"
			></iframe>
		{:else}
			<div class="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
				<img
					src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
					alt={video.title}
					class="w-full h-full object-cover opacity-75"
					loading="lazy"
				/>
				<button
					class="absolute"
					on:click={() => (video.iframeLoaded = true)}
					aria-label="Play video"
				>
					<!-- SVG Play Button -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-16 w-16 text-white"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M8 5v14l11-7z" />
					</svg>
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Optional: Add custom styles here */
</style>
