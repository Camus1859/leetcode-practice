// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
  let currentSum = -Infinity;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i] + currentSum) {
      currentSum = nums[i];
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
