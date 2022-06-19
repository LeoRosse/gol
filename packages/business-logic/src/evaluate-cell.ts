import { Cell } from 'models';

export const evaluateCell = (cellsInNeighborhooAlives: number, cellValue: Cell): Cell => {
  if (
    (cellValue === 1 && (cellsInNeighborhooAlives === 2 || cellsInNeighborhooAlives === 3)) ||
    (cellValue === 0 && cellsInNeighborhooAlives === 3)
  )
    return 1;
  return 0;
};
