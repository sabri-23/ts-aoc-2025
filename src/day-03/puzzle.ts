/**
 * Day 03: Lobby
 */

function parseInput(input: string) {
  return input.trim().split("\n");
}

export function solvePart1(input: string) {
  const lines = parseInput(input);
  let sum = 0;

  for (const line of lines) {
    let maxNum = -1;
    for (let i = 0; i < line.length; i++) {
      for (let j = i + 1; j < line.length; j++) {
        const num = parseInt(line[i]! + line[j]!);
        if (num > maxNum) {
          maxNum = num;
        }
      }
    }
    sum += maxNum;
  }
  return sum;
}

export function solvePart2(input: string) {
  const lines = parseInput(input);
  const maxJoltage = 12;
  let sum = 0;

  for (const line of lines) {
    const lineLen = line.length;
    let remainingPop = lineLen - maxJoltage;
    let maxNum = [-1];

    for (let i = 0; i < line.length; i++) {
      let sizeToPop = 0;

      for (let j = maxNum.length - 1; j >= 0; j--) {
        if (maxNum[j]! < +line[i]! && remainingPop - sizeToPop >= 0) {
          sizeToPop++;
        } else {
          break;
        }
      }

      if (sizeToPop > 0) {
        remainingPop -= sizeToPop;
        maxNum = maxNum.slice(0, -sizeToPop);
      }
      maxNum.push(+line[i]!);
    }
    sum += +maxNum.slice(0, maxJoltage).join("");
  }
  return sum;
}
