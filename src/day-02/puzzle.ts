/**
 * Day 02: Gift Shop
 */

function parseInput(input: string) {
  return input
    .trim()
    .split(",")
    .map((interval) => interval.split("-").map(Number) as [number, number]);
}

export function solvePart1(input: string) {
  const intervales = parseInput(input);
  let sum = 0;

  for (const [start, end] of intervales) {
    for (let i = start; i <= end; i++) {
      let size = ("" + i).length;

      if (size % 2 !== 0) continue;

      const mid = size / 2;
      const left = (i + "").slice(0, mid);
      const right = (i + "").slice(mid);

      sum += left === right ? i : 0;
    }
  }
  return sum;
}

export function solvePart2(input: string) {
  const intervales = parseInput(input);
  let sum = 0;

  for (const [start, end] of intervales) {
    for (let i = start; i <= end; i++) {
      const str = String(i);
      const len = str.length;

      for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
        if (len % patternLen !== 0) continue;

        const pattern = str.slice(0, patternLen);

        if (str.split(pattern).every((part) => part === '')) {
          sum += i;
          break;
        }
      }
    }
  }
  return sum;
}
