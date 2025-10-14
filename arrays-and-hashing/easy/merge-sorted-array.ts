// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let insertPos = nums1.length - 1;

  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] <= nums2[p2]) {
      nums1[insertPos] = nums2[p2];
      p2--;
    } else if (p1 >= 0) {
      nums1[insertPos] = nums1[p1];
      p1--;
    } else {
      nums1[insertPos] = nums2[p2];
      p2--;
    }
    insertPos--;
  }
}

// Test cases
const nums1_test1 = [1, 2, 3, 0, 0, 0];
merge(nums1_test1, 3, [2, 5, 6], 3);
console.log(nums1_test1); // Expected: [1,2,2,3,5,6]