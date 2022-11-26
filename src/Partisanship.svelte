<script>
	export let party;
	party = ((party + 1) / 2) * 100;
	let linestyle = "top:-25%; left: " + party + "%";
</script>

<main>
	<h2>Partisanship</h2>
	<img
		src="./dem_repub_small_nobg.png"
		height="89"
		class="center"
		alt="democrat republican"
	/>
	<div class="container">
		<div id="bar">
			<div id="gradient" />
			<!-- <span class="line" /> -->
			<span style={linestyle} />
		</div>
	</div>
</main>

<style>
	h2 {
		text-align: center;
	}

	.container {
		padding-left: 377px;
		padding-right: 377px;
	}

	@media (max-width: 400) {
		.container {
			padding-left: 10;
			padding-right: 10;
		}
		#bar {
			width: 100;
			position: relative;
			display: block;
		}
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
