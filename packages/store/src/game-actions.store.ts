import create from 'zustand';
import { GameActions } from 'models';

export const gameActionsStore = create<{
  run: GameActions;
  setRun: (input: GameActions) => void;
}>((set) => ({
  run: GameActions.STOP,
  setRun: (input) => set(() => ({ run: input })),
}));
