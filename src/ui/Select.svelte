<script>
    export let selected;
    export let placeholder;
    export let options;
</script>

<select bind:value={selected}>
    {#if placeholder}
        <option value="" disabled selected hidden> {placeholder} </option>
    {/if}
    {#each options as option}
        <option value={option}>
            {option.text}
        </option>
    {/each}
</select>

<style>

</style>