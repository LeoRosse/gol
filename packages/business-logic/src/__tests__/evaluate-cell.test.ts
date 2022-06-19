import { evaluateCell } from '../evaluate-cell';

describe('`evaluateCell` evaluate a cell in base of cells alive in neighborhood in matrix', () => {
  test('Any live cell with one live neighbours dies.', () => {
    expect(evaluateCell(1, 1)).toBe(0);
  });
  test('Any live cell with zero live neighbours dies.', () => {
    expect(evaluateCell(0, 1)).toBe(0);
  });
  test('Any live cell with two live neighbours lives on to the next generation.', () => {
    expect(evaluateCell(2, 1)).toBe(1);
  });
  test('Any live cell with three live neighbours lives on to the next generation.', () => {
    expect(evaluateCell(3, 1)).toBe(1);
  });
  test('Any live cell with more than three live neighbours dies.', () => {
    expect(evaluateCell(4, 1)).toBe(0);
  });
  test('Any dead cell with exactly three live neighbours becomes a live cell.', () => {
    expect(evaluateCell(3, 0)).toBe(1);
  });
});
