// Apply Operations to an Array
// https://leetcode.com/problems/apply-operations-to-an-array/
function applyOperations(nums: number[]): number[] {
  // let leftPos = 0
  for (let rightPos = 0; rightPos < nums.length; rightPos++) {
    if (rightPos > 0 && nums[rightPos - 1] == nums[rightPos]) {
      nums[rightPos - 1] = nums[rightPos - 1] * 2;
      nums[rightPos] = 0;
    }
  }

  let leftPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[leftPos] === 0 && nums[i] !== 0) {
      nums[leftPos] = nums[i];

      nums[i] = 0;
      leftPos++;
    } else if (nums[leftPos] !== 0) {
      leftPos++;
    }
  }

  return nums;
}

// Test cases
console.log(applyOperations([1, 2, 2, 1, 1, 0])); // Expected: [1, 4, 2, 0, 0, 0]
