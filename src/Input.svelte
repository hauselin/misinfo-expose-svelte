<script>
	let user = "dg_rand";
	let userid = "605012771";
	let currentUser = user;
	let submittedValue = null;
</script>

<main>
	<p class="small">Enter your Twitter username/ID below to find out.</p>

	<form
		on:submit|preventDefault={() => {
			currentUser = user;
			submittedValue = user;
			console.log("user:", user);
		}}
	>
		<input bind:value={user} />
		<!-- <button
			on:click={() => {
				clicked = true;
				console.log("clicked");
			}}>Enter</button
		> -->
	</form>

	{#if submittedValue != null}
		<p class="center">Scores for {currentUser} (ID: {userid})</p>
	{/if}
</main>

<style>
	.small {
		font-size: 0.9em;
		margin-bottom: 5px;
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
		padding: 5px;
		width: 100%;
	}

	/* button {
		border: 1px solid #63d2ff;
		border-radius: 3px;
		padding: 5px;
	} */
</style>
