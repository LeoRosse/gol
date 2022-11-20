import * as React from 'react';
import { parseArray } from 'business-logic';
import { cellsStore, columnsStore } from 'store';

const Parser: React.FC = () => {
  const { setCells } = cellsStore();
  const { setColumns } = columnsStore();

  const parseFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onloadend = async () => {
      const textSplitted = reader.result?.toString().split('\n');
      window.console.log(textSplitted, 'textSplitted');
      if (!textSplitted) return;
      const columnsFromInputFile = parseInt(textSplitted[1].split(' ')[1]);
      await setColumns(columnsFromInputFile);
      const parsedArray = parseArray(textSplitted);
      window.console.log(parsedArray, 'parsedArray');
      if (!parsedArray) return;
      await setCells(parsedArray);
    };
    if (e?.target?.files) reader.readAsText(e?.target?.files[0]);
  };

  return (
    <>
      <label htmlFor="file-upload">Upload a file text</label>
      <input
        style={{ display: 'none' }}
        id="file-upload"
        type="file"
        accept="text/plain"
        onChange={(e) => parseFile(e)}
      />
    </>
  );
};

export { Parser };
