<script>
    import { FalsityScores } from "./falsity_scores.js";
    import InfiniteScroll from "svelte-infinite-scroll";

    export let following;
    export let username;
    export let follow_n;

    FalsityScores.forEach((obj, i) => {
        FalsityScores[i].elite_account = obj.elite_account.toLowerCase();
    });

    const getFalsityScore = (elite_account) => {
        const obj = FalsityScores.filter(
            (obj) => obj.elite_account === elite_account.toLowerCase()
        );
        let score = NaN;
        if (obj.length > 0) {
            score = Number(obj[0].falsity_score).toFixed(3);
        }
        return score;
    };

    let data = [];
    following.forEach((val, i) => {
        data.push({
            i: i + 1,
            Elite:
                "<a href='https://twitter.com/" +
                val +
                "' target='_blank'>" +
                val +
                "</a>",
            FalsityScore: getFalsityScore(val),
        });
    });
    // sort values
    data = data.sort((a, b) => (a.FalsityScore > b.FalsityScore ? -1 : 1));
    // reset i values in data
    data.forEach((val, i) => {
        data[i].i = i + 1;
    });

    let page = 0;
    let size = 10000;
    let elites = [];
    $: elites = [...elites, ...data.splice(size * page, size * (page + 1) - 1)];
</script>

<main>
    {#if follow_n > 1}
        <p class="center-text">
            The estimates above are based on these {follow_n} elites
            <strong>{username}</strong>
            follows.
        </p>
    {:else}
        <p class="center-text">
            The estimates above are based on this elite
            <strong>{username}</strong>
            follows.
        </p>{/if}
    <div class="center">
        <table>
            <tr style="background-color:#94adc4">
                <th />
                <th>Elite</th>
                <th>Falsity score</th>
            </tr>

            {#each elites as elite}
                <tr>
                    <td>{elite.i}</td>
                    <td>{@html elite.Elite}</td>
                    <td>{elite.FalsityScore}</td>
                </tr>
            {/each}
            <InfiniteScroll threshold={10000} on:loadMore={() => page++} />
        </table>
    </div>
</main>

<style>
    strong {
        color: #63d2ff;
        font-weight: 600px;
    }
    .center {
        margin-left: auto;
        margin-right: auto;
    }
    .center-text {
        text-align: center;
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
