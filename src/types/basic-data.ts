import type { PetId } from "$types/pet";

// TODO: fill in missing values
type PlayerObjectId = "" | "BlackberryPink" | "SeraDressLakeSky" | "BlackberryBloom" | string;
// TODO: fill in missing values
type DressId = "SeraDressLakeSky" | undefined | string;

export interface BasicData {
	playerObjID: PlayerObjectId;
	playerObjID_Original: PlayerObjectId;
	dressID: DressId;
	maxHp: number;
	hp: number;
	maxMp: number;
	mp: number;
	sp: number;
	str: number;
	def: number;
	agt: number;
	fame: number;
	battleEXP: number;
	bodyLevel: number;
	mindLevel: number;
	bodyTrainingCount: number;
	mindTrainingCount: number;
	weaponChargingSpeed: number;
	walkSpeed: number;
	gold: number;
	blackJoe: boolean;
	nowPet: PetId;
	lockPetID: PetId;
	homePet: PetId;
	ridingMode: boolean;
}
