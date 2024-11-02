<script lang="ts">
	import {
		pageHeader,
		ModPackSection,
		ModListSection,
		SoundPackSection,
		UnityModManager,
		Help
	} from '$lib';

	const { title, description, heading } = pageHeader.mods;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<section>
	<h1>{heading}</h1>
	<p>{description}</p>
	<Help />
	<hr />
</section>

<ModListSection />
<ModPackSection />
<SoundPackSection />
<UnityModManager />
