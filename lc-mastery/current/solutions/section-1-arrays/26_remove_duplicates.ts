/**
 * 26. Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

function removeDuplicates(nums: number[]): number {
  let insertPos = 1;

  for (let readPos = 1; readPos < nums.length; readPos++) {
    if (nums[insertPos - 1] !== nums[readPos]) {
      nums[insertPos] = nums[readPos];
      insertPos++;
    }
  }
  return insertPos;
}

console.log(removeDuplicates([1, 1, 2])); // Expected: 2, nums = [1,2,_]
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // Expected: 5, nums = [0,1,2,3,4,_,_,_,_,_]
