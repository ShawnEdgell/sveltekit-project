<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div data-theme="light" class="flex flex-col items-center min-h-screen">
	<div class="fixed top-0 w-full z-10">
		<Navbar />
	</div>
	<main class="prose lg:prose-xl w-full flex-1 mt-[4.5rem] px-4 py-8">
		<slot />
	</main>
	<Footer />
</div>
