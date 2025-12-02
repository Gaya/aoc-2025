import { findInvalid, findInvalidFromInput } from './find-invalid';

describe('findInvalid', () => {
  it('should find invalid ranges', () => {
    expect(findInvalid(11, 22)).toEqual([11, 22]);
    expect(findInvalid(95, 115)).toEqual([99]);
    expect(findInvalid(998, 1012)).toEqual([1010]);
    expect(findInvalid(1188511880, 1188511890)).toEqual([1188511885]);
    expect(findInvalid(222220, 222224)).toEqual([222222]);
    expect(findInvalid(1698522, 1698528)).toEqual([]);
    expect(findInvalid(446443, 446449)).toEqual([446446]);
    expect(findInvalid(38593856, 38593862)).toEqual([38593859]);

    expect(findInvalid(11, 1700))
      .toEqual([11, 22, 33, 44, 55, 66, 77, 88, 99, 1010, 1111, 1212, 1313, 1414, 1515, 1616]);
  });
});

describe('findInvalidFromInput', () => {
  it('should solve the normal puzzle', () => {
    expect(findInvalidFromInput(`11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`))
      .toEqual(1227775554);
  });
});
