// Single Number II
// https://leetcode.com/problems/single-number-ii/

function singleNumber(nums: number[]): number {

    let res = 0

    const mapper: Map<number, number> = new Map()

    for (const num of nums) {
        mapper.set(Number(num), (mapper.get(Number(num)) || 0) + 1)
    }

    for (const [k, v] of mapper) {
        if (v === 1) {
            res = k
        }
    }


    return res
};

// Test cases
console.log(singleNumber([2, 2, 3, 2]));
// Expected: 3

console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
// Expected: 99

console.log(singleNumber([1]));
// Expected: 1

console.log(singleNumber([-2, -2, 1, 1, 4, 1, 4, 4, -4, -2]));
// Expected: -4
