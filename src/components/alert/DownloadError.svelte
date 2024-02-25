<script>
	import { createEventDispatcher } from "svelte";
	import { Button } from "flowbite-svelte";

	export let message = "";

	const dispatch = createEventDispatcher();
	const closeAlert = () => dispatch("close");
</script>
<p>{message}</p>
<Button size="sm" class="mt-2" on:click={closeAlert}>Got it</Button>
