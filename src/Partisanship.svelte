<script>
	import Bar from "./Bar.svelte";
	export let party;
</script>

<main>
	<h2>Partisanship</h2>
	<img
		src="./dem_repub_small_nobg.png"
		height="89"
		class="center"
		alt="democrat republican"
	/>
	<Bar {party} />
	<div class="label-container">
		<span class="label-left">-1.0 (Democrat)</span>
		<span class="label-right">1.0 (Republican)</span>
	</div>
</main>

<style>
	h2 {
		text-align: center;
	}

	.center {
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 1em;
	}

	.label-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding-left: 13%;
		padding-right: 13%;
		margin-top: 8px;
	}

	@media (max-width: 800px) {
		.label-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
			padding-left: 5%;
			padding-right: 5%;
			margin-top: 8px;
		}
	}

	.label-left {
		text-align: left;
		font-size: 0.7em;
		margin: 0px;
		padding: 0px;
		border: 0px;
		margin-block-start: 0px;
		margin-block-end: 0px;
	}
	.label-right {
		text-align: right;
		font-size: 0.7em;
		margin: 0px;
		padding: 0px;
		border: 0px;
		margin-block-start: 0px;
		margin-block-end: 0px;
	}
</style>
