// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
    let res: number[] = [];
    let product: number = 1;

    for (let i = 0; i < nums.length; i++) {
      for (const index in nums) {
        if (Number(index) !== i) {
          product = product * nums[Number(index)];
        }
      }
      res.push(product);
      product = 1;
    }

    return res;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24, 12, 8, 6]
