import { Cell } from 'models';

// a completly random number, just to create a 7 X 45 matrix
const elementsDefault = 315;

export const generateArray = (elements: number = elementsDefault): Cell[] =>
  [...Array(elements)].map(() => Math.round(Math.random()) as Cell);
