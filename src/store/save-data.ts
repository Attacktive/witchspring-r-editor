import type { SaveData } from "$/types/save-data";
import { writable, derived } from "svelte/store";
import { createInitialSaveData } from "$/types/save-data";

const initialValue = createInitialSaveData();

const createStore = () => {
	const saveDataStore = writable<SaveData>(initialValue);

	const { set, subscribe } = saveDataStore;

	const setWithMigration = (value: SaveData) => {
		const raw = value as unknown as Record<string, unknown>;
		if (raw.nowPetID === undefined && raw.nowPet !== undefined) {
			raw.nowPetID = raw.nowPet;
			delete raw.nowPet;
		}

		set(value);
	};

	const reset = () => set(initialValue);

	return {
		set: setWithMigration,
		subscribe,
		reset
	};
};

export const saveData = createStore();
export const saveDataJson = derived(saveData, $saveData => JSON.stringify($saveData));
