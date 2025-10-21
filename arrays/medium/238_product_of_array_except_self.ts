// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {
  let res: number[] = [];
  let product: number = 1;

  const container: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    container.set(i, nums[i]);
  }

  for (let i = 0; i < nums.length; i++) {
    for (const [index, value] of container.entries()) {
      if (index !== i) {
        product = product * value;
      } else {
        continue;
      }
    }
    res.push(product);
    product = 1;
  }

  return res;
}

console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24, 12, 8, 6]
