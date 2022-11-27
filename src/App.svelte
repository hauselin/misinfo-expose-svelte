<script>
  import Info from "./Info.svelte";
  import Input from "./Input.svelte";
  import Results from "./Results.svelte";
  import Exposure from "./Exposure.svelte";
  import Partisanship from "./Partisanship.svelte";
  import Table from "./Table.svelte";

  let scores_obj = { inputEntered: false };
  const misinfo_mean = 0.51;
  const partisan_mean = -0.352 + 1; // rescale to [0, 1], original was [-1, 1]
  // const follower_mean = 4.65;

  const updateScores = (e) => {
    // console.log(e.detail);
    scores_obj = e.detail;
    scores_obj["misinfo_mean"] = misinfo_mean;
    scores_obj["partisan_mean"] = partisan_mean;
  };
</script>

<main class="container">
  <Info />
  <Input on:updateScoresObj={updateScores} />
  {#if scores_obj.inputEntered}
    <Results {...scores_obj} />
    <Exposure misinfo={scores_obj.misinfo} />
    <Partisanship party={scores_obj.party} />
    <Table
      following={scores_obj.following}
      username={scores_obj.username}
      follow_n={scores_obj.follow_n}
    />
  {/if}
</main>

<style>
  .container {
    margin: 50px 200px 50px 200px;
  }

  @media (max-width: 1000px) {
    .container {
      margin: 50px;
    }
  }

  @media (max-width: 700px) {
    .container {
      margin: 50px 1px 50px 1px;
      padding: 0px;
    }
  }
</style>
