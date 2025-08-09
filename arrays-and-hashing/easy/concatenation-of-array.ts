// Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {
  const ans = [];

  for (let j = 0; j <= 1; j++) {
    for (let i = 0; i < nums.length; i++) {
      const currentNumber = nums[i];

      ans.push(currentNumber);
    }
  }

  return ans;
}

const nums = [1, 4, 1, 2];

console.log(getConcatenation(nums));
