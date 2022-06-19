import { Cell } from 'models';
import { nextGeneration } from '../next-generation';

const input: Cell[] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1];

const output: Cell[] = [0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0];

test('`nextGeneration` generate a new array based on rules of game of life', () => {
  expect(nextGeneration(input, 4)).toMatchObject(output);
});
