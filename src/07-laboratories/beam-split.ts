function nextSplitters(
  splitters:  Record<number, Record<number, boolean>>,
  positions: [number, number][],
  maxY: number,
): ([number, number] | undefined)[] {
  return positions.map(([y, x]): [number, number] | undefined => {
    for (let i = y + 1; i <= maxY; i++) {
      if (splitters[i] && splitters[i][x]) {
        return [i, x];
      }
    }

    return undefined;
  });
}

export function findBeamSplits(input: string) {
  const start = input.indexOf('S');
  const rows = input.split('\n');

  const splitters = rows.reduce((acc: Record<number, Record<number, boolean>>, row, ri) => {
    const indexes = [...row.matchAll(/\^/g)];

    indexes.forEach((match) => {
      if (!acc[ri]) {
        acc[ri] = {};
      }

      acc[ri][match.index] = true;
    });

    return acc;
  }, {});

  const maxY = parseInt(Object.keys(splitters).sort((a, b) => parseInt(a) > parseInt(b) ? -1 : 1)[0]);

  const hits: Record<string, boolean> = {};
  let positions: [number, number][] = [[0, start]];

  while (true) {
    const next = nextSplitters(splitters, positions, maxY);
    positions = next
      .filter((s) => typeof s !== 'undefined')
      .filter((s) => !hits[s.join(',')])
      .map(([y, x]): [number, number][] => {
        hits[[y, x].join(',')] = true;
        return [[y, x - 1], [y, x + 1]];
      })
      .flat()
      .reduce((acc: [number, number][], [y, x]) => {
        if (acc.find(([yy, xx]) => yy === y && xx === x)) {
          return acc;
        }

        return [...acc, [y, x]];
      }, []);

    if (next.every((s) => typeof s === 'undefined')) {
      return Object.keys(hits).length;
    }
  }
}
