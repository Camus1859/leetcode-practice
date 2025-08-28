// 66. Plus One
// https://leetcode.com/problems/plus-one/

function plusOne(digits: number[]): number[] {
  let total: any = "";
  let res = [];

  for (let i = 0; i < digits.length; i++) {
    total += digits[i];
  }

  const bigNum = BigInt(total) + 1n;
  total = bigNum.toString();

  for (let i = 0; i < total.length; i++) {
    res.push(Number(total[i]));
  }

  return res;
}

// Test case
const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];
console.log(plusOne(digits)); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
