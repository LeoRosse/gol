import { Cell } from 'models';
import { nextGeneration } from './next-generation';

const dispatchNextGeneration = (callBack: (input: Cell[]) => void, cells: Cell[], columns: number): void => {
  const next = nextGeneration(cells, columns);
  if (!next) return;
  callBack(next);
};

export { dispatchNextGeneration };
