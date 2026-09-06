import { describe, expect, test } from 'vitest';
import { petIds } from '$/types/pet';

describe(
	'petIds',
	() => {
		test(
			'should contain "Ruke" and not contain "Ruka"',
			() => {
				expect(petIds)
					.toContain('Ruke');

				expect(petIds)
					.not.toContain('Ruka');
			}
		);
	}
);
