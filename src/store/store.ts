import type { SaveData } from "$types/save-data";
import { writable } from "svelte/store";
import { createInitialSaveData } from "$types/save-data";

const initialValue = createInitialSaveData();

const createStore = () => {
	const store = writable<SaveData>(initialValue);

	const { set, subscribe } = store;

	const reset = () => set(initialValue);

	let state: SaveData;
	subscribe((value: SaveData) => state = value);

	const stringify = () => {
		return JSON.stringify(state);
	};

	return {
		set,
		reset,
		subscribe,
		stringify
	};
};

export const store = createStore();
