import type { BasicData } from "$/types/basic-data";
import type { EquippedItem } from "$types/equipped-item";
import type { StatsAugment } from "$types/stats-augment";
import type { Item } from "$types/item";
import type { SpellBook } from "$types/spell-book";
import type { BattleAction } from "$types/battle-action";
import type { StickAction } from "$types/stick-action";
import type { SpecialSkill } from "$types/special-skill";
import type { Blessing } from "$types/blessing";
import type { Pet } from "$types/pet";
import type { TrainingLevel } from "$types/training";

export const primarySpells: readonly PrimarySpell[] = Object.freeze(["MAGICCIRCLE_MindControl", "MAGICCIRCLE_Fire_1", "MAGICCIRCLE_Fire_3", "MAGICCIRCLE_Fire_4", "MAGICCIRCLE_Fire_5", "MAGICCIRCLE_Fire_7", "MAGICCIRCLE_Thunder_3", "MAGICCIRCLE_Thunder_4", "MAGICCIRCLE_Thunder_5", "MAGICCIRCLE_Thunder_6", "MAGICCIRCLE_Thunder_7", "MAGICCIRCLE_Ice_4", "MAGICCIRCLE_Ice_5", "MAGICCIRCLE_Ice_6", "MAGICCIRCLE_Ice_7", "MAGICCIRCLE_Ekar", "MAGICCIRCLE_Temar"]);
export const subSpells: readonly SubSpell[] = Object.freeze(["MAGICCIRCLE_Double_3", "MAGICCIRCLE_Double_5", "MAGICCIRCLE_Double_7", "MAGICCIRCLE_Save_5", "MAGICCIRCLE_Save_7"]);

export type PrimarySpell = undefined | "MAGICCIRCLE_MindControl" | "MAGICCIRCLE_Fire_1" | "MAGICCIRCLE_Fire_3" | "MAGICCIRCLE_Fire_4" | "MAGICCIRCLE_Fire_5" | "MAGICCIRCLE_Fire_7" | "MAGICCIRCLE_Thunder_3" | "MAGICCIRCLE_Thunder_4" | "MAGICCIRCLE_Thunder_5" | "MAGICCIRCLE_Thunder_6" | "MAGICCIRCLE_Thunder_7" | "MAGICCIRCLE_Ice_4" | "MAGICCIRCLE_Ice_5" | "MAGICCIRCLE_Ice_6" | "MAGICCIRCLE_Ice_7" | "MAGICCIRCLE_Ekar" | "MAGICCIRCLE_Temar";
export type SubSpell = undefined | "MAGICCIRCLE_Double_3" | "MAGICCIRCLE_Double_5" | "MAGICCIRCLE_Double_7" | "MAGICCIRCLE_Save_5" | "MAGICCIRCLE_Save_7";

export type SaveData = BasicData & {
	equipList: EquippedItem[];
	plusStatList: StatsAugment[];
	myItemList: Item[];
	myItemList_fast: string[];
	myItemList_recent: string[];
	bookList: SpellBook[];
	magicSlot_main: [PrimarySpell, SubSpell, SubSpell];
	magicSlot_normal: [PrimarySpell, SubSpell, SubSpell];
	magicSlot_sub: [PrimarySpell, SubSpell, SubSpell];
	battleAction: BattleAction[];
	stickAction: StickAction[];
	specialSkill: SpecialSkill[];
	blessList: Blessing[];
	petList: Pet[];
	trainingLevel: TrainingLevel[];
	petList_mute: Pet[];
}

export function createInitialSaveData(): SaveData {
	return {
		playerObjID: "",
		playerObjID_Original: "",
		dressID: undefined,
		maxHp: 0,
		hp: 0,
		maxMp: 0,
		mp: 0,
		sp: 0,
		str: 0,
		def: 0,
		agt: 0,
		fame: 0,
		battleEXP: 0,
		bodyLevel: 0,
		mindLevel: 0,
		bodyTrainingCount: 0,
		mindTrainingCount: 0,
		weaponChargingSpeed: 0,
		walkSpeed: 0,
		gold: 0,
		blackJoe: false,
		nowPet: "",
		lockPetID: "",
		homePet: "",
		ridingMode: false,
		equipList: [],
		plusStatList: [],
		myItemList: [],
		myItemList_fast: [],
		myItemList_recent: [],
		bookList: [],
		magicSlot_main: [undefined, undefined, undefined],
		magicSlot_normal: [undefined, undefined, undefined],
		magicSlot_sub: [undefined, undefined, undefined],
		battleAction: [],
		stickAction: [],
		specialSkill: [],
		blessList: [],
		petList: [],
		trainingLevel: [],
		petList_mute: []
	};
}
