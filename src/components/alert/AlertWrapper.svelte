<script lang="ts">
	import { Button } from "flowbite-svelte";

	interface Props {
		close: () => void;
		messageLines?: string[];
		acknowledgedText?: string;
	}

	let { close = () => {}, messageLines = [], acknowledgedText = "Got it" }: Props = $props();

	const closeAlert = () => close();
</script>

{#each messageLines as messageLine, index (`message-${index}`)}
	<p>{messageLine}</p>
{/each}
<Button size="sm" class="mt-2" onclick={closeAlert}>
	{acknowledgedText}
</Button>
