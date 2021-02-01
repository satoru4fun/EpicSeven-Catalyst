<script>
    import Select from '../ui/Select.svelte';
    import {getAllCatalysts} from '../services/Catalyst.svelte'

    export let selected;

    let catalystsPromise = getAllCatalysts();
    let placeholder = 'Select Catalyst';
</script>

{#await catalystsPromise}
	<p>...waiting</p>
{:then catalysts}
	<Select bind:selected={selected} placeholder={placeholder} options={catalysts}/>
{/await}

<style>

</style>