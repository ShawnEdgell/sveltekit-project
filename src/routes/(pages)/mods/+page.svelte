<script lang="ts">
	import { pageContent } from '$lib';
	import ModPackSection from './content/ModPackSection.svelte';
	import ModListSection from './content/ModListSection.svelte';
	import SoundPackSection from './content/SoundPackSection.svelte';
	import UnityModManagerSection from './content/UnityModManagerSection.svelte';
	import Help from '../../../components/Help.svelte';

	const { title, description, heading } = pageContent.mods;
	let activeTab = 'modList';
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

<!-- Daisy UI Tabs -->
<div role="tablist" class="tabs tabs-boxed">
	<button
		role="tab"
		tabindex="0"
		class={activeTab === 'modList' ? 'tab tab-active' : 'tab'}
		on:click={() => (activeTab = 'modList')}
		on:keypress={(e) => e.key === 'Enter' && (activeTab = 'modList')}
	>
		Mod List
	</button>
	<button
		role="tab"
		tabindex="0"
		class={activeTab === 'modPacks' ? 'tab tab-active' : 'tab'}
		on:click={() => (activeTab = 'modPacks')}
		on:keypress={(e) => e.key === 'Enter' && (activeTab = 'modPacks')}
	>
		Mod Packs
	</button>
	<button
		role="tab"
		tabindex="0"
		class={activeTab === 'soundPacks' ? 'tab tab-active' : 'tab'}
		on:click={() => (activeTab = 'soundPacks')}
		on:keypress={(e) => e.key === 'Enter' && (activeTab = 'soundPacks')}
	>
		Sound Packs
	</button>
	<button
		role="tab"
		tabindex="0"
		class={activeTab === 'unityModManager' ? 'tab tab-active' : 'tab'}
		on:click={() => (activeTab = 'unityModManager')}
		on:keypress={(e) => e.key === 'Enter' && (activeTab = 'unityModManager')}
	>
		Unity Mod Manager
	</button>
</div>

<!-- Content area based on active tab -->
<div>
	{#if activeTab === 'modList'}
		<ModListSection />
	{:else if activeTab === 'modPacks'}
		<ModPackSection />
	{:else if activeTab === 'soundPacks'}
		<SoundPackSection />
	{:else if activeTab === 'unityModManager'}
		<UnityModManagerSection />
	{/if}
</div>
