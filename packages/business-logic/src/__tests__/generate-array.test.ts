import { generateArray } from '../generate-array';

test('`generateArray` generate a random array populate with zero and one', () => {
  expect(generateArray(2)).toHaveLength(2);
});

test('`generateArray` matrix must have value or zero or one', () => {
  expect(generateArray(2)[0]).toBeLessThanOrEqual(1);
});
