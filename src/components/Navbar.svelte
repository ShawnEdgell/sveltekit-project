<div class="drawer">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col">
		<!-- Navbar -->
		<div class="navbar bg-base-300 w-full">
			<div class="flex-none sm:hidden">
				<label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						></path>
					</svg>
				</label>
			</div>
			<div class="mx-2 flex-1">
				<a
					href="/"
					class="btn btn-ghost italic font-bold text-xl"
					data-sveltekit-preload-data="hover">POPLAND</a
				>
			</div>
			<div class="hidden flex-none sm:block">
				<ul class="menu menu-horizontal">
					<!-- Navbar menu content here -->
					<li><a href="/about" data-sveltekit-preload-data="hover">About Us</a></li>
					<li><a href="/mods" data-sveltekit-preload-data="hover">Mods</a></li>
					<li><a href="/community" data-sveltekit-preload-data="hover">Community</a></li>
				</ul>
			</div>
		</div>
	</div>
	<div class="drawer-side">
		<label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
		<ul class="menu menu-lg bg-base-200 min-h-full w-80 p-4">
			<!-- Sidebar content here -->
			<li><a href="/about" data-sveltekit-preload-data="hover">About Us</a></li>
			<li><a href="/mods" data-sveltekit-preload-data="hover">Mods</a></li>
			<li><a href="/community" data-sveltekit-preload-data="hover">Community</a></li>
		</ul>
	</div>
</div>
