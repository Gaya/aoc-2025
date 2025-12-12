// https://adventofcode.com/2025/day/<n>
import { findBeamSplits } from './beam-split';

export default function solution(input: string) {
  const part1 = findBeamSplits(input);
  const part2 = findBeamSplits(input, true);

  return [part1, part2];
}
