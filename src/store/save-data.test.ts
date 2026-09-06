import { get } from 'svelte/store';
import { describe, expect, test } from 'vitest';
import type { SaveData } from '$/types/save-data';
import { createInitialSaveData } from '$/types/save-data';
import { saveData } from '$/store/save-data';

describe(
	'saveData store',
	() => {
		test(
			'should set nowPetID correctly',
			() => {
				saveData.reset();
				saveData.set({
					...createInitialSaveData(),
					nowPetID: 'Ruke'
				});

				expect(get(saveData).nowPetID)
					.toBe('Ruke');
			}
		);

		test(
			'should migrate legacy "nowPet" to "nowPetID"',
			() => {
				saveData.reset();
				const legacyData = {
					...createInitialSaveData(),
					nowPet: 'Ruke'
				};

				delete (legacyData as Record<string, unknown>).nowPetID;
				saveData.set(legacyData as unknown as SaveData);

				expect(get(saveData).nowPetID)
					.toBe('Ruke');
			}
		);

		test(
			'should migrate legacy "Ruka" to "Ruke"',
			() => {
				saveData.reset();
				saveData.set({
					...createInitialSaveData(),
					nowPetID: 'Ruka' as unknown as 'Ruke'
				});

				expect(get(saveData).nowPetID)
					.toBe('Ruke');
			}
		);
	}
);
