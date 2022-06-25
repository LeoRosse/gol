import * as React from 'react';
import { AppShell, Button } from 'ui';
import { Board } from 'board';
import Commands from 'commands/Commands';

const Game: React.FC = () => (
  <AppShell CommandsComponent={Commands} title="A Journey into the Game of Life">
    <Board
      ButtonComponent={({ cell }) => (
        <Button
          variant="default"
          sx={(theme) => ({
            backgroundColor: cell === 1 ? theme.colors.dark[8] : theme.colors.gray[0],
            '&:hover': {
              backgroundColor: theme.colors.gray[3],
            },
          })}
        />
      )}
    />
  </AppShell>
);

export default Game;
