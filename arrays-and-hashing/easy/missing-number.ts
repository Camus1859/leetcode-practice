// Missing Number
// https://leetcode.com/problems/missing-number/

function missingNumber(nums: number[]): number {
  const container: { [key: string]: boolean } = {};

  for (let i = 0; i < nums.length; i++) {
    container[nums[i]] = true;
  }

  for (let i = 0; i < nums.length; i++) {
    if (container[i] === undefined) {
      return i;
    }
  }

  return nums.length
}

// Test cases
// const nums11 = [3, 0, 1];
// console.log(missingNumber(nums1)); // Expected: 2

// const nums21 = [0, 1];
// console.log(missingNumber(nums21)); // Expected: 2

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(missingNumber(nums)); // Expected: 8
