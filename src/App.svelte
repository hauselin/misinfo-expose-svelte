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
    console.log(e.detail);
    scores_obj = e.detail;
    scores_obj["misinfo_mean"] = misinfo_mean;
    scores_obj["partisan_mean"] = partisan_mean;
  };
</script>

<!-- <svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/vega@5"></script>
  <script src="https://cdn.jsdelivr.net/npm/vega-lite@5"></script>
  <script src="https://cdn.jsdelivr.net/npm/vega-embed@6"></script>
</svelte:head> -->

<main>
  <Info />
  <Input on:updateScoresObj={updateScores} />
  {#if scores_obj.inputEntered}
    <Results {...scores_obj} />
    <Exposure />
    <Partisanship />
    <!-- <Table /> -->
  {/if}
</main>

<style>
</style>
