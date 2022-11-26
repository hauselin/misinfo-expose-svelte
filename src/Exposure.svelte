<script>
	import { onMount } from "svelte";
	import { default as embed } from "vega-embed";
	import exposureDensitySpec from "./vega-specs/exposure_density.js";

	export let misinfo;
	const axis_labels =
		"datum.label == 0 ? ['0.0','Low']: datum.label == 1.0 ? ['1.0','High']: datum.label";

	onMount(() => {
		exposureDensitySpec.layer[0].encoding.x.axis.labelExpr = axis_labels;
		// update vertical rule to user value
		if (window.innerWidth > 600) {
			exposureDensitySpec.width = 500;
			exposureDensitySpec.height = 300;
		} else {
			exposureDensitySpec.width = 233;
			exposureDensitySpec.height = 100;
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

	<div class="container-density">
		<span id="density" />
	</div>
</main>

<style>
	h2 {
		text-align: center;
	}
	.bold {
		font-weight: 987;
		color: #63d2ff;
	}
	.container-density {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.center {
		text-align: center;
	}
</style>
