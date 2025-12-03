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
