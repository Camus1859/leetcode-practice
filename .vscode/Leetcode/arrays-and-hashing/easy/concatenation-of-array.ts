// Concatenation of Array
// https://leetcode.com/problems/concatenation-of-array/

function getConcatenation(nums: number[]): number[] {

const length = nums.length

const arrAns = new Array(length * 2)

for(let i = 0; i < length; i++){

  arrAns[i] = nums[i]
  arrAns[i + length] = nums[i]

}

return arrAns

  
}

console.log(getConcatenation([1, 5, 10, 20]));