// Majority Element II
// https://leetcode.com/problems/majority-element-ii/

function majorityElement(nums: number[]): number[] {
  const n: number = Math.floor(nums.length / 3);
  const res: number[] = [];
  const container: { [key: string]: number } = {};

  for (let number of nums) {
    if (container[number] !== undefined) {
      container[number] += 1;
    } else {
      container[number] = 1;
    }
  }

  for (let key in container) {
    if (container[key] > n) {
      res.push(Number(key));
    }
  }

  return res;
}

// Test cases
console.log(majorityElement([3, 2, 3]));
// Expected: [3]

