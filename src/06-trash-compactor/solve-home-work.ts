export function solveHomeWork(input: string, rtl = false) {
  const operations = [...input.matchAll(/([*+])( +)/gm)]
    .map((o, i, array): [string, number, number] => [o[1], o.index - array[0].index, o[0].length - (i < array.length - 1 ? 1 : 0)]);

  const cols = operations.length;

  let sequenceValues: number[][] = [];

  if (!rtl) {
    const numbers = [...input.matchAll(/\d+/gm)].map((n) => parseInt(n[0]));
    const sequences = numbers.reduce((acc: Record<number, number[]>, number, index) => {
      const si = index % cols;
      let rest = acc[si] || [];

      return {
        ...acc,
        [si]: [...rest, number],
      };
    }, []);

    sequenceValues = Object.values(sequences);
  } else {
    const numbers: Record<number, number> = [...input.matchAll(/\d/gm)]
      .reduce((acc, n) => {
        return {
          ...acc,
          [n.index]: n[0],
        };
      }, {});
    const rows = [...input.matchAll(/^.+$/gm)];
    const rowLength = rows[0][0].length;

    for (let col = 0; col < cols; col++) {
      const [_, offsetX, nums] = operations[col];
      for (let x = 0; x < nums; x++) {
        let comp = '';
        for (let y = 0; y < rows.length - 1; y++) {
          const offsetY = (rowLength + 1) * y;
          const l = numbers[offsetX + offsetY + x];
          comp = comp + (l || '');
        }
        const outcome = parseInt(comp);

        if (!sequenceValues[col]) {
          sequenceValues[col] = [];
        }

        sequenceValues[col].push(outcome);
      }
    }
  }

  return sequenceValues
    .reduce((acc, sequence, index) => {
    return acc + sequence.reduce((acc2, num) => {
      if (operations[index][0] === '*') {
        if (acc2 === 0) {
          return num;
        }

        return acc2 * num;
      }

      return acc2 + num;
    }, 0);
  }, 0);
}
