// 724. Find Pivot Index
// https://leetcode.com/problems/find-pivot-index/

export = {};
function pivotIndex(nums: number[]): number {
  let rightTotal = 0;

  for (let i = 1; i < nums.length; i++) {
    rightTotal += nums[i];
  }

  let leftTotal = 0;
  let i = 0;

  while (i < nums.length) {
    if (leftTotal === rightTotal) {
      return i;
    }

    leftTotal += nums[i];
    rightTotal -= nums[i + 1];
    i++;
  }
  return i === nums.length ? -1 : i;
}
const nums1 = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums1)); // Expected: 3

// const nums2 = [1,2,3];
// console.log(pivotIndex(nums2)); // Expected: -1

// const nums3 = [2,1,-1];
// console.log(pivotIndex(nums3)); // Expected: 0
