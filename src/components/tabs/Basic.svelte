<script lang="ts">
	import type { SelectOptionType } from "flowbite-svelte";
	import type { PetId } from "$types/pet";
	import { store } from "$store/store";
	import { Checkbox, Input, Label, NumberInput, Select } from "flowbite-svelte";
	import { petIds } from "$types/pet";

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
<div class="my-1">
	<Label>Player Object ID</Label>
	<Input bind:value={$store.playerObjID}/>
</div>
<div class="my-1">
	<Label>Player Object ID (original)</Label>
	<Input bind:value={$store.playerObjID_Original}/>
</div>
<div class="my-1">
	<Label>Dress ID</Label>
	<Input bind:value={$store.dressID}/>
</div>
<div class="my-1">
	<Label>Max HP</Label>
	<NumberInput bind:value={$store.maxHp} step="1"/>
</div>
<div class="my-1">
	<Label>HP</Label>
	<NumberInput bind:value={$store.hp} step="1"/>
</div>
<div class="my-1">
	<Label>Max MP</Label>
	<NumberInput bind:value={$store.maxMp} step="1"/>
</div>
<div class="my-1">
	<Label>MP</Label>
	<NumberInput bind:value={$store.mp} step="1"/>
</div>
<div class="my-1">
	<Label>SP</Label>
	<NumberInput bind:value={$store.sp} step="1"/>
</div>
<div class="my-1">
	<Label>Fame</Label>
	<NumberInput bind:value={$store.fame} step="1"/>
</div>
<div class="my-1">
	<Label>Battle EXP</Label>
	<NumberInput bind:value={$store.battleEXP} step="1"/>
</div>
<div class="my-1">
	<Label>Body Level</Label>
	<NumberInput bind:value={$store.bodyLevel} step="1"/>
</div>
<div class="my-1">
	<Label>Mental Level</Label>
	<NumberInput bind:value={$store.mindLevel} step="1"/>
</div>
<div class="my-1">
	<Label>Physical Training Count</Label>
	<NumberInput bind:value={$store.bodyTrainingCount} step="1"/>
</div>
<div class="my-1">
	<Label>Mental Training Count</Label>
	<NumberInput bind:value={$store.mindTrainingCount} step="1"/>
</div>
<div class="my-1">
	<Label>Weapon Charging Speed Factor</Label>
	<NumberInput bind:value={$store.weaponChargingSpeed} step="1"/>
</div>
<div class="my-1">
	<Label>Walking Speed Factor</Label>
	<NumberInput bind:value={$store.walkSpeed} step="1"/>
</div>
<div class="my-1">
	<Label>Gold</Label>
	<NumberInput bind:value={$store.gold} step="1"/>
</div>
<div class="my-1">
	<Label>Has Black Joe</Label>
	<Checkbox bind:checked={$store.blackJoe}/>
</div>
<div class="my-1">
	<Label>Current Pet</Label>
	<Select bind:value={$store.nowPet} items={petOptions}/>
</div>
