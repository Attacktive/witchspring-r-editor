export const petIds: PetId[] = ["", "Aslan", "BackPackKid", "BadRabbit", "Beshutain", "Brilion", "Carico", "Carlic", "Izon", "Justice", "LightningBell", "Necomis", "PigJunior", "Ruka", "SeedFairy", "SmallThor", "SteamGolem3", "Tialion", "Tialis", "Tialit", "WhiteFox", "ZirconiaJunior"] as const;

export type PetId = "" | "Aslan" | "BackPackKid" | "BadRabbit" | "Beshutain" | "Brilion" | "Carico" | "Carlic" | "Izon" | "Justice" | "LightningBell" | "Necomis" | "PigJunior" | "Ruka" | "SeedFairy" | "SmallThor" | "SteamGolem3" | "Tialion" | "Tialis" | "Tialit" | "WhiteFox" | "ZirconiaJunior";

export interface Pet {
	petID: PetId;
	petNameID: PetId;
	love: number;
	isGuest: boolean;
}
