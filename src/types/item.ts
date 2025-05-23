export type ItemCategoryIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 13 | 16;
export type NullableItemCategoryIndex = ItemCategoryIndex | -1;
export type ItemCategoryText = "Consumable" | "Booster" | "Spell" | "Tome" | "Equipment" | "Key" | "In-battle Consumable" | "Ingredient" | "⁉ IncreasingStoneRed" | "Stimulus";

interface ItemCategoryMapping {
	index: ItemCategoryIndex;
	text: ItemCategoryText;
}

const nonExhaustiveItemIdSet = new Set([
	"AcientLightningDragonHorn",
	"AgilityRing",
	"AgtStimulus",
	"AimhardNecklace",
	"Amor_Zirconia",
	"AnnaBread",
	"Armor_CrapperHigh",
	"Armor_IronGlory",
	"Armor_IronHigh",
	"Armor_Leather",
	"Armor_Mithril",
	"Armor_MithrilHigh",
	"BedosHeadband",
	"BigCrabCover",
	"BigDarkStone",
	"BigGuardian",
	"BigPie",
	"BirdSharkSign",
	"BlackPuddingOil",
	"BlackRihnoHorn",
	"BlackberryBloom",
	"BlackberryPink",
	"BlueCrabCover",
	"BlueCrabHand",
	"BlueFlowerSeed",
	"BlueFrogMocus",
	"BlueMoonStick",
	"BoarBossTooth",
	"BoarGolemBranch",
	"BoarGolemTooth",
	"BombLine",
	"Book_Ban",
	"Book_Bomb",
	"Book_Level_Anna",
	"Book_Level_Fire",
	"Book_Level_Ice",
	"Book_Level_Old",
	"Book_Level_SubCircle",
	"Book_Level_Thunder",
	"Book_Reforge",
	"BraveStep",
	"BufaloGoriliaHorn",
	"CaricoHorn",
	"CaricoTailNiddle",
	"Carrot",
	"CleanWaterBall",
	"CreichApple",
	"CreichLeaf",
	"CreichRoot",
	"CreichWater",
	"Cronball",
	"DarkLeaf",
	"DarkStone",
	"DarkStoneSmall",
	"DefenceRing",
	"DogTooth",
	"DryBerry",
	"DryBread",
	"DryLeaf",
	"DwarfGolemStone",
	"ElectricRhinoHorn",
	"EternalIce",
	"FastFeather",
	"FeatherShoose",
	"FeatherShoose2",
	"FireCrystal",
	"FireDust",
	"FireFrogPocket",
	"FirePendant",
	"FireStone",
	"FoxOrb",
	"FoxOrbPart",
	"FrogPie",
	"Frogspawn",
	"GolemPowerStone1",
	"GolemPowerStone2",
	"GolemPowerStone3",
	"GolemPowerStone3Broken",
	"GoodCookie",
	"GuardianGlove",
	"GuardianPendant",
	"IceCore",
	"IceHead",
	"IceHeart",
	"IceNail",
	"IceScarf",
	"IceSharpArm",
	"IncreasingStoneRed",
	"IronOre",
	"IronPart",
	"Item_LeafPudding",
	"Key_Big",
	"Key_CannaHouseIronDoor",
	"Key_MineUnderDarkStone",
	"Key_RedBeard",
	"Key_ShipPrison",
	"Key_ShipStoreKey",
	"Key_WreckedCaptainRoom",
	"KingPudding",
	"KingQueenPudding",
	"LalaqueApple",
	"LalaqueAppleDark",
	"LavaCore",
	"LavaEye",
	"Laybiss",
	"LeafBall",
	"Leaf_MiniGolem",
	"Leaf_MiniGolem2",
	"LifeStone",
	"LightningCrystal",
	"LightningDragonHorn",
	"LivyaMark",
	"LoveAntlers",
	"MAGICCIRCLE_Double_3",
	"MAGICCIRCLE_Double_5",
	"MAGICCIRCLE_Double_7",
	"MAGICCIRCLE_Ekar",
	"MAGICCIRCLE_Fire_1",
	"MAGICCIRCLE_Fire_3",
	"MAGICCIRCLE_Fire_4",
	"MAGICCIRCLE_Fire_5",
	"MAGICCIRCLE_Fire_6",
	"MAGICCIRCLE_Fire_7",
	"MAGICCIRCLE_Ice_4",
	"MAGICCIRCLE_Ice_5",
	"MAGICCIRCLE_Ice_6",
	"MAGICCIRCLE_Ice_7",
	"MAGICCIRCLE_MindControl",
	"MAGICCIRCLE_Save_5",
	"MAGICCIRCLE_Save_7",
	"MAGICCIRCLE_Temar",
	"MAGICCIRCLE_Thunder_3",
	"MAGICCIRCLE_Thunder_4",
	"MAGICCIRCLE_Thunder_5",
	"MAGICCIRCLE_Thunder_6",
	"MAGICCIRCLE_Thunder_7",
	"MagicRing",
	"MagicStimuler",
	"MagicStimulus",
	"MeatPie",
	"MeatUglyBird",
	"Meat_Boar",
	"Meat_Rabbit",
	"Meat_RabbitFood",
	"NarMeat",
	"NeciEgg",
	"OldLeafPuddingPart",
	"OrangeConfusingStone",
	"PoisonBall",
	"PowerRing",
	"PowerSpring",
	"PowerStimuler",
	"PowerStimulus",
	"PowerStone",
	"PuddingApple",
	"PuddingPie",
	"PunchPuddingPart",
	"PunchTail",
	"PureEaring",
	"QueenPudding",
	"RabbitBread",
	"RallyNecklace1",
	"RallyNecklace2",
	"RedAbsorbStone",
	"RedFreeStone",
	"RestFlower",
	"Ruaret",
	"RukevalleyMark",
	"SPGrowth",
	"SeraDressLakeSky",
	"SeraDressLaquePeach",
	"ShieldStone",
	"ShieldStoneRed",
	"Shield_Dark",
	"Shield_Ice",
	"Shield_IronGlory",
	"Shield_Iron_High",
	"Shield_Iron_Horn",
	"Shield_Wood",
	"Shoes_IronHigh",
	"Shoes_Ruka",
	"SmalGuardian",
	"SmallBomb",
	"SmallBomb2",
	"SmallBomb3",
	"SmallSun",
	"SoulFireStone",
	"Sparkor",
	"SteamGear",
	"SteamPipe",
	"StickyPack",
	"Stone_0",
	"Stone_1",
	"Stone_2",
	"Stone_Small_Blue",
	"Sword_Basic",
	"Sword_Dark",
	"Sword_Dark_Low",
	"Sword_Esteran",
	"Sword_Fire2",
	"Sword_High",
	"Sword_Ice3",
	"Sword_IronGlory",
	"Sword_LaZarel",
	"Sword_Mid",
	"Sword_Mid_2",
	"Sword_Nightmare2",
	"Sword_RedBig",
	"Sword_Soul",
	"Sword_Thunder",
	"ThunderFish",
	"TouchClothArmor",
	"UglyBay",
	"VolcanoHorn",
	"WakeUpPendent",
	"WampleafLeaf",
	"WampleafPetal",
	"WampleafSeed",
	"WarmBread",
	"WarpPapers",
	"WarriorPotionHP",
	"WarriorPotionMP",
	"WarriorRing",
	"WeaponCooler",
	"Weapon_Stick_Fire3",
	"Weapon_Stick_SP_4",
	"Weapon_Stick_Thunder",
	"Weapon_Stick_ThunderNiddle2",
	"Weapon_Stick_ThunderNiddle3",
	"Weapon_Stick_WhiteTree_STR_2",
	"WhiteCrystal",
	"WhiteDeepStone",
	"WhiteRhinoHorn",
	"WindBangle",
	"WizardRing",
	"YellowSeed",
	"Zircon",
	"Zirconina"
]);

export const nonExhaustiveItemIdList = Object.freeze([...nonExhaustiveItemIdSet]);

export const itemCategories: readonly ItemCategoryMapping[] = Object.freeze([
	{
		index: 0,
		text: "Consumable"
	},
	{
		index: 1,
		text: "Booster"
	},
	{
		index: 2,
		text: "Spell"
	},
	{
		index: 3,
		text: "Tome"
	},
	{
		index: 4,
		text: "Equipment"
	},
	{
		index: 5,
		text: "Key"
	},
	{
		index: 6,
		text: "In-battle Consumable"
	},
	{
		index: 7,
		text: "Ingredient"
	},
	{
		index: 13,
		text: "⁉ IncreasingStoneRed"
	},
	{
		index: 16,
		text: "Stimulus"
	}
]);

export interface Item {
	id: string;
	count: number;
	category: number;
}

export interface Filter {
	id: string;
	category: NullableItemCategoryIndex;
}

export function getItemCategory(itemCategoryNumber: number): ItemCategoryMapping["text"] {
	const found = itemCategories.find(itemCategory => itemCategory.index === itemCategoryNumber);
	if (found) {
		return found.text;
	}

	throw new Error(`Unexpected item category number: ${itemCategoryNumber}`);
}
