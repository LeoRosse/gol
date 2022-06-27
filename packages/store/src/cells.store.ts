import create from 'zustand';
import { Cell } from 'models';

export const cellsStore = create<{
  cells: Cell[];
  setCells: (cells: Cell[]) => void;
  updateCell: (indexCell: number) => void;
  resetCells: () => void;
}>((set) => ({
  cells: [],
  setCells: (input) => set(() => ({ cells: input })),
  updateCell: (input) =>
    set((state) => {
      const elementAtIndex = state.cells[input];
      const newElement = elementAtIndex === 1 ? 0 : 1;
      return { cells: [...state.cells.slice(0, input), newElement, ...state.cells.slice(input + 1)] };
    }),
  resetCells: () =>
    set((state) => ({
      cells: state.cells.map((cell) => {
        if (cell === 0) return cell;
        return 0;
      }),
    })),
}));
