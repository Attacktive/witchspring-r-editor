<script lang="ts">
	import { Accordion, AccordionItem, Input, Label, NumberInput } from "flowbite-svelte";
	import { saveData } from "$store/save-data";
	import { getItemCategory } from "$types/item";
</script>
{#if $saveData.myItemList.length > 0}
	<Accordion>
		{#each $saveData.myItemList as item, index (`item-${index}`)}
			{@const ordinal = index + 1}
			<AccordionItem>
				<span slot="header">#{ordinal} {item.id} ({getItemCategory(item.category)})</span>
				<div class="my-1">
					<Label>Item ID</Label>
					<Input bind:value={item.id}/>
				</div>
				<div class="mt-1 mb-3">
					<Label>Item Count</Label>
					<NumberInput bind:value={item.count} step="1"/>
				</div>
			</AccordionItem>
		{/each}
	</Accordion>
{:else}
	No content
{/if}
