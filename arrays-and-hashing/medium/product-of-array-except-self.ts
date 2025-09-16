// Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
    let total = 1
    const res = []


    for(let i = 0; i < nums.length; i++){

        for(let j = 0; j < nums.length; j++){

            if(i !== j ){
                total *= nums[j]
            }

            if(j === nums.length - 1){
                res[i] = total
                total = 1
            }

        }

    }

return res


  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); 
// Expected: [24,12,8,6]

// console.log(productExceptSelf([1,2,4,6])); 
// // Expected: [48,24,12,8]

// console.log(productExceptSelf([-1,0,1,2,3])); 
// // Expected: [0,-6,0,0,0]

// console.log(productExceptSelf([-1,1,0,-3,3])); 
// Expected: [0,0,9,0,0]