import { Cell } from 'models';
import { neighborhoodCellAliveCounter } from '../neighborhood-cell-alive-counter';

const input: (Cell | undefined)[] = [1, 0, 1, undefined, undefined];

test('`neighborhoodCellAliveCounter` applicate randomly', () => {
  expect(neighborhoodCellAliveCounter(input)).toBe(2);
});
