function gridFromInput(input: string) {
  const lineLength = input.split('\n')[0].length;
  const matches = [...input.replaceAll('\n', '').matchAll(/@/gm)];

  const rollGrid = matches.reduce((acc: Record<number, Record<number, boolean>>, match) => {
    const { index } = match;
    const col = index % lineLength;
    const row = Math.floor(index / lineLength);

    return {
      ...acc,
      [row]: {
        ...(acc[row] || {}),
        [col]: true,
      },
    };
  }, {});
  return { lineLength, matches, rollGrid };
}

export function rollFinder(input: string): number {
  const { lineLength, matches, rollGrid } = gridFromInput(input);

  return matches.reduce((acc: number, match) => {
    const { index } = match;
    const col = index % lineLength;
    const row = Math.floor(index / lineLength);

    let found = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (!(x ===0 && y === 0) && rollGrid[row + y] && rollGrid[row + y][col + x]) {
          found++;

          if (found >= 4) {
            return acc;
          }
        }
      }
    }

    return acc + 1;
  }, 0);
}

function rollRemovalGrid(grid: Record<number, Record<number, boolean>>, total = 0): number {
  const newGrid = { ...grid };

  const amount = Object.entries(grid).reduce((acc, [row, cols]) => {
    const r = parseInt(row, 10);

    return acc + Object.keys(cols).reduce((acc2, col) => {
      const c = parseInt(col, 10);

      let found = 0;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (!(x ===0 && y === 0) && grid[r + y] && grid[r + y][c + x]) {
            found++;

            if (found >= 4) {
              return acc2;
            }
          }
        }
      }

      delete newGrid[r][c];

      return acc2 + 1;
    }, 0);
  }, 0);

  if (amount === 0) {
    return total;
  } else {
    return rollRemovalGrid(newGrid, amount + total);
  }
}

export function rollRemoval(input: string) {
  const { rollGrid } = gridFromInput(input);

  return rollRemovalGrid(rollGrid);
}
