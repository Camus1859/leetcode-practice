// 2733. Neither Minimum nor Maximum
// https://leetcode.com/problems/neither-minimum-nor-maximum/

function findNonMinOrMax(nums: number[]): number {
    return nums.length < 3 ? -1 : nums.sort((a, b) => a - b)[1];
}

console.log(findNonMinOrMax([3,2,1,4])); // Expected: 2 (or 3)

