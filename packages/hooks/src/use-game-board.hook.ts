import * as React from 'react';
import { generateArray } from 'business-logic';
import { cellsStore, columnsStore, elementsStore } from 'store';

interface UseGameBoardProps {
  divRef: React.RefObject<HTMLDivElement>;
  heightElement: number;
  widthElement: number;
}

const useGameBoard = (props: UseGameBoardProps): [number] => {
  const { setCells } = cellsStore();
  const { elements, setElements } = elementsStore();
  const { setColumns } = columnsStore();

  React.useEffect(() => {
    if (!elements) return;
    setCells(generateArray(elements));
  }, [elements, setCells]);

  const width = props.divRef.current?.clientWidth || 0;
  const height = window.innerHeight - 136;

  React.useEffect(() => {
    const boardWidth = Math.round(width / props.widthElement);
    const boardHeight = Math.round(height / props.heightElement);
    setColumns(boardWidth);
    setElements(boardWidth * boardHeight);
  }, [props.divRef.current]);

  return [height];
};

export { useGameBoard };
