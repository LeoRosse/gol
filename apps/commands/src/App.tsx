import * as React from 'react';
import { Button, Center, CommandsUiProps, Grid } from 'ui';
import { cellsStore, gameActionsStore } from 'store';
import { GameActions } from 'models';

const Commands: React.FC<CommandsUiProps> = () => {
  const { status, setStatus } = gameActionsStore();
  const resetCells = cellsStore((state) => state.resetCells);

  const clickMapper = (value: GameActions) => {
    switch (value) {
      case GameActions.PLAY:
        return () => setStatus(value);
      case GameActions.STOP:
        return () => setStatus(value);
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
