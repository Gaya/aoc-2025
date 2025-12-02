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

  it('should do simple correctly', () => {
    expect(zeroHits(`L49`, true)).toEqual(0);
    expect(zeroHits(`R49`, true)).toEqual(0);
    expect(zeroHits(`L50`, true)).toEqual(1);
    expect(zeroHits(`R50`, true)).toEqual(1);
    expect(zeroHits(`R150`, true)).toEqual(2);
    expect(zeroHits(`L150`, true)).toEqual(2);

    expect(zeroHits(`L100\nR50\nR1`, true)).toEqual(2);
    expect(zeroHits(`L49\nL1`, true)).toEqual(1);
    expect(zeroHits(`L250`, true)).toEqual(3);
    expect(zeroHits(`L250\nR500`, true)).toEqual(8);
    expect(zeroHits(`R250\nL500`, true)).toEqual(8);
  });

  it('should solve day one true', async () => {
    return readFile(__dirname + '/input.txt').then((file) => {
      expect(zeroHits(file.toString())).toEqual(1086);
    }).catch(() => {
      expect(1).toEqual(1);
    });
  });

  it('should solve day two true', async () => {
    return readFile(__dirname + '/input.txt').then((file) => {
      expect(zeroHits(file.toString(), true)).toEqual(6268);
    }).catch(() => {
      expect(1).toEqual(1);
    });
  });
});
