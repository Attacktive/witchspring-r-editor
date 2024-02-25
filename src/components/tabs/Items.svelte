<script lang="ts">
	import { Input, Label, NumberInput } from "flowbite-svelte";
	import { saveData } from "$store/save-data";
	import { getItemCategory } from "$types/item";
</script>
{#if $saveData.myItemList.length > 0}
	{#each $saveData.myItemList as item, index (`item-${index}`)}
		{@const ordinal = index + 1}
		<div class="my-1">#{ordinal} ({getItemCategory(item.category)})</div>
		<div class="my-1">
			<Label>Item ID</Label>
			<Input bind:value={item.id}/>
		</div>
		<div class="my-1 mb-3">
			<Label>Item Count</Label>
			<NumberInput bind:value={item.count} step="1"/>
		</div>
	{/each}
{:else}
	No content
{/if}
