// https://adventofcode.com/2025/day/5

import { findFresh, findTotal } from './find-fresh';

export default function solution(input: string) {
  const part1 = findFresh(input);
  const part2 = findTotal(input);

  return [part1, part2];
}
