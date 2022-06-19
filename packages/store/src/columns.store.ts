import create from 'zustand';

export const columnsStore = create<{
  columns: number;
  setColumns: (elements: number) => void;
}>((set) => ({
  columns: 0,
  setColumns: (input) => set((state) => ({ columns: state.columns + input })),
}));
