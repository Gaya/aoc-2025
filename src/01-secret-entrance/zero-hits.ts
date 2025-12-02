export function dialPosition(input: number): number {
  if (input < 0) {
    return (100 + (input % 100)) % 100;
  }

  return input % 100;
}

export function roundDistance(a: number, b: number): number {
  const diff = Math.abs(a - b);
  const roundOffset = Math.floor(diff / 100);

  const diffLeft = diff % 100;
  const dialPos = dialPosition(a);

  if (a > b) {
    if (dialPos === 0) {
      return roundOffset;
    }

    return roundOffset + (dialPos - diffLeft <= 0 ? 1 : 0);
  }

  return roundOffset + (dialPos + diffLeft >= 100 ? 1 : 0);
}

export function zeroHits(input: string, totalHits = false): number {
  const lines = input.split('\n');
  let hits = 0;
  let currentPosition = 50;

  for (let line of lines) {
    const direction = line.substring(0, 1);
    const amount = parseInt(line.substring(1), 10);
    const amountDirection = amount * (direction === 'L' ? -1 : 1);

    const newPosition = currentPosition + amountDirection;

    if (totalHits) {
      hits = hits + roundDistance(currentPosition, newPosition);
    } else {
      if (newPosition % 100 === 0) {
        hits++;
      }
    }

    currentPosition = newPosition;
  }

  return hits;
}
