<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Keypoints</h2>

<ol>
	<li>shouldn't use `em` for fonts</li>
	<li>use `em` for padding / margin that relates to current element font-size</li>
  <li>prefer `width: 100%; max-width: fixed-width`</li>
</ol>