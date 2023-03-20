<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<header class="hero">
	<section class="container flex align-center">
		<div class="hero-text flex column justify-center">
			<p class="lead">Lorem ipsum sit</p>
			<h1>Responsive layouts don’t have to be a struggle</h1>
		</div>
	</section>
</header>

<main>
	<section class="container flex column">
		<h2 class="text-center">Quality Designs</h2>
		<div class="flex" style="gap:2em">
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut tristique. Arcu dui
				vivamus arcu felis. Sociis natoque penatibus et magnis dis.
			</p>
			<p>
				Felis donec et odio pellentesque diam volutpat. Aliquam purus sit amet luctus venenatis.
				Turpis in eu mi bibendum neque egestas congue quisque egestas. Pellentesque sit amet
				porttitor eget dolor morbi non.
			</p>
		</div>
	</section>
	<div class="gallery">
		<section class="second">
			<div class="container flex" style="gap:2em">
				<div class="content-text">
					<h2>Made custom for you</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
					</p>
				</div>
				<img src="/image-01.jpg" alt="sunset cliff" />
			</div>
		</section>
		<section class="third">
			<div class="container flex" style="gap:2em">
				<div class="content-text">
					<h2>Created with care</h2>
					<p>
						Felis donec et odio pellentesque diam volutpat. Aliquam purus sit amet luctus venenatis.
						Turpis in eu mi bibendum neque egestas congue quisque egestas. Pellentesque sit amet
						porttitor eget dolor morbi non.
					</p>
				</div>
				<img src="/image-02.jpg" alt="sunset cliff" />
			</div>
		</section>
	</div>
</main>

<style>
	@import 'style.css';
</style>
