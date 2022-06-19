import { Cell } from 'models';
import { neighborhoodOfCell } from '../neighborhood-of-cell';

const input: Cell[] = [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1];

test('`neighborhoodOfCell` calculate relative neighborhood of cell in matrix', () => {
  expect(neighborhoodOfCell(input, 0, 4)).toMatchObject([1, 0, 1, undefined, undefined]);
});
