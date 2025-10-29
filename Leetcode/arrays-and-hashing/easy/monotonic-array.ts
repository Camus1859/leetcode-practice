// Monotonic Array
// https://leetcode.com/problems/monotonic-array/

function isMonotonic(nums: number[]): boolean {

    let isAlwaysGreater
    let isAlwaysLesser

    for (let i = 0; i <= nums.length - 2; i++) {

        const currNum = nums[i]
        const adjacentNum = nums[i + 1]

        if (currNum < adjacentNum) {
            isAlwaysLesser = true
        } else if (currNum > adjacentNum) {
            isAlwaysGreater = true
        } else {
            continue
        }

        if (isAlwaysGreater && currNum < adjacentNum) {
            return false
        }

        if (isAlwaysLesser && currNum > adjacentNum) {
            return false
        }


    }
    return true
}

// Test cases
console.log(isMonotonic([1,2,2,3])); // Expected: true
console.log(isMonotonic([6,5,4,4])); // Expected: true
console.log(isMonotonic([1,3,2])); // Expected: false
