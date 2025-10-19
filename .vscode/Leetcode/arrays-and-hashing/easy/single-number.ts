// 136. Single Number
// https://leetcode.com/problems/single-number/

function singleNumber(nums: number[]): number {
  const container: Map<number, number> = new Map();

  for (const number of nums) {
    container.set(number, (container.get(number) || 0) + 1);
  }

  for (const [key, value] of container.entries()) {
    if (value === 1) {
      return key;
    }
  }

  return -1;
}

// Test cases
console.log(singleNumber([2, 2, 1])); // Expected: 1
