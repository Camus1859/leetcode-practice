/**
 * 26. Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * REVIEW ATTEMPT - Original solved 2026-03-11
 */

function removeDuplicates(nums: number[]): number {
  let insert = 0;

  for (let read = 1; read <= nums.length - 1; read++) {
    if (nums[read] !== nums[insert]) {
      insert++;
      nums[insert] = nums[read];
    }
  }
  return insert + 1;
}

[0, 1, 2, 2];

console.log(removeDuplicates([1, 1, 2])); // Expected: 2, nums = [1, 2, ...]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Expected: 5, nums = [0, 1, 2, 3, 4, ...]



