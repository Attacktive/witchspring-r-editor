<script>
	import { createEventDispatcher } from "svelte";
	import { Button } from "flowbite-svelte";

	const dispatch = createEventDispatcher();
	const closeAlert = () => dispatch("close");
</script>

<p>You might have loaded a wrong file.</p>
<p>It's named 'playerStat_xxx' by default.</p>
<Button size="sm" class="mt-2" on:click={closeAlert}>Got it</Button>
