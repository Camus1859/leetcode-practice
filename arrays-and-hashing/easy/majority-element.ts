// Majority Element
// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
  const container: { [key: number]: number } = {};
  let majorityElement = 0;

  for (let i = 0; i < nums.length; i++) {
    if (container[nums[i]] !== undefined) {
      container[nums[i]] += 1;
    } else {
      container[nums[i]] = 1;
    }
  }

  for (let key in container) {
  if (container[key] > (container[majorityElement] ?? 0)) {
    majorityElement = Number(key)
  }
  }

  return majorityElement
}

// Test cases
const nums11 = [3, 2, 3];
console.log(majorityElement(nums11)); // Expected: 3

// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums2)); // Expected: 2
