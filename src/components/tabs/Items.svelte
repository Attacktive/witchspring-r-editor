<script lang="ts">
	import { Input, Label, NumberInput } from "flowbite-svelte";
	import { store } from "$store/store";
	import { getItemCategory } from "$types/item";
</script>
{#each $store.myItemList as item, index (`item-${index}`)}
	{@const ordinal = index + 1}
	<div class="ms-1">#{ordinal} ({getItemCategory(item.category)})</div>
	<div class="my-1">
		<Label>Item ID</Label>
		<Input bind:value={item.id}/>
	</div>
	<div class="my-1">
		<Label>Item Count</Label>
		<NumberInput bind:value={item.count} step="1"/>
	</div>
{/each}
