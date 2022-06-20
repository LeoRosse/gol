import * as React from 'react';
import { v4 } from 'uuid';
import { generateArray, nextGeneration } from 'business-logic';
import { cellsStore, columnsStore, elementsStore } from 'store';
import { Loader } from 'ui';
import { Cell } from 'models';

interface BoardProps {
  ButtonComponent: React.ComponentType<{ cell: Cell; position: number }>;
}

const Board: React.FC<BoardProps> = ({ ButtonComponent }) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const { cells, setCells } = cellsStore();
  const { elements, setElements } = elementsStore();
  const { columns, setColumns } = columnsStore();

  React.useEffect(() => {
    if (!elements) return;
    setCells(generateArray(elements));
  }, [elements, setCells]);

  React.useEffect(() => {
    const gameLoop = setInterval(() => {
      const next = nextGeneration(cells, columns);
      if (!next) return;
      setCells(next);
    }, 1000);

    return () => {
      clearInterval(gameLoop);
    };
  });

  // Constants
  const widthElement = 40.4;
  const heightElement = 36;
  // const buttonsArea = 1454.4; // width: 40.4px height: 36px

  const width = divRef.current?.clientWidth || 0;
  const height = window.innerHeight - 136;

  React.useEffect(() => {
    const boardWidth = Math.round(width / widthElement);
    const boardHeight = Math.round(height / heightElement);
    setColumns(boardWidth);
    setElements(boardWidth * boardHeight);
  }, [divRef.current]);

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