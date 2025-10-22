// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

function findDisappearedNumber(nums: number[]): number[] {

    const setCounter: Set<number> = new Set()
    let counter = 1
    const res: number[] = []

    for (const num of nums) {
        setCounter.add(num)
    }

    for (const num of nums) {
        if (setCounter.has(counter)) {
            counter++
        } else {
            res.push(counter)
            counter++
        }

    }

    return res
};

console.log(findDisappearedNumber([4, 3, 2, 7, 8, 2, 3, 1])); // Expected: [5, 6]
console.log(findDisappearedNumber([1, 1])); // Expected: [2]
