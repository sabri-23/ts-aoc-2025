/**
 * Day 01: Secret Entrance
 */
const DIAL_START = 50;

function parseInput(input: string) {
  return input
    .trim()
    .split("\n")
    .map((line) => (line[0] === "L" ? -line.slice(1) : +line.slice(1)));
}

function normalizePosition(position: number) {
  return ((position % 100) + 100) % 100;
}

function countZeroCrossings(startPos: number, move: number): number {
  if (move === 0) return 0;

  const absMove = Math.abs(move);
  const direction = move > 0 ? 1 : -1;

  let crossings = 0;
  let currentPos = startPos;

  for (let i = 0; i < absMove; i++) {
    currentPos = normalizePosition(currentPos + direction);
    if (currentPos === 0) {
      crossings++;
    }
  }

  return crossings;
}

export function solvePart1(input: string): number {
  const moves = parseInput(input);
  let position = DIAL_START;
  let zeroCount = 0;

  for (const move of moves) {
    position = normalizePosition(position + move);
    if (position === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}

export function solvePart2(input: string): number {
  const moves = parseInput(input);
  let position = DIAL_START;
  let totalZeroCrossings = 0;

  for (const move of moves) {
    totalZeroCrossings += countZeroCrossings(position, move);
    position = normalizePosition(position + move);
  }

  return totalZeroCrossings;
}
