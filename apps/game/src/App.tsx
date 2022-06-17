import * as React from 'react';
import { AppShell } from 'ui';
import { Board } from 'board';

const Game: React.FC = () => {
  return (
    <AppShell title="A Journey into the Game of Life">
      <Board />
    </AppShell>
  );
};

export default Game;
