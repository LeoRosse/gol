import * as React from 'react';
import { AppShell, Button } from 'ui';
import { Board } from 'board';
import Commands from './components/commands';
import { cellsStore } from 'store';
import { Parser } from './components/parser';

const Game: React.FC = () => {
  const updateCell = cellsStore((state) => state.updateCell);
  return (
    <AppShell CommandsComponent={Commands} ParserComponent={Parser} title="A Journey into the Game of Life">
      <Board
        ButtonComponent={({ cell, position }) => (
          <Button
            onClick={() => updateCell(position)}
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
};

export default Game;
