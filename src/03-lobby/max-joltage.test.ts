import { totalJoltage } from './max-joltage';

const input = `987654321111111
811111111111119
234234234234278
818181911112111`;

describe('totalJoltage', () => {
  it('should find the total joltage', () => {
    expect(totalJoltage(input)).toEqual(357);
  });
});
