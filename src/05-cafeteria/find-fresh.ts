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
  const sortedRanges: [number, number][] = [...input.matchAll(/([0-9]+)-([0-9]+)/gm)]
    .map((match): [number, number] => [parseInt(match[1]), parseInt(match[2])])
    .sort(([a], [b]) => a > b ? 1 : -1);
  const fixedRanges = sortedRanges.reduce((acc: [number, number][], [a, b], currentIndex) => {
      if (acc[currentIndex + 1]) {
        const [aa, bb] = acc[currentIndex + 1];

        if (aa <= b) {
          acc[currentIndex] = [a, aa - 1];
        }

        if (b >= bb) {
          acc[currentIndex + 1] = [aa, b];
        }

        return acc;
      }

      return acc;
    }, sortedRanges);

  return fixedRanges
    .reduce((acc, range) => {
      return acc + (range[1] - range[0]) + 1;
    }, 0);
}
