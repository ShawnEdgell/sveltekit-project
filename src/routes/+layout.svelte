<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div>
	<div data-theme="light" class="flex min-h-screen flex-col items-center overscroll-none">
		<div class="fixed top-0 z-10 w-full">
			<Navbar />
		</div>
		<main class="prose lg:prose-xl mt-[4.5rem] flex w-full flex-1 flex-col px-4 py-16">
			<slot />
		</main>
	</div>
	<Footer />
</div>
