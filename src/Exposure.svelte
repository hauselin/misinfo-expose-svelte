<script>
	import { onMount } from "svelte";
	import { default as embed } from "vega-embed";
	import exposureDensitySpec from "./vega-specs/exposure_density.js";

	export let misinfo;

	onMount(() => {
		// update vertical rule to user value
		if (window.innerWidth > 600) {
			exposureDensitySpec.width = 500;
			exposureDensitySpec.height = 300;
		} else {
			exposureDensitySpec.width = 233;
			exposureDensitySpec.height = 144;
		}
		exposureDensitySpec.layer[1].data.values[0].value = misinfo;
		embed("#density", exposureDensitySpec, { actions: false }).catch(
			(error) => console.log(error)
		);
	});
</script>

<main>
	<h2>Misinformation exposure</h2>

	<p class="center">
		The <span class="bold">vertical line</span> is where you are in relation
		to others.
	</p>

	<div class="container"><div id="density" /></div>
</main>

<style>
	h2 {
		text-align: center;
	}
	.bold {
		font-weight: 987;
		color: #63d2ff;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.center {
		text-align: center;
	}
</style>
