<script>
    import { Datatable } from "svelte-simple-datatables";
    import { FalsityScores } from "./falsity_scores.js";

    export let following;

    FalsityScores.forEach((obj, i) => {
        FalsityScores[i].elite_account = obj.elite_account.toLowerCase();
    });

    console.log(FalsityScores);
    const getFalsityScore = (elite_account) => {
        const obj = FalsityScores.filter(
            (obj) => obj.elite_account === elite_account.toLowerCase()
        );
        return Number(obj[0].falsity_score).toFixed(3);
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
    // sort values # TODO not working yet
    following.sort((a, b) => (a.FalsityScore > b.FalsityScore ? -1 : 1));

    const settings = {
        sortable: true,
        pagination: true,
        columnFilter: false,
        css: true,
        rowsPerPage: 10,
        blocks: {
            searchInput: false,
            paginationButtons: true,
            paginationRowCount: true,
        },
    };

    let rows;
</script>

<main>
    <p>
        The estimates above are based on these 10 users <strong>dg_rand</strong>
        follows. Falsity scores for the elites are also shown.
    </p>
</main>

<div class="container-table">
    <Datatable {settings} {data} bind:dataRows={rows}>
        <thead>
            <!-- <th data-key="i" /> -->
            <th data-key="Elite">Elite</th>
            <th data-key="Falsity-score">Falsity score</th>
        </thead>
        <tbody>
            {#if rows}
                {#each $rows as row}
                    <tr>
                        <!-- <td>{row.i}</td> -->
                        <td>{@html row.Elite}</td>
                        <td>{row.FalsityScore}</td>
                    </tr>
                {/each}
            {/if}
        </tbody>
    </Datatable>
</div>

<style>
    .container-table {
        width: 60%;
        margin: 0, auto;
        height: 400px;
    }
    thead {
        text-align: left;
        color: white;
        background-color: black;
        font-size: 0.9em;
        width: 50%;
        height: 11px;
        line-height: 11px;
    }
    tbody {
        text-align: center;
        color: #ffffff;
        background-color: #295b89;
        width: 50%;
        font-size: 0.8em;
        margin: 5px;
    }

    td {
        text-align: left;
        color: #ffffff;
        background-color: #295b89;
        width: 50%;
    }
    strong {
        font-weight: 600;
    }
</style>
