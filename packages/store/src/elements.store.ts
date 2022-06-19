import create from 'zustand';

export const elementsStore = create<{
  elements: number;
  setElements: (elements: number) => void;
}>((set) => ({
  elements: 0,
  setElements: (input) => set((state) => ({ elements: state.elements + input })),
}));
