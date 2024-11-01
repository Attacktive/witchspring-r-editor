import type { SaveData } from "$/types/save-data";
import { writable, derived } from "svelte/store";
import { createInitialSaveData } from "$/types/save-data";

const initialValue = createInitialSaveData();

const createStore = () => {
	const saveDataStore = writable<SaveData>(initialValue);

	const { set, subscribe } = saveDataStore;

	const reset = () => set(initialValue);

	return {
		set,
		subscribe,
		reset
	};
};

export const saveData = createStore();
export const saveDataJson = derived(saveData, $saveData => JSON.stringify($saveData));
