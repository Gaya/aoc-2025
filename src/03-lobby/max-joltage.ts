const checks: string[] = [];
for (let i = 99; i >= 10; i--) {
  const num = i.toString();
  checks.push(`\\d*(${num[0]})\\d*(${num[1]})\\d*`);
}
const regexp = new RegExp(checks.join('|'), 'gm');

export function totalJoltage(input: string): number {
  const result = [...input.matchAll(regexp)];

  return result
    .map((row) => row.reduce((acc, a, currentIndex) => {
      if (currentIndex > 0 && !!a) {
        if (acc === 0) {
          return parseInt(a, 10) * 10;
        }

        return acc + parseInt(a, 10);
      }

      return acc;
    }, 0))
    .reduce((a, b) => a + b);
}

function maxJoltage(input: string) {
  const numbers = input.split('');
  const availableNumbers = [...new Set(numbers)].sort((a, b) => a > b ? -1 : 1);

  let composed = '';
  let currentIndex = 0;

  for (let i = 0; i < availableNumbers.length; i++) {
    let number: number;
    do {
      number = numbers
        .findIndex((value, index) => value === availableNumbers[i]
          && index >= currentIndex
          && index <= numbers.length - (12 - composed.length));

      if (number > -1) {
        currentIndex = number + 1;
        composed += availableNumbers[i];
        i = -1;

        if (composed.length === 12) {
          return parseInt(composed, 10);
        }
      }
    } while (number > -1);
  }

  return 0;
}

export function totalMaxJoltage(input: string): number {
  return input.split('\n').reduce((acc, row) => acc + maxJoltage(row), 0);
}
