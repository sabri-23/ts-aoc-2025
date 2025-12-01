import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { solvePart1, solvePart2 } from './puzzle';

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadInput(): string {
  return readFileSync(join(__dirname, 'input.txt'), 'utf-8');
}

function main() {
  console.log('🎄 Advent of Code 2025 - Day 1 🎄\n');

  const input = loadInput();

  const part1Result = solvePart1(input);
  console.log(`Part 1: ${part1Result}\n`);

  const part2Result = solvePart2(input);
  console.log(`Part 2: ${part2Result}`);
}

main();
