import { chunkArray } from '../chunk-array';

test('`chunkArray` should chunk a generic array by size', () => {
  const output = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  expect(chunkArray([1, 2, 3, 4, 5, 6], 2)).toEqual(output);
});

test('`chunkArray` should chunk an array of strings by size', () => {
  const output = [['test_one', 'test_two'], ['test_three', 'test_four'], ['test_five']];
  expect(chunkArray(['test_one', 'test_two', 'test_three', 'test_four', 'test_five'], 2)).toEqual(output);
});
