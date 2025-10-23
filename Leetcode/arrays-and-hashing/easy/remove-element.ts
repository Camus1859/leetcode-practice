// Remove Element
// https://leetcode.com/problems/remove-element/

const removeElement = (nums: number[], val: number): number => {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  return counter
};

const nums = [3, 2, 2, 3];
const val = 3;

console.log(removeElement(nums, val));
