import { readFile } from 'fs/promises';

import { dialPosition, roundDistance, zeroHits } from './zero-hits';

describe('dialPosition', () => {
  it('handles positives', () => {
    expect(dialPosition(0)).toEqual(0);
    expect(dialPosition(25)).toEqual(25);
    expect(dialPosition(50)).toEqual(50);
    expect(dialPosition(100)).toEqual(0);
    expect(dialPosition(125)).toEqual(25);
    expect(dialPosition(150)).toEqual(50);
    expect(dialPosition(250)).toEqual(50);
  });

  it('handles negatives', () => {
    expect(dialPosition(-25)).toEqual(75);
    expect(dialPosition(-50)).toEqual(50);
    expect(dialPosition(-100)).toEqual(0);
    expect(dialPosition(-125)).toEqual(75);
    expect(dialPosition(-150)).toEqual(50);
    expect(dialPosition(-250)).toEqual(50);
  });
});

describe('roundDistance', () => {
  it('should calc round distance', () => {
    expect(roundDistance(0, 150)).toEqual(1);
    expect(roundDistance(75, 200)).toEqual(2);
    expect(roundDistance(75, 201)).toEqual(2);
    expect(roundDistance(0, 10)).toEqual(0);
    expect(roundDistance(90, 100)).toEqual(1);
    expect(roundDistance(100, 150)).toEqual(0);
    expect(roundDistance(0, -150)).toEqual(1);
    expect(roundDistance(0, 1)).toEqual(0);
    expect(roundDistance(0, -10)).toEqual(0);
    expect(roundDistance(10, -10)).toEqual(1);
    expect(roundDistance(-10, 10)).toEqual(1);
    expect(roundDistance(-100, 1)).toEqual(1);
    expect(roundDistance(0, -100)).toEqual(1);
    expect(roundDistance(50, 0)).toEqual(1);
    expect(roundDistance(50, 110)).toEqual(1);
    expect(roundDistance(0, -1)).toEqual(0);
    expect(roundDistance(-1, 0)).toEqual(1);
    expect(roundDistance(99, 100)).toEqual(1);
    expect(roundDistance(100, 99)).toEqual(0);
    expect(roundDistance(-200, 300)).toEqual(5);
    expect(roundDistance(300, -200)).toEqual(5);
    expect(roundDistance(-300, -100)).toEqual(2);
    expect(roundDistance(100, 300)).toEqual(2);
    expect(roundDistance(0, 100)).toEqual(1);
    expect(roundDistance(-50, 50)).toEqual(1);
    expect(roundDistance(50, -50)).toEqual(1);
    expect(roundDistance(-50, 0)).toEqual(1);
  });
});

describe('zero hits', () => {
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
    expect(zeroHits(`L60`, true)).toEqual(1);
    expect(zeroHits(`R60`, true)).toEqual(1);
    expect(zeroHits(`R150`, true)).toEqual(2);
    expect(zeroHits(`L150`, true)).toEqual(2);

    expect(zeroHits(`L100\nR50\nR1`, true)).toEqual(2);
    expect(zeroHits(`L49\nL1`, true)).toEqual(1);
    expect(zeroHits(`L250`, true)).toEqual(3);
    expect(zeroHits(`L250\nR500`, true)).toEqual(8);
    expect(zeroHits(`R250\nL500`, true)).toEqual(8);
  });

  it.skip('should solve day one true', async () => {
    return readFile(__dirname + '/input.txt').then((file) => {
      expect(zeroHits(file.toString())).toEqual(1086);
    });
  });

  it.skip('should solve day two true', async () => {
    return readFile(__dirname + '/input.txt').then((file) => {
      expect(zeroHits(file.toString(), true)).toEqual(6268);
    });
  });
});
