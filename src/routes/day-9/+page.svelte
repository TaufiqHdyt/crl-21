<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="hero">
	<div class="container flex">
		<div class="hero__text">
			<h1>Responsive layouts don’t have to be a struggle</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>
			<a href="#" class="btn">I want to learn</a>
		</div>
		<div class="hero__img">
			<img src="/favicon.png" alt="favicon">
		</div>
	</div>
</div>

<div id="features" class="container flex">
	<div class="col">
		<h2>Cheap</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam.
		</p>
	</div>
	<div class="col">
		<h2>Quick</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam.
		</p>
	</div>
	<div class="col">
		<h2>Affordable</h2>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam.
		</p>
	</div>
</div>

<div class="outro">
	<div class="container flex">
		<div class="col">
			<h2>Cheap</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>
		</div>
		<div class="col">
			<h2>Quick</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam.
			</p>
		</div>
	</div>
</div>

<style>
	@import 'style.css';
</style>
