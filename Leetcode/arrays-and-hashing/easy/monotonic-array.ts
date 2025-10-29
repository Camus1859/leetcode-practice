// Monotonic Array
// https://leetcode.com/problems/monotonic-array/
function isMonotonic(nums: number[]): boolean {
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      isIncreasing = true;
      if (isDecreasing) {
        return false;
      }
    } else if (nums[i] > nums[i + 1]) {
      isDecreasing = true;
      if (isIncreasing) {
        return false;
      }
    }
  }

  return true;
}

// Test cases
console.log(isMonotonic([1, 2, 2, 3])); // Expected: true
console.log(isMonotonic([6, 5, 4, 4])); // Expected: true
console.log(isMonotonic([1, 3, 2])); // Expected: false
