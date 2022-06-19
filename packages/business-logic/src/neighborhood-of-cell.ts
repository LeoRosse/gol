import { Cell } from 'models';

export const neighborhoodOfCell = (array: Cell[], i: number, nCols: number): number[] => {
  const module = i % nCols;
  if (module === 0)
    return [array[i + 1], array[i + nCols], array[i + nCols + 1], array[i - nCols + 1], array[i - nCols]];
  if (module === nCols - 1)
    return [array[i - 1], array[i + nCols], array[i + nCols - 1], array[i - nCols - 1], array[i - nCols]];
  return [
    array[i - 1],
    array[i + 1],
    array[i - nCols],
    array[i + nCols],
    array[i - nCols - 1],
    array[i - nCols + 1],
    array[i + nCols - 1],
    array[i + nCols + 1],
  ];
};
