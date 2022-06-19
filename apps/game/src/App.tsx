import * as React from 'react';
import { AppShell, Button } from 'ui';
import { Board } from 'board';

const Game: React.FC = () => {
  return (
    <AppShell title="A Journey into the Game of Life">
      <Board ButtonComponent={() => <Button variant="outline" color="dark" />} />
    </AppShell>
  );
};

export default Game;
