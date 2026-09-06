import { describe, expect, test } from 'vitest';
import { petIds } from '$/types/pet';

describe(
	'petIds',
	() => {
		test(
			'should contain "Ruka"',
			() => {
				expect(petIds)
					.toContain('Ruka');
			}
		);
	}
);
