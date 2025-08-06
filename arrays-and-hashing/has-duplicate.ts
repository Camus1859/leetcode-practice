// Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

function hasDuplicate(nums: number[]): boolean {
  for (let i = 0; i < nums.length; i++) {
    const outerLoopCurrentNumber = nums[i];

    for (let j = 0; j < nums.length; j++) {
      const innerLoopCurrentNumber = nums[j];

      if (outerLoopCurrentNumber === innerLoopCurrentNumber && i !== j) {
        return true;
      }
    }
  }

  return false;
}

const numss = [1, 2, 3, 1];

console.log(hasDuplicate(numss));
