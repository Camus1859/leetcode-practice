// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p1 = m - 1;
  let p2 = n - 1;
  let write = nums1.length - 1;

  while (p2 >= 0) {
    if (p1 < 0 || nums2[p2] >= nums1[p1]) {
      nums1[write] = nums2[p2];
      p2--;
    } else {
      nums1[write] = nums1[p1];
      p1--;
    }
    write--;
  }
}

const testNums1 = [10, 20, 20, 40, 0, 0];
const testM = 4;
const testNums2 = [1, 2];
const testN = 2;

merge(testNums1, testM, testNums2, testN);
console.log(testNums1);
