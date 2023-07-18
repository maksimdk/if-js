import { sum } from '../scripts/sum';

describe('sum of two values', () => {
  test('sum a & b', () => {
    expect(sum(5)(3)).toBe(8);
  });
});
