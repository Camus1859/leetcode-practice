// Majority Element
// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
  let largestNumber = 0;
  let num = 0;

  const container: { [key: string]: number } = {};

  for (let number of nums) {
    if (container[number] !== undefined) {
      container[number] += 1;
    } else {
      container[number] = 1;
    }
  }

  for (let key in container) {
    if (container[key] > largestNumber) {
      largestNumber = container[key];
      num = Number(key);
    }
  }

  return num;
}

// Test cases
const nums11 = [3, 2, 3];
console.log(majorityElement(nums11)); // Expected: 3

// const nums2 = [2, 2, 1, 1, 1, 2, 2];
// console.log(majorityElement(nums2)); // Expected: 2
