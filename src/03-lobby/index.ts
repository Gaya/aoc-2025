// https://adventofcode.com/2025/day/3

import { totalJoltage, totalMaxJoltage } from './max-joltage';

export default function solution(input: string) {
  const part1 = totalJoltage(input);
  const part2 = totalMaxJoltage(input);

  return [part1, part2];
}
