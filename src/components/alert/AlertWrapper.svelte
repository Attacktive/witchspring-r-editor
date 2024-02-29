<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { Button } from "flowbite-svelte";

	export let messageLines: string[] = [];
	export let acknowledgedText = "Got it";

	const dispatch = createEventDispatcher();
	const closeAlert = () => dispatch("close");
</script>

{#each messageLines as messageLine}
	<p>{messageLine}</p>
{/each}
<Button size="sm" class="mt-2" on:click={closeAlert}>
	{acknowledgedText}
</Button>
