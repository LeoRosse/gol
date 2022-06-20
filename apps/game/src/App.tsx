import * as React from 'react';
import { AppShell, Button } from 'ui';
import { Board } from 'board';
import Commands from 'commands/Commands';

const Game: React.FC = () => {
  return (
    <AppShell CommandsComponent={Commands} title="A Journey into the Game of Life">
      <Board ButtonComponent={({ cell }) => <Button variant={cell === 1 ? 'filled' : 'outline'} color="dark" />} />
    </AppShell>
  );
};

export default Game;
