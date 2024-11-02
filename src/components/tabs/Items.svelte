<script lang="ts">
	import type { Item } from "$/types/item";
	import { Accordion, AccordionItem, Button, Input, Label, Modal, NumberInput, Select, SpeedDial, SpeedDialButton } from "flowbite-svelte";
	import { CirclePlusSolid, TrashBinOutline } from "flowbite-svelte-icons";
	import { saveData } from "$/store/save-data";
	import { getItemCategory, itemCategories, nonExhaustiveItemIdList } from "$/types/item";

	const categoryOptions = itemCategories.map(itemCategory => ({
		name: itemCategory.text,
		value: itemCategory.index
	}));

	console.debug(JSON.stringify($saveData.myItemList.map(x => x.id).sort()));

	let toShowModal = $state(false);
	const showItemCreationModal = () => toShowModal = true;

	const generateNewItem = (): Item => ({
		id: "",
		category: 0,
		count: 1
	});

	let newItem = $state(generateNewItem());

	const createItem = () => {
		$saveData.myItemList = [...$saveData.myItemList, newItem]
		newItem = generateNewItem();
	};

	const throwAway = (index: number) => {
		$saveData.myItemList = $saveData.myItemList.filter((_, innerIndex) => index !== innerIndex);
	};
</script>

<datalist id="item-id-list">
	{#each nonExhaustiveItemIdList as itemId}
		<option>{itemId}</option>
	{/each}
</datalist>

<Modal bind:open={toShowModal}>
	<form class="flex flex-col">
		<h2 class="text-xl">New Item</h2>
		<div class="my-2">
			<Label>ID</Label>
			<Input bind:value={newItem.id} list="item-id-list"/>
		</div>
		<div class="my-2">
			<Label>Category</Label>
			<Select bind:value={newItem.category} items={categoryOptions}/>
		</div>
		<div class="my-2">
			<Label>Count</Label>
			<Input bind:value={newItem.count}/>
		</div>
		<Button class="my-2" on:click={createItem}>
			<CirclePlusSolid/>
		</Button>
	</form>
</Modal>

{#if $saveData.myItemList.length > 0}
	<SpeedDial placement="bottom" gradient defaultClass="fixed top-32 end-12">
		<SpeedDialButton on:click={showItemCreationModal}>
			<CirclePlusSolid class="w-8 h-8"/>
		</SpeedDialButton>
	</SpeedDial>

	<Accordion>
		{#each $saveData.myItemList as item, index (`item-${index}`)}
			{@const ordinal = index + 1}
			<AccordionItem>
				{#snippet header()}
					<span >#{ordinal} {item.id} ({getItemCategory(item.category)})</span>
				{/snippet}
				<div class="my-1">
					<Label>Item ID</Label>
					<Input bind:value={item.id} list="item-id-list"/>
				</div>
				<div class="mt-1 mb-3">
					<Label>Item Count</Label>
					<NumberInput bind:value={item.count} step="1"/>
				</div>
				<div class="flex flex-row-reverse">
					<Button on:click={() => throwAway(index)}>
						<TrashBinOutline/>
					</Button>
				</div>
			</AccordionItem>
		{/each}
	</Accordion>
{:else}
	No content
{/if}
