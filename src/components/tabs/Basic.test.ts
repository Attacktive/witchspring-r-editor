import { get } from 'svelte/store';
import { mount, tick } from 'svelte';
import { describe, expect, test } from 'vitest';
import Basic from '$/components/tabs/Basic.svelte';
import { saveData } from '$/store/save-data';

describe(
	'Basic tab',
	() => {
		test(
			'should select pet as Current Pet when nowPetID is set',
			async () => {
				saveData.reset();
				saveData.set({
					...get(saveData),
					nowPetID: 'Aslan'
				});

				const container = document.createElement('div');
				document.body.appendChild(container);

				mount(Basic, { target: container });
				await tick();

				const select = container.querySelector('select');

				expect(select)
					.not.toBeNull();

				expect(select?.value)
					.toBe('Aslan');
			}
		);
	}
);
