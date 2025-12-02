export function findInvalid(a: number, b: number): number[] {
  const hits = [];

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

export function findInvalidFromInput(input: string): number {
  const rows = input.split(',');
  return rows
    .map((r) => {
      const [a, b] = r.split('-');

      return findInvalid(parseInt(a), parseInt(b));
    })
    .flat()
    .reduce((a, b) => a + b);
}
