import { parseArray } from '../parse-array';

const input = ['Generation 3:', '3 3', '.*.', '***', '.*.'];

const output = [0, 1, 0, 1, 1, 1, 0, 1, 0];

test('`parseArray` generate a new array based on rules of game of life remove the first two rows', () => {
  expect(parseArray(input)).toMatchObject(output);
});
