<script>
	import { createEventDispatcher } from "svelte";

	let scores_obj;
	let user = "";
	let userid = "";
	let istest = "test";
	let currentUser = user;
	let submittedValue = null;
	let testuser = null;
	let testusers = ["andrewyang", "benshapiro", "aoc", "sentedcruz"];
	let userurl = "https://twitter.com/";

	const saveSearchURL = import.meta.env.VITE_APIURL;

	const choose = (options) => {
		var index = Math.floor(Math.random() * options.length);
		return options[index];
	};

	let dispatch = createEventDispatcher();

	const dispatchNothing = () => {
		dispatch("updateScoresObj", {
			username: user,
			inputEntered: false,
		});
	};

	async function getScores(user) {
		// console.log("istest:", istest);
		if (user == "") {
			return "nothing";
		}
		if (user.slice(0, 1) == "@") {
			user = user.slice(1);
		}
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
					"x-rapidapi-key": import.meta.env.VITE_KEY,
					// "x-rapidapi-key": import.meta.env.KEY,
				},
			}
		);

		// console.log("Waiting for response...");
		dispatchNothing();
		const response = await resp.json();
		if (response) {
			if (response.message) {
				// console.log("Error: " + response.message);
				scores_obj = {
					username: user,
					inputEntered: false,
					message: "cannot find user",
				};
				return scores_obj;
			} else {
				// console.log("Success!");
				userid = response.twitter_user_id;
				userid = userid.toString();
				scores_obj = {
					username: user,
					userid: userid,
					misinfo: response.misinfo_exposure_score_weighted_numtweets,
					party: response.partisan_score,
					follow_n: response.num_following,
					following: response.following,
					inputEntered: true,
				};
				userurl += user;
				dispatch("updateScoresObj", scores_obj);
				let post_outcome = saveSearch();
			}
			// console.log("response", response);
			// console.log("scores_obj", scores_obj);
			return response;
		} else {
			// console.log("No response");
			return null;
		}
	}
	let scores = getScores(user);

	async function saveSearch() {
		let time = "t-" + Date.now().toString();
		const resp = await fetch(saveSearchURL, {
			method: "POST",
			mode: "cors",
			cache: "default",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				user_id: "misinfoexpose-app",
				condition: istest,
				experiment_id: time,
				form_fields: {
					username: scores_obj.username,
					userid: scores_obj.userid,
					istest: istest,
					timestamp: time,
				},
			}),
		});

		// console.log("Posting data...");
		const response = await resp.json();
		let outcome;
		if (response.success === "true") {
			outcome = "success";
			// console.log("Submitted form data successfully");
		} else {
			outcome = "fail";
			// console.log("Fail to write/post form data");
		}
		return response;
	}
</script>

<main>
	<p class="small">
		Enter your Twitter username/ID below to find out or click <strong
			><a
				href="#"
				on:click|preventDefault={() => {
					dispatchNothing();
					testuser = choose(testusers);
					user = testuser;
					istest = "test";
					scores = getScores(testuser);
				}}>here</a
			></strong
		> to test the app.
	</p>

	<form
		on:submit|preventDefault={() => {
			dispatchNothing();
			istest = "nottest";
			currentUser = user;
			submittedValue = user;
			// console.log("user entered:", user);
			scores = getScores(user);
		}}
	>
		<input bind:value={user} />
	</form>

	{#await scores then scores}
		{#if scores == "nothing"}
			<p />
		{:else if scores.message}
			<p class="error">
				User {scores.username} not found or does not follow any elite accounts.
			</p>
		{:else}
			<p class="center" on:click>
				Scores for <a
					href={userurl}
					target="_blank"
					style="color: #63d2ff">{scores_obj.username}</a
				>
				(ID: {scores_obj.userid})
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
		width: 98%;
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
		width: 98%;
	}
	@media (max-width: 500px) {
		input {
			width: 89%;
		}
		.error {
			width: 89%;
		}
	}
</style>
