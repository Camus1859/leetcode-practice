// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
  let leftPosToInsert = 1;
  let counter = 0;

  for (let uniqueNum = 1; uniqueNum <= nums.length; uniqueNum++) {
    if (nums[uniqueNum - 1] !== nums[uniqueNum]) {
      nums[leftPosToInsert] = nums[uniqueNum];
      leftPosToInsert++;
      counter++;
    }
  }
  return counter;
}

// Test cases
const nums1 = [1, 1, 2];
console.log(removeDuplicates(nums1)); // Expected: 2, nums = [1, 2, _]

const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums2)); // Expected: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]
