<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="hero">
	<div class="container row">
		<div class="hero__text">
			<h1>Responsive layouts don’t have to be a struggle</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>
			<a href="#" class="btn">I want to learn</a>
		</div>
		<!-- 2. -->
		<div class="hero__img">
			<img src="/hero-img.jpg" alt="website sketches" />
		</div>
	</div>
</div>

<!-- 1. -->
<div class="content">
	<div class="container row">
		<div class="content__text">
			<h2>Quality designs made custom, on demand, just for you</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
		</div>
		<div class="content__sidebar flex transpose">
			<div class="col">
				<h2>Cheap</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			</div>
			<div class="col">
				<h2>Quick</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			</div>
			<div class="col">
				<h2>Quality</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			</div>
		</div>
	</div>
</div>

<style>
	@import 'style.css';
</style>
