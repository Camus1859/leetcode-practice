// 414. Third Maximum Number
// https://leetcode.com/problems/third-maximum-number/

function thirdMax(nums: number[]): number {
  return new Set(nums).size < 3
    ? Math.max(...nums)
    : [...new Set(nums)].sort((a, b) => b - a)[2];
}

console.log(thirdMax([3, 2, 1])); // Expected: 1
