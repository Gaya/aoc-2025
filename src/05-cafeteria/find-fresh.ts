export function findFresh(input: string): number {
  const ranges = [...input.matchAll(/([0-9]+)-([0-9]+)/gm)]
    .map((match) => [parseInt(match[1]), parseInt(match[2])]);
  const ids = [...input.matchAll(/^([0-9]+)$/gm)]
    .map((match) => parseInt(match[0]))
    .filter((id) => {
      return !!ranges.find(([a, b]) => id >= a && id <= b);
    });
  return ids.length;
}

export function findTotal(input: string): number {
  const sortedRanges = [...input.matchAll(/([0-9]+)-([0-9]+)/gm)]
    .map((match) => [parseInt(match[1]), parseInt(match[2])])
    .sort(([a], [b]) => a > b ? 1 : -1)
    .map(([a, b], index, rest) => {
      if (rest[index + 1]) {
        const [aa] = rest[index + 1];

        if (aa <= b) {
          return [a, aa - 1];
        }
      }

      return [a, b];
    });

  return sortedRanges
    .reduce((acc, range) => {
      return acc + (range[1] - range[0]) + 1;
    }, 0);
}
