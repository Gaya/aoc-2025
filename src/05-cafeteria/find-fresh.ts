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
