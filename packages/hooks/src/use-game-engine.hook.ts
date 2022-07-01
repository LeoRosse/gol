import * as React from 'react';

import { dispatchNextGeneration } from 'business-logic';
import { GameActions } from 'models';
import { cellsStore, columnsStore, gameActionsStore } from 'store';

const useGameEngine = (): void => {
  const gameLoop = React.useRef<NodeJS.Timer | null>(null);

  const { cells, setCells } = cellsStore();
  const { columns } = columnsStore();
  const { status } = gameActionsStore();

  React.useEffect(() => {
    if (gameLoop.current) clearInterval(gameLoop.current);
    if (status === GameActions.PLAY)
      gameLoop.current = setInterval(() => dispatchNextGeneration(setCells, cells, columns), 500);
    return () => {
      if (gameLoop.current) clearInterval(gameLoop.current);
    };
  }, [gameLoop.current, status]);
};

export { useGameEngine };
