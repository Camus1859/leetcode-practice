// 905. Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/

function sortArrayByParity(nums: number[]): number[] {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      res.push(nums[i]);
    } else {
      res.unshift(nums[i]);
    }
  }
  return res;
}

// Test cases
console.log(sortArrayByParity([3, 1, 2, 4])); // Expected: [2,4,3,1] (or any array with evens first)
// console.log(sortArrayByParity([0])); // Expected: [0]
