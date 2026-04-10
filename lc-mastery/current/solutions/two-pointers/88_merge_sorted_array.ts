/**
 * 88. Merge Sorted Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/merge-sorted-array/
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let nums1ReadPointer = m - 1;
  let nums2ReadPointer = n - 1;

  for (let insert = nums1.length - 1; insert >= 0; insert--) {
    if (
      nums1[nums1ReadPointer] >= nums2[nums2ReadPointer] &&
      nums1ReadPointer >= 0
    ) {
      nums1[insert] = nums1[nums1ReadPointer];
      nums1ReadPointer--;
    } else if (
      nums1[nums1ReadPointer] < nums2[nums2ReadPointer] &&
      nums2ReadPointer >= 0
    ) {
      nums1[insert] = nums2[nums2ReadPointer];
      nums2ReadPointer--;
    } else if (nums1ReadPointer < 0) {
      nums1[insert] = nums2[nums2ReadPointer];
      nums2ReadPointer--;
    }
  }
}

// ============================================
// TEST CASES
// ============================================

const test1 = [1, 2, 3, 0, 0, 0];
merge(test1, 3, [2, 5, 6], 3);
console.log(test1); // Expected: [1, 2, 2, 3, 5, 6]

const test2 = [1];
merge(test2, 1, [], 0);
console.log(test2); // Expected: [1]

const test3 = [0];
merge(test3, 0, [1], 1);
console.log(test3); // Expected: [1]
