<script>
	let user = "dg_rand";
	let userid = "605012771";
	let currentUser = user;
	let submittedValue = null;

	async function getScores(user) {
		user = user.trim();
		user = user.toLowerCase();

		const resp = await fetch(
			"https://mescalc.p.rapidapi.com/account/" + user,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/octet-stream",
					Accept: "application/json",
					"x-rapidapi-host": "mescalc.p.rapidapi.com",
					"x-rapidapi-key": "",
				},
			}
		);

		console.log("Waiting for response...");
		const response = await resp.json();
		if (response) {
			if (response.message) {
				console.log("Error: " + response.message);
			} else {
				console.log("Success!");
				userid = response.twitter_user_id;
				userid = userid.toString();
				return response;
			}
			console.log("response", response);
			return response;
		} else {
			console.log("No response");
			return null;
		}
	}
	let scores = getScores(user);
</script>

<main>
	<p class="small">Enter your Twitter username/ID below to find out.</p>

	<form
		on:submit|preventDefault={() => {
			currentUser = user;
			submittedValue = user;
			console.log("user entered:", user);
			scores = getScores(user);
		}}
	>
		<input bind:value={user} />
	</form>

	{#await scores}
		<p>...waiting</p>
	{:then scores}
		{#if scores.message}
			<p class="error">
				User not found or user does not follow any elite accounts.
			</p>
		{:else}
			<p>
				{scores.twitter_screen_name} has a misinformation exposure score
				of{" "}
				{scores.misinfo_exposure_score_weighted_numtweets} and a partisanship
				score of{" "}
				{scores.partisan_score}.
			</p>
		{/if}
	{/await}
</main>

<style>
	.small {
		font-size: 0.9em;
		margin-bottom: 5px;
	}
	.error {
		font-size: 0.9em;
		color: #ffffc2;
		background-color: rgb(255, 255, 194, 0.3);
		border-top: 0px;
		border-radius: 3px;
		padding: 8px;
		width: 100%;
	}
	.center {
		text-align: center;
		color: #63d2ff;
		font-weight: 1000;
		font-size: 1.1em;
	}

	input {
		height: 20px;
		border: 1px solid #63d2ff;
		border-top: 0px;
		border-radius: 3px;
		padding: 8px;
		width: 100%;
	}

	/* button {
		border: 1px solid #63d2ff;
		border-radius: 3px;
		padding: 5px;
	} */
</style>
