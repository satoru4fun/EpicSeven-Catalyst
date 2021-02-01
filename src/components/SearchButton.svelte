<script>
    import Button from '../ui/Button.svelte';

    const text = 'Search';

    function handleClick() {
		alert('...searching');
	}
</script>

<Button text={text} on:click={handleClick} />