// Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let startPosForNums1 = m - 1;
  let startPosForNums2 = nums2.length - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (
      startPosForNums2 >= 0 &&
      (startPosForNums1 < 0 ||
        nums2[startPosForNums2] > nums1[startPosForNums1])
    ) {
      nums1[i] = nums2[startPosForNums2];
      startPosForNums2--;
    } else if (startPosForNums1 >= 0) {
      nums1[i] = nums1[startPosForNums1];
      startPosForNums1--;
    }
  }
}

const testNums1 = [10, 20, 20, 40, 0, 0];
const testM = 4;
const testNums2 = [1, 2];
const testN = 2;

merge(testNums1, testM, testNums2, testN);
console.log(testNums1);
