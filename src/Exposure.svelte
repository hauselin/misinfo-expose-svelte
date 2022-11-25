<script>
	import { onMount } from "svelte";
	import { default as embed } from "vega-embed";
	import simpleChartSpec from "./vega-specs/vega-simple-chart.js";
	import exposureDensitySpec from "./vega-specs/exposure_density.js";

	onMount(() => {
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
