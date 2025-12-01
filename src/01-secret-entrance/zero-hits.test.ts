import { zeroHits } from './zero-hits';
import { readFile } from 'fs/promises';

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

describe('zero hits', () => {
  it('should solve day one', () => {
    expect(zeroHits(input)).toEqual(3);
  });

  it('should solve day two', () => {
    expect(zeroHits(input, true)).toEqual(6);
  });

  it('should solve day one true', async () => {
    return readFile(__dirname + '/input.txt').then((file) => {
      expect(zeroHits(file.toString())).toEqual(1086);
    })
  });

  it('should solve day two true', async () => {
    return readFile(__dirname + '/input.txt').then((file) => {
      expect(zeroHits(file.toString(), true)).toEqual(6268);
    })
  });
});
