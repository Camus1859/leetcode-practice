/**
 * 27. Remove Element
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/remove-element/
 */

function removeElement(nums: number[], val: number): number {

    let insertPos = 0

    for (let readPos = 0; readPos < nums.length; readPos++) {

        if (nums[readPos] !== val) {
            nums[insertPos] = nums[readPos]
            insertPos++
        }
    }

    return insertPos
};

console.log(removeElement([3, 2, 2, 3], 3)); // Expected: 2, nums = [2,2,_,_]
// console.log(removeElement([0,1,2,2,3,0,4,2], 2)); // Expected: 5, nums = [0,1,4,0,3,_,_,_]
