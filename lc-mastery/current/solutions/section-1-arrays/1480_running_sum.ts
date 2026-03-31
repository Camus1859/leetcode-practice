/**
 * 1480. Running Sum of 1d Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/running-sum-of-1d-array/
 */

function runningSum(nums: number[]): number[] {

    let total = nums[0]

    for (let i = 1; i <= nums.length - 1; i++) {
        total = total + nums[i]
        nums[i] = total
    }
    return nums
};

console.log(runningSum([1, 2, 3, 4])); // Expected: [1, 3, 6, 10]
// console.log(runningSum([1, 1, 1, 1, 1])); // Expected: [1, 2, 3, 4, 5]
// console.log(runningSum([3, 1, 2, 10, 1])); // Expected: [3, 4, 6, 16, 17]
