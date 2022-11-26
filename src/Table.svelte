<script>
    import { data } from './data.example.js'  
    import { Datatable } from 'svelte-simple-datatables'
    const settings = {sortable: true, pagination: true, columnFilter: false, css: true, rowsPerPage: 10, blocks: {
            searchInput: false, 
            paginationButtons: true,
            paginationRowCount: true,
        }}

    let rows
</script>

<main>
	<p>
		The estimates above are based on these 10 users <strong>dg_rand</strong>
		follows. Falsity scores for the elites are also shown.
	</p>


</main>

<div style="width:60%; margin:0 auto; height:400px">
<Datatable settings={settings} data={data} bind:dataRows={rows}>
    <thead>
        <th data-key="first_name">First Name</th>
        <th data-key="last_name">Last Name</th>
        <th data-key="email">Email</th>
    </thead>
    <tbody>
    {#if rows}
        {#each $rows as row}
        <tr>
            <td>{row.first_name}</td>
            <td>{row.last_name}</td>
            <td>{row.email}</td>
        </tr>
        {/each}
    {/if}
    </tbody>
</Datatable>
</div>

<style>
	thead{text-align:center; color:#000000; background-color:#979BCA;width:50%;}
tbody{text-align:center; color:#000000; background-color:#979BCA;width:50%;}

	td{text-align:left;padding:4px 0; color:#000000; background-color:#979BCA; width:50%}
</style>
