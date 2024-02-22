type TrainingId = "read" | "pushUp" | "punchTree" | "run" | "swim" | "meditation" | "make" | "magicShoot" | "meditation2" | "punchRock";

export interface TrainingLevel {
	id: TrainingId;
	level: number;
	successCount: number;
}
