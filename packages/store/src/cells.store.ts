import create from 'zustand';
import { Cell } from 'models';

export const cellsStore = create<{
  cells: Cell[];
  setCells: (cells: Cell[]) => void;
}>((set) => ({
  cells: [],
  setCells: (input) => set(() => ({ cells: input })),
}));
