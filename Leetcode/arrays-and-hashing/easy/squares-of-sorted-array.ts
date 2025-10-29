// Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

function sortedSquares(nums: number[]): number[] {
    let left = 0
    let right = nums.length - 1
    let res: number[] = []

    while(left <= right){

        if(Math.abs(nums[left]) < Math.abs(nums[right]) ){
            res = [nums[right] * nums[right], ...res]
            right--
        }else{
           res =  [nums[left] * nums[left], ...res]
           left++
        }

    }

    return res
}

// Test cases
console.log(sortedSquares([-4,-1,0,3,10])); // Expected: [0,1,9,16,100]
