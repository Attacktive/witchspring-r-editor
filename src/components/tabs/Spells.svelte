<script lang="ts">
	import { Label, Select } from "flowbite-svelte";
	import { saveData } from "$/store/save-data";
	import { primarySpells, subSpells } from "$/types/spell";

	const primarySpellOptions = primarySpells.map(primarySpell => {
		let replaced;
		if (primarySpell) {
			replaced = primarySpell.replace(/MAGICCIRCLE_(.+)/, "$1");
		} else {
			replaced = "NONE";
		}

		return {
			name: replaced,
			value: primarySpell
		};
	});

	const subSpellOptions = subSpells.map(subSpell => {
		let replaced;
		if (subSpell) {
			replaced = subSpell.replace(/MAGICCIRCLE_(.+)/, "$1");
		} else {
			replaced = "NONE";
		}

		return {
			name: replaced,
			value: subSpell
		};
	});
</script>

<Label class="grid grid-cols-12 my-2 text-lg">
	Spell slot #1
</Label>
<div class="flex space-x-12 mb-4">
	<Select bind:value={$saveData.magicSlot_main[0]} items={primarySpellOptions}/>
	<Select bind:value={$saveData.magicSlot_main[1]} items={subSpellOptions}/>
	<Select bind:value={$saveData.magicSlot_main[2]} items={subSpellOptions}/>
</div>
<Label class="grid grid-cols-12 my-2 text-lg">
	Spell slot #2
</Label>
<div class="flex space-x-12 mb-4">
	<Select bind:value={$saveData.magicSlot_normal[0]} items={primarySpellOptions}/>
	<Select bind:value={$saveData.magicSlot_normal[1]} items={subSpellOptions}/>
	<Select bind:value={$saveData.magicSlot_normal[2]} items={subSpellOptions}/>
</div>
<Label class="grid grid-cols-12 my-2 text-lg">
	Spell slot #3
</Label>
<div class="flex space-x-12 mb-4">
	<Select bind:value={$saveData.magicSlot_sub[0]} items={primarySpellOptions}/>
	<Select bind:value={$saveData.magicSlot_sub[1]} items={subSpellOptions}/>
	<Select bind:value={$saveData.magicSlot_sub[2]} items={subSpellOptions}/>
</div>
