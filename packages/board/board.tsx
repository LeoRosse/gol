import * as React from 'react';
import { v4 } from 'uuid';

import { useGameBoard, useGameEngine } from 'hooks';
import { Cell } from 'models';
import { cellsStore } from 'store';
import { Loader } from 'ui';
import { heightElement, widthElement } from './constants/element';

interface BoardProps {
  ButtonComponent: React.ComponentType<{ cell: Cell; position: number }>;
}

const Board: React.FC<BoardProps> = ({ ButtonComponent }) => {
  const divRef = React.useRef<HTMLDivElement>(null);

  const { cells } = cellsStore();

  const [height] = useGameBoard({ divRef, heightElement, widthElement });

  useGameEngine();

  return (
    <div
      ref={divRef}
      style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(${widthElement}px, 1fr))` }}
    >
      {!cells || cells.length === 0 ? (
        <div style={{ display: 'flex', height, justifyContent: 'center', alignItems: 'center' }}>
          <Loader variant="bars" size="lg" color="dark" />
        </div>
      ) : (
        cells.map((el, i) => <ButtonComponent key={v4()} cell={el} position={i} />)
      )}
    </div>
  );
};

export { Board };
