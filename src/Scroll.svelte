<script>
	import InfiniteScroll from "svelte-infinite-scroll";

	const allCountries = [
		{
			name: "Afghanistan",
			code: "AF",
		},
		{
			name: "Åland Islands",
			code: "AX",
		},
		{
			name: "Albania",
			code: "AL",
		},
		{
			name: "Algeria",
			code: "DZ",
		},
		{
			name: "American Samoa",
			code: "AS",
		},
		{
			name: "Andorra",
			code: "AD",
		},
		{
			name: "Angola",
			code: "AO",
		},
		{
			name: "Anguilla",
			code: "AI",
		},
		{
			name: "Antarctica",
			code: "AQ",
		},
		{
			name: "Antigua and Barbuda",
			code: "AG",
		},
		{
			name: "Argentina",
			code: "AR",
		},
		{
			name: "Armenia",
			code: "AM",
		},
		{
			name: "Aruba",
			code: "AW",
		},
		{
			name: "Afghanistan",
			code: "AF",
		},
		{
			name: "Åland Islands",
			code: "AX",
		},
		{
			name: "Albania",
			code: "AL",
		},
		{
			name: "Algeria",
			code: "DZ",
		},
		{
			name: "American Samoa",
			code: "AS",
		},
		{
			name: "Andorra",
			code: "AD",
		},
		{
			name: "Angola",
			code: "AO",
		},
		{
			name: "Anguilla",
			code: "AI",
		},
		{
			name: "Antarctica",
			code: "AQ",
		},
		{
			name: "Antigua and Barbuda",
			code: "AG",
		},
		{
			name: "Argentina",
			code: "AR",
		},
		{
			name: "Armenia",
			code: "AM",
		},
		{
			name: "Aruba",
			code: "AW",
		},
	];

	let page = 0;
	let size = 1000;
	let countries = [];
	$: countries = [
		...countries,
		...allCountries.splice(size * page, size * (page + 1) - 1),
	];
</script>

<div class="center">
	<table>
		<tr style="background-color:#94adc4">
			<th />
			<th>Elite</th>
			<th>Falsity score</th>
		</tr>

		{#each countries as country}
			<tr>
				<td>{country.name}</td>
				<td>{country.code}</td>
				<td>{country.code}</td>
			</tr>
		{/each}
		<InfiniteScroll threshold={100} on:loadMore={() => page++} />
	</table>
</div>

<style>
	.center {
		margin-left: auto;
		margin-right: auto;
	}
	div {
		width: 400px;
		max-height: 377px;
		max-width: 320px;
		overflow-x: hidden;
	}
	table {
		border: 1px solid #94adc4;
		border-collapse: collapse;
		width: 100%;
		font-size: 12px;
		line-height: 0.5rem;
	}
	td,
	th {
		text-align: left;
		padding: 8px;
	}
	tr:nth-child(even) {
		background-color: #123658;
	}
	.scrollbar-thin {
		scrollbar-width: thin;
		overflow-y: scroll;
	}
</style>
