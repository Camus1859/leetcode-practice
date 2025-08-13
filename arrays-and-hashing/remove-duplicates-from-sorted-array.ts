// Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = (nums: number[]): number => {
  let leftPos = 1;
  let rightPos = 1;
  let k = 1;
  for (let i = 0; i < nums.length; i++) {
    if (rightPos < nums.length && nums[rightPos] !== nums[rightPos - 1]) {
      nums[leftPos] = nums[rightPos];
      leftPos++;
      k++;
    }
    rightPos++;
  }
  return k;
};

const nums2 = [2, 10, 10, 30, 30, 30, 50];

console.log(removeDuplicates(nums2)); // Expected: 3
