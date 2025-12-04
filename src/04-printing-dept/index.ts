// https://adventofcode.com/2025/day/<n>
import { rollFinder, rollRemoval } from './roll-finder';

export default function solution(input: string) {
  const part1 = rollFinder(input);
  const part2 = rollRemoval(input);

  return [part1, part2];
}
