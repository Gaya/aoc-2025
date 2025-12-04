import { rollFinder, rollRemoval } from './roll-finder';

describe('rollFinder', () => {
  it('should find available rolls', () => {
    expect(rollFinder(`..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`)).toEqual(13);
  });
});

describe('rollRemoval', () => {
  it('should keep removing rolls', () => {
    expect(rollRemoval(`..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`)).toEqual(43);
  });
});
