// Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

function longestConsecutive(nums: number[]): number {
  const container: { [key: string]: number } = {};

  for (const num of nums) {
    if (container[num] === undefined) {
      container[num] = 1;
    } else {
      container[num] += 1;
    }
  }

  let longesttCount = 0;

  for (const key in container) {
    if (container[Number(key) - 1] === undefined) {
      let currentNumber = Number(key);
      let counter = 1;

      while (container[currentNumber + 1] !== undefined) {
        counter++;
        currentNumber++;
      }

      if (counter > longesttCount) {
        longesttCount = counter;
      }
    }
  }

  return longesttCount;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// Expected: 9
