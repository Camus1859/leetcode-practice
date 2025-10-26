// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

function productExceptSelf(nums: number[]): number[] {

    const preFix: number[] = [1]
    const suffix: number[] = [1]
    const res: number[] = []

    for (let i = 1; i < nums.length; i++) {
        const newNumToAddPre = preFix[i - 1] * nums[i - 1]
        const newNumToAddSuf = suffix[i - 1] * nums[nums.length - i]
        preFix[i] = newNumToAddPre
        suffix[i] = newNumToAddSuf
    }

    const length = preFix.length - 1

    for (let i = 0; i < preFix.length; i++) {
        res[i] = preFix[i] * suffix[length - i]
    }
    return res
};


console.log(productExceptSelf([1, 2, 3, 4])); // Expected: [24, 12, 8, 6]
