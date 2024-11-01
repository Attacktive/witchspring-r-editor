<script lang="ts">
	import type { SelectOptionType } from "flowbite-svelte";
	import type { PetId } from "$/types/pet";
	import { saveData } from "$/store/save-data";
	import { Checkbox, Input, Label, NumberInput, Select } from "flowbite-svelte";
	import { petIds } from "$/types/pet";

	const petOptions: SelectOptionType<PetId>[] = petIds.map(petId => {
		if (petId) {
			return {
				name: petId,
				value: petId
			};
		} else {
			return {
				name: "NONE",
				value: ""
			};
		}
	});
</script>

<div class="my-2">
	<Label>Player Object ID</Label>
	<Input bind:value={$saveData.playerObjID}/>
</div>
<div class="my-2">
	<Label>Player Object ID (original)</Label>
	<Input bind:value={$saveData.playerObjID_Original}/>
</div>
<div class="my-2">
	<Label>Dress ID</Label>
	<Input bind:value={$saveData.dressID}/>
</div>
<div class="my-2">
	<Label>Max HP</Label>
	<NumberInput bind:value={$saveData.maxHp} step="1"/>
</div>
<div class="my-2">
	<Label>HP</Label>
	<NumberInput bind:value={$saveData.hp} step="1"/>
</div>
<div class="my-2">
	<Label>Max MP</Label>
	<NumberInput bind:value={$saveData.maxMp} step="1"/>
</div>
<div class="my-2">
	<Label>MP</Label>
	<NumberInput bind:value={$saveData.mp} step="1"/>
</div>
<div class="my-2">
	<Label>SP</Label>
	<NumberInput bind:value={$saveData.sp} step="1"/>
</div>
<div class="my-2">
	<Label>Strength</Label>
	<NumberInput bind:value={$saveData.str} step="1"/>
</div>
<div class="my-2">
	<Label>Defence</Label>
	<NumberInput bind:value={$saveData.def} step="1"/>
</div>
<div class="my-2">
	<Label>Agility</Label>
	<NumberInput bind:value={$saveData.agt} step="1"/>
</div>
<div class="my-2">
	<Label>Fame</Label>
	<NumberInput bind:value={$saveData.fame} step="1"/>
</div>
<div class="my-2">
	<Label>Battle EXP</Label>
	<NumberInput bind:value={$saveData.battleEXP} step="1"/>
</div>
<div class="my-2">
	<Label>Body Level</Label>
	<NumberInput bind:value={$saveData.bodyLevel} step="1"/>
</div>
<div class="my-2">
	<Label>Mental Level</Label>
	<NumberInput bind:value={$saveData.mindLevel} step="1"/>
</div>
<div class="my-2">
	<Label>Physical Training Count</Label>
	<NumberInput bind:value={$saveData.bodyTrainingCount} step="1"/>
</div>
<div class="my-2">
	<Label>Mental Training Count</Label>
	<NumberInput bind:value={$saveData.mindTrainingCount} step="1"/>
</div>
<div class="my-2">
	<Label>Weapon Charging Speed Factor</Label>
	<NumberInput bind:value={$saveData.weaponChargingSpeed} step="1"/>
</div>
<div class="my-2">
	<Label>Walking Speed Factor</Label>
	<NumberInput bind:value={$saveData.walkSpeed} step="1"/>
</div>
<div class="my-2">
	<Label>Gold</Label>
	<NumberInput bind:value={$saveData.gold} step="1"/>
</div>
<div class="my-2">
	<Label>Has Black Joe</Label>
	<Checkbox bind:checked={$saveData.blackJoe}/>
</div>
<div class="my-2">
	<Label>Current Pet</Label>
	<Select bind:value={$saveData.nowPet} items={petOptions}/>
</div>
