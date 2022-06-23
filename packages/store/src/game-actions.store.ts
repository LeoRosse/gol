import create from 'zustand';
import { GameActions } from 'models';

export const gameActionsStore = create<{
  status: GameActions;
  setStatus: (input: GameActions) => void;
}>((set) => ({
  status: GameActions.STOP,
  setStatus: (input) => set(() => ({ status: input })),
}));
