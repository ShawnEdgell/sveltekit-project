<script lang="ts">
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="fixed w-full top-0">
	<Navbar />
</div>
<slot />
<Footer />
