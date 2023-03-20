<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Min(), Max(), and Clamp()</h2>

<ol>
	<li>`width: min(500px, 70%)` equals to `width: 70%; max-width: 500px`</li>
</ol>

<div id="min" class="example">
	<h3>Lorem ipsum dolor sit amet.</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magnam qui animi, quae sequi iure
		esse natus repellendus accusantium nesciunt tempora voluptatem pariatur eum molestiae fugiat sit
		harum deserunt minima?
	</p>
</div>

<div id="max" class="example">
	<h3>Lorem ipsum dolor sit amet.</h3>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magnam qui animi, quae sequi iure
		esse natus repellendus accusantium nesciunt tempora voluptatem pariatur eum molestiae fugiat sit
		harum deserunt minima?
	</p>
</div>

<style>
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	.example {
		border: 1px solid black;
	}

	.example p {
		background-color: lightblue;
		/* width: 50%; */
		/* clamp(min, ideal, max) */
		font-size: clamp(2rem, 5vw, 5rem);
	}

	#min {
		width: min(500px + 10%, 70%);
		/* can have multiple values inside */
		/* width: min(500px, ...value, 70%); */
	}
	#max {
		width: max(500px, 70%);
	}
</style>
