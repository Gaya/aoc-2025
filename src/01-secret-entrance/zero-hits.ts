export function zeroHits(input: string, totalHits = false): number {
  const lines = input.split('\n');
  let hits = 0;
  let currentPosition = 50;

  for (let line of lines) {
    const direction = line.substring(0, 1);
    const amount = parseInt(line.substring(1), 10);
    const amountDirection = parseInt(line.substring(1), 10) * (direction === 'L' ? -1 : 1);

    const newPosition = currentPosition + amountDirection;

    if (totalHits) {
      for (let j = 1; j <= amount; j++) {
        const seq = direction === 'L' ? currentPosition - j : currentPosition + j;
        if (seq % 100 === 0) {
          hits++;
        }
      }
    } else {
      if (newPosition % 100 === 0) {
        hits++;
      }
    }

    currentPosition = newPosition;
  }

  return hits;
}
