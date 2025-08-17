// Move Zeroes
// https://leetcode.com/problems/move-zeroes/

function moveZeroes(nums: number[]): void {
  let leftPosToInsert = 0;

  for (let rightPos = 0; rightPos < nums.length; rightPos++) {
    if (nums[rightPos] !== 0) {
      nums[leftPosToInsert] = nums[rightPos];
      leftPosToInsert++;
    }
  }

  for (let i = leftPosToInsert; i < nums.length; i++) {
    nums[i] = 0;
  }
}

// Test cases

moveZeroes([1, 2, 0, 3]);
