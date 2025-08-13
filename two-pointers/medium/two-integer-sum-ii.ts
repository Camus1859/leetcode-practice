// Two Integer Sum II
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSumII = (numbers: number[], target: number): number[] => {
  let left = 0;
  let right = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }
  }

      return [left + 1, right + 1];
};

// Test cases
const numbers1 = [2, 3, 4];
const target1 = 6;
console.log(twoSumII(numbers1, target1)); // Expected: [1, 2]
