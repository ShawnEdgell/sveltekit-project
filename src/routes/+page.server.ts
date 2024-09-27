import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';
import { YOUTUBE_API_KEY } from '$env/static/private';

type ExtendedVideoItem = {
	title: string;
	publishedAt: string;
	description: string;
	videoId: string;
	playlistId: string;
	showFullDescription: boolean;
	iframeLoaded: boolean;
};

interface YouTubePlaylistItem {
	snippet: {
		title: string;
		publishedAt: string;
		description: string;
		resourceId: { videoId: string };
	};
}

interface YouTubePlaylistResponse {
	items?: YouTubePlaylistItem[];
	nextPageToken?: string;
	error?: {
		code: number;
		message: string;
		errors: {
			message: string;
			domain: string;
			reason: string;
			location?: string;
			locationType?: string;
		}[];
	};
}

export const load: PageServerLoad = async () => {
	const channels = [
		{ name: 'All', playlistId: 'ALL' },
		{ name: 'Skater XL', playlistId: 'UUpBQRZl7apZt_LQXKgqKQiQ' },
		{ name: 'Session', playlistId: 'PLWmRSsZZ1RCW-0uQWKlCAiGZVnIaRYaTm' },
		{ name: 'Skate.', playlistId: 'UUSBQJEWTWOUCO65xvoDfljw' }
	];

	if (!YOUTUBE_API_KEY) {
		throw error(500, 'API key is missing');
	}

	const channelPromises = channels
		.filter((channel) => channel.playlistId !== 'ALL')
		.map((channel) => fetchVideos(channel.playlistId));

	const allVideosArrays = await Promise.all(channelPromises);
	const allVideos = allVideosArrays.flat();

	const videos = allVideos.sort(
		(a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
	);

	return { videos };
};

async function fetchVideos(playlistId: string): Promise<ExtendedVideoItem[]> {
	const response = await fetch(
		`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=5&key=${YOUTUBE_API_KEY}`
	);
	const data: YouTubePlaylistResponse = await response.json();

	if (data.error) {
		console.error('YouTube API error:', data.error);
		return [];
	}

	if (!data.items) {
		return [];
	}

	return data.items.map((item: YouTubePlaylistItem) => ({
		title: item.snippet.title,
		publishedAt: item.snippet.publishedAt,
		description: item.snippet.description,
		videoId: item.snippet.resourceId.videoId,
		playlistId,
		showFullDescription: false,
		iframeLoaded: false
	}));
}
