export const neighborhoodCellAliveCounter = (input: (number | undefined)[]): number =>
  input.reduce<number>((acc, curr) => {
    if (curr !== undefined) acc += curr;
    return acc;
  }, 0);
