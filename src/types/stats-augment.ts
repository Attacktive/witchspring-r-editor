export const statsAugmentTags = ["ACCESSARY", "ARMOR", "DRESS", "SHIELD", "SHOES", "SPECIAL", "WEAPON"];

export interface StatsAugment {
	id: string;
	tag: "ACCESSARY" | "ARMOR" | "DRESS" | "SHIELD" | "SHOES" | "SPECIAL" | "WEAPON";
	point_hp: number;
	rate_hp: number;
	point_mp: number;
	rate_mp: number;
	point_sp: number;
	rate_sp: number;
	point_str: number;
	rate_str: number;
	point_def: number;
	rate_def: number;
	point_agt: number;
	rate_agt: number;
	defRate_magic: number;
	defRate_physical: number;
}
