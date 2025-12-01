// https://adventofcode.com/2025/day/1

import { zeroHits } from './zero-hits';

export default function solution(input: string) {
  const part1 = zeroHits(input);
  const part2 = zeroHits(input, true);

  return [part1, part2];
}
