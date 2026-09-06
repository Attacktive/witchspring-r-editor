import { get } from 'svelte/store';
import { mount, tick } from 'svelte';
import { describe, expect, test } from 'vitest';
import Basic from '$/components/tabs/Basic.svelte';
import { saveData } from '$/store/save-data';

describe(
	'Basic tab',
	() => {
		test(
			'should select "Ruka" as Current Pet when nowPetID is "Ruka"',
			async () => {
				saveData.reset();
				saveData.set({
					...get(saveData),
					nowPetID: 'Ruka'
				});

				const container = document.createElement('div');
				document.body.appendChild(container);

				mount(Basic, { target: container });
				await tick();
				const select = container.querySelector('select');
				expect(select)
					.not.toBeNull();

				expect(select?.value)
					.toBe('Ruka');
			}
		);
	}
);
