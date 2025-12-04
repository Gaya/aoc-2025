import { totalJoltage, totalMaxJoltage } from './max-joltage';

const input = `987654321111111
811111111111119
234234234234278
818181911112111`;

describe('totalJoltage', () => {
  it('should find the total joltage', () => {
    expect(totalJoltage(input)).toEqual(357);
  });
});

describe('totalMaxJoltage', () => {
  it('should find 12 digit joltage', () => {
    expect(totalMaxJoltage('987654321111111')).toEqual(987654321111);
    expect(totalMaxJoltage('811111111111119')).toEqual(811111111119);
    expect(totalMaxJoltage('234234234234278')).toEqual(434234234278);
    expect(totalMaxJoltage('818181911112111')).toEqual(888911112111);
    expect(totalMaxJoltage(`987654321111111
811111111111119
234234234234278
818181911112111`)).toEqual(3121910778619);
  });
});
