<script>
    import { Datatable } from "svelte-simple-datatables";
    import { FalsityScores } from "./falsity_scores.js";

    export let following;

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
        margin-left: auto;
        margin-right: auto;
    }

    tr {
        text-align: center;
        color: #ffffff;
        background-color: #305c8c;
    }
    th {
        text-align: center;
        color: #ffffff;
        background-color: #305c8c;
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

    .datatable {
        background: #98acc4;
    }

    .datatable .dt-search {
        margin-left: 16px;
    }
    .datatable .dt-search input {
        border: 1px solid #37474f;
        border-radius: 4px;
        outline: none;
        padding: 0 8px;
        line-height: 24px;
        margin: 0;
        height: 24px;
        background: #455a64;
        width: 176px;
        transition: all, 0.1s;
    }
    .datatable .dt-search input:focus {
        border: 2px solid #546e7a;
    }
    .datatable .dt-search input::placeholder {
        color: #eee;
        line-height: 24px;
    }

    .datatable thead:not([style*="hidden"]) th {
        padding: 8px 0px 8px 16px;
        color: #eee;
        text-align: center;
        border-bottom: 1px solid #546e7a;
        background: #98acc4;
    }
    .datatable .dt-table th.sortable {
        cursor: pointer;
    }
    .datatable .dt-table th.sortable span {
        padding-right: 16px;
        position: relative;
    }
    .datatable .dt-table th.sortable span:before,
    .datatable .dt-table th.sortable span:after {
        border: 4px solid transparent;
        content: "";
        display: block;
        height: 0;
        right: 0;
        top: 50%;
        position: absolute;
        width: 0;
    }
    .datatable .dt-table th.sortable span:before {
        border-bottom-color: #546e7a;
        margin-top: -9px;
    }
    .datatable .dt-table th.sortable span:after {
        border-top-color: #546e7a;
        margin-top: 1px;
    }
    .datatable .dt-table th.sortable.asc:not(.desc) span:before {
        border-bottom-color: #eee;
    }
    .datatable .dt-table th.sortable.desc:not(.asc) span:after {
        border-top-color: #eee;
    }
    .datatable .dt-table th.filter {
        padding: 0;
        margin: 0;
        background-image: none;
        border: 1px solid #37474f;
    }
    .datatable .dt-table th.filter input {
        background: #98acc4;
        height: 24px;
        border: none;
        border-bottom: 1px solid #546e7a;
        text-align: center;
        outline: none;
        border-radius: 0;
        font-size: 14px;
        color: #eee;
    }
    .datatable .dt-table th.filter input::placeholder {
        color: #607d8b;
        font-style: italic;
        font-size: 13px;
    }

    .datatable .dt-table {
        border-bottom: 1px solid #546e7a;
        scrollbar-width: thin;
    }
    .datatable .dt-table::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    .datatable .dt-table::-webkit-scrollbar-track {
        background: #000a12;
    }
    .datatable .dt-table::-webkit-scrollbar-thumb {
        background: #455a64;
    }
    .datatable .dt-table::-webkit-scrollbar-thumb:hover {
        background: #546e7a;
    }
    .datatable .dt-table::-webkit-scrollbar-track-piece:start {
        top: 40px;
    }
    .datatable .dt-table table {
        width: 100%;
        border-collapse: collapse;
        overflow: hidden;
        margin-bottom: 6px;
        color: #eee;
    }

    .datatable .dt-pagination {
        background: #98acc4;
    }

    .datatable .dt-pagination-buttons {
        height: 32px;
        margin-right: 16px;
    }
    .datatable .dt-pagination-buttons button {
        background: inherit;
        height: 32px;
        width: 32px;
        color: #eee;
        font-size: 13px;
        margin: 0;
        padding: 0;
        transition: all, 0.2s;
        line-height: 32px;
        border: 1px solid #37474f;
        border-right: none;
        outline: none;
    }
    .datatable .dt-pagination-buttons button:first-child {
        border-radius: 4px 0 0 4px;
    }
    .datatable .dt-pagination-buttons button:last-child {
        border-right: 1px solid #37474f;
        border-radius: 0 4px 4px 0;
    }
    .datatable .dt-pagination-buttons button:not(.active):hover {
        background: #455a64;
        cursor: pointer;
    }
    .datatable .dt-pagination-buttons button.text {
        width: auto;
        min-width: 70px;
        cursor: pointer;
    }
    .datatable .dt-pagination-buttons button.ellipse:hover {
        background: inherit;
        cursor: default;
    }
    .datatable .dt-pagination-buttons button.active {
        background: #37474f;
        font-weight: bold;
    }
    .datatable .dt-pagination-buttons button.disabled:hover {
        background: inherit;
        cursor: default;
    }
    .datatable .dt-pagination-buttons.mobile button.disabled {
        color: #bdbdbd;
    }
    .datatable .dt-pagination-buttons.mobile button {
        font-weight: bold;
    }

    .datatable .dt-pagination-rowcount {
        color: #eee;
        line-height: 32px;
        margin-left: 16px;
        font-size: 14px;
    }
</style>
