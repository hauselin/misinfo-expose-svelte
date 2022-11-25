<script>
	export let misinfo;
	export let party;
	export let misinfo_mean;
	export let partisan_mean;

	const percentDelta = (misinfo, party) => {
		party += 1;
		const misinfo_delta = misinfo - misinfo_mean;
		const party_delta = party - partisan_mean;

		let misinfo_percent = (misinfo_delta / misinfo_mean) * 100;
		let party_percent = (party_delta / partisan_mean) * 100;

		if (misinfo_percent >= 0) {
			misinfo_percent =
				misinfo_percent.toFixed(2) + "% higher than average";
		} else {
			misinfo_percent =
				misinfo_percent.toFixed(2) + "% lower than average";
		}

		if (party_percent >= 0) {
			party_percent = party_percent.toFixed(2) + "% higher than average";
		} else {
			party_percent = party_percent.toFixed(2) + "% lower than average";
		}
		return [misinfo_percent, party_percent];
	};

	let [misinfo_percent, party_percent] = percentDelta(misinfo, party);
</script>

<main>
	<div class="container">
		<div class="small">Misinformation exposure</div>
		<div class="bigger">{misinfo}</div>
		<div class="smallgrey">{misinfo_percent}</div>
		<div class="small">Partisanship</div>
		<div class="bigger">{party}</div>
		<div class="smallgrey">{party_percent}</div>
	</div>
</main>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		row-gap: 10px;
		grid-auto-flow: column;
	}

	@media (max-width: 500px) {
		.container {
			display: grid;
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(6, 1fr);
			grid-auto-flow: column;
		}
	}

	.small {
		font-size: 0.9em;
		text-align: center;
	}
	.bigger {
		font-size: 2.1em;
		text-align: center;
	}
	.smallgrey {
		font-size: 0.8em;
		text-align: center;
		color: rgba(253, 255, 252, 0.5);
	}
</style>
