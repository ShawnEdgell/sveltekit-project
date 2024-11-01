<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div>
	<div data-theme="light" class="flex flex-col min-h-screen w-full items-center">
		<div class="fixed top-0 w-full z-10">
			<Navbar />
		</div>
		<main class="prose lg:prose-xl w-full px-4 pt-24 lg:pt-28 pb-8 overscroll-none">
			<slot />
		</main>
	</div>
	<Footer />
</div>
