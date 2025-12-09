// https://adventofcode.com/2025/day/<n>
import { solveHomeWork } from './solve-home-work';

export default function solution(input: string) {
  const part1 = solveHomeWork(input);
  const part2 = solveHomeWork(input, true);

  return [part1, part2];
}
