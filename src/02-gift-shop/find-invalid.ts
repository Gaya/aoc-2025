export function findInvalid(a: number, b: number): number[] {
  const hits: number[] = [];

  const aS = a.toString();
  const min = aS.length % 2 === 0 ? parseInt(aS.substring(0, aS.length / 2).repeat(2))
    : parseInt(Math.pow(10, Math.floor(aS.length / 2)).toString().repeat(2));

  if (b < min) {
    return [];
  }

  for (let i = a; i < b; i++) {
    const iS = i.toString();
    if (iS.length % 2 === 0) {
      const iSn = parseInt(iS.substring(0, iS.length / 2).repeat(2));

      if (iSn >= a && iSn <= b) {
        hits.push(iSn);
        i = (i + Math.pow(10, iS.length / 2)) - 1;
      }
    }
  }

  return hits;
}

export function findInvalidRepeat(a: number, b: number): number[] {
  const hits = new Set<number>([]);
  const checked: Record<string, boolean> = {};

  for (let i = a; i < b; i++) {
    const iS = i.toString();
    for (let j = 1; j <= Math.floor(iS.length / 2); j++) {
      if (iS.length % j === 0) {
        const iSSn = iS.substring(0, j);

        if (!checked[iSSn]) {
          const iSn = parseInt(iSSn.repeat(iS.length / j));

          checked[iSSn] = true;

          if (iSn >= a && iSn <= b) {
            hits.add(iSn);
          }
        }
      }
    }
  }

  return [...hits];
}

export function findInvalidFromInput(input: string, repeated = false): number {
  const rows = input.split(',');
  return rows
    .map((r) => {
      const [a, b] = r.split('-');

      if (repeated) {
        return findInvalidRepeat(parseInt(a), parseInt(b));
      }

      return findInvalid(parseInt(a), parseInt(b));
    })
    .flat()
    .reduce((a, b) => a + b);
}
