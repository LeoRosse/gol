import { Cell } from 'models';
import { evaluateCell } from './utils/evaluate-cell';
import { neighborhoodCellAliveCounter } from './utils/neighborhood-cell-alive-counter';
import { neighborhoodOfCell } from './utils/neighborhood-of-cell';

export const nextGeneration = (array: Cell[] | undefined, nCols: number | undefined): Cell[] | undefined => {
  if (!array || nCols === undefined) return undefined;
  return array.reduce<Cell[]>((acc, curr, i) => {
    const arrayOfNeighbors = neighborhoodOfCell(array, i, nCols);
    const cellAlive = neighborhoodCellAliveCounter(arrayOfNeighbors);
    return [...acc, evaluateCell(cellAlive, curr)];
  }, []);
};
