<script lang="ts">
	import { mods } from '$lib';
</script>

<section>
	<h2>Working Mod List</h2>
	<p>This list includes compatible mods for various game versions.</p>

	{#each mods as { version, modItems }}
		<div>
			<h3>{version}</h3>

			{#each modItems as modItem}
				<div class="mod-item">
					<h4>{modItem.title}</h4>
					<p><strong>Author:</strong> {modItem.author || 'Unknown'}</p>
					<p><strong>Working Version:</strong> {modItem.workingVersion || 'N/A'}</p>

					{#if modItem.keybind}
						<p><strong>Keybind:</strong> {modItem.keybind}</p>
					{/if}

					{#if modItem.features && modItem.features.length > 0}
						<p><strong>Features:</strong> {modItem.features.join(', ')}</p>
					{/if}

					{#if modItem.note}
						<p><strong>Note:</strong> {modItem.note}</p>
					{/if}

					{#if modItem.downloadLinks && modItem.downloadLinks.length > 0}
						<p><strong>Download Links:</strong></p>
						<ul>
							{#each modItem.downloadLinks as { url, label }}
								<li><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>
							{/each}
						</ul>
					{/if}
				</div>
			{/each}
		</div>
	{/each}
</section>
