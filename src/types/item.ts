export interface Item {
	id: string;
	count: number;
	category: number;
}

export function getItemCategory(categoryNumber: number) {
	switch (categoryNumber) {
		case 0:
			return "Consumable";
		case 1:
			return "Booster";
		case 2:
			return "Magic";
		case 3:
			return "Tome";
		case 4:
			return "Equipment";
		case 5:
			return "Key";
		case 6:
			return "In-battle Consumable";
		case 7:
			return "Ingredient";
	}
}
