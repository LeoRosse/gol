import { Cell } from 'models';

export const parseArray = (textSplitted: string[] | undefined): Cell[] | undefined =>
  textSplitted?.slice(2).reduce<Cell[]>((acc, curr) => {
    const replace = curr.split(' ').map((splitted) => (splitted === '*' ? 1 : 0));
    return [...acc, ...replace];
  }, []);
