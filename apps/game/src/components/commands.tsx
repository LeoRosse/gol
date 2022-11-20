import * as React from 'react';
import { dispatchNextGeneration } from 'business-logic';
import { GameActions } from 'models';
import { cellsStore, columnsStore, gameActionsStore } from 'store';
import { Button, Center, CommandsUiProps, Grid } from 'ui';

const Commands: React.FC<CommandsUiProps> = () => {
  const { status, setStatus } = gameActionsStore();
  const resetCells = cellsStore((state) => state.resetCells);
  const setCells = cellsStore((state) => state.setCells);
  const cells = cellsStore((state) => state.cells);
  const columns = columnsStore((state) => state.columns);

  const clickMapper = (value: GameActions) => {
    switch (value) {
      case GameActions.PLAY:
        return () => setStatus(value);
      case GameActions.STOP:
        return () => setStatus(value);
      case GameActions.NEXT:
        return () => dispatchNextGeneration(setCells, cells, columns);
      default:
        return () => resetCells();
    }
  };

  return (
    <Center>
      <Grid style={{ width: '100%' }}>
        {Object.values(GameActions).map((value) => (
          <Grid.Col span={12} key={value}>
            <Button
              color="dark"
              size="md"
              style={{ width: '100%' }}
              variant="default"
              onClick={clickMapper(value)}
              disabled={status === value}
            >
              {value}
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </Center>
  );
};

export default Commands;
