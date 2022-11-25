<script>
</script>

<main>
	<h2>Partisanship</h2>
	<img
		src="./dem_repub_small_nobg.png"
		height="89"
		class="center"
		alt="democrat republican"
	/>
	<div id="bar">
		<div id="gradient" />
		<span class="line" />
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

	#bar {
		width: 100;
		position: relative;
		display: block;
	}

	span {
		position: absolute;
		display: block;
		height: 34px;
		width: 5px;
		background: #63d2ff;
	}

	.line {
		left: 5.5%;
		top: -21%;
	}

	#gradient {
		height: 21px;
		background: linear-gradient(
			90deg,
			#36479d 0%,
			rgb(255, 255, 255) 50%,
			#bf1e2e 100%
		);
	}
</style>
