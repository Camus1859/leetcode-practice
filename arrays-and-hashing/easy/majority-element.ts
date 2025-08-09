// Majority Element
// https://leetcode.com/problems/majority-element/

function majorityElement(nums: number[]): number {
  const container: { [key: number]: number } = {};
  let mostCommonNumber: number = 0;
  let highestCount: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (container[nums[i]] === undefined) {
      container[nums[i]] = 1;
    } else {
      container[nums[i]] += 1;
    }
  }

  for (let key in container) {
    if (container[key] > highestCount) {
      mostCommonNumber = Number(key);
      highestCount = container[key];
    }
  }
  return mostCommonNumber;
}

const testNums = [9, 9, 8];

console.log(majorityElement(testNums));
