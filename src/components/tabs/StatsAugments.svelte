<script lang="ts">
	import { Accordion, AccordionItem, Input, Label, Select } from "flowbite-svelte";
	import { saveData } from "$/store/save-data";
	import { statsAugmentTags } from "$/types/stats-augment";

	const statsAugmentTagOptions = statsAugmentTags.map(statsAugmentTag => {
		const respelled = statsAugmentTag.replace(/ACCESSARY/, "ACCESSORY");

		return {
			name: respelled,
			value: statsAugmentTag
		};
	});
</script>

{#if $saveData.plusStatList.length > 0}
	<Accordion>
		{#each $saveData.plusStatList as statsAugment, index (`statsAugment-${index}`)}
			{@const ordinal = index + 1}
			<AccordionItem>
				{#snippet header()}
					<span >#{ordinal} {statsAugment.id}</span>
				{/snippet}
				<div class="my-1">
					<Label>Tag</Label>
					<Select bind:value={statsAugment.tag} items={statsAugmentTagOptions}/>
				</div>
				<div class="my-1">
					<Label>HP Addition</Label>
					<Input type="number" bind:value={statsAugment.point_hp}/>
				</div>
				<div class="my-1">
					<Label>HP Addition Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.rate_hp}/>
				</div>
				<div class="my-1">
					<Label>MP Addition</Label>
					<Input type="number" bind:value={statsAugment.point_mp}/>
				</div>
				<div class="my-1">
					<Label>MP Addition Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.rate_mp}/>
				</div>
				<div class="my-1">
					<Label>SP Addition</Label>
					<Input type="number" bind:value={statsAugment.point_sp}/>
				</div>
				<div class="my-1">
					<Label>SP Addition Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.rate_sp}/>
				</div>
				<div class="my-1">
					<Label>Strength Addition</Label>
					<Input type="number" bind:value={statsAugment.point_str}/>
				</div>
				<div class="my-1">
					<Label>Strength Addition Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.rate_str}/>
				</div>
				<div class="my-1">
					<Label>Defence Addition</Label>
					<Input type="number" bind:value={statsAugment.point_def}/>
				</div>
				<div class="my-1">
					<Label>Defence Addition Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.rate_def}/>
				</div>
				<div class="my-1">
					<Label>Agility Addition</Label>
					<Input type="number" bind:value={statsAugment.point_agt}/>
				</div>
				<div class="my-1">
					<Label>Agility Addition Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.rate_agt}/>
				</div>
				<div class="my-1">
					<Label>Magical Damage Reduction Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.defRate_magic}/>
				</div>
				<div class="my-1">
					<Label>Physical Damage Reduction Rate (fraction)</Label>
					<Input type="number" bind:value={statsAugment.defRate_physical}/>
				</div>
			</AccordionItem>
		{/each}
	</Accordion>
{:else}
	No content
{/if}
