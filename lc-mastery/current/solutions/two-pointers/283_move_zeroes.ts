/**
 * 283. Move Zeroes
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/move-zeroes/
 */

function moveZeroes(nums: number[]): void {
  let insert = 0;
  for (let read = 0; read <= nums.length - 1; read++) {
    if (nums[read] !== 0) {
      const saveNum = nums[insert];
      nums[insert] = nums[read];
      nums[read] = saveNum;
      insert++;
    }
  }
}

// ============================================
// TEST CASES
// ============================================

const test1 = [0, 1, 0, 3, 12];
moveZeroes(test1);
console.log(test1); // Expected: [1, 3, 12, 0, 0]

const test2 = [0];
moveZeroes(test2);
console.log(test2); // Expected: [0]
