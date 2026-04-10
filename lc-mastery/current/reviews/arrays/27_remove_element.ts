/**
 * 27. Remove Element
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/remove-element/
 *
 * REVIEW ATTEMPT - Original solved 2026-03-11
 */


function removeElement(nums: number[], val: number): number {

    let insert = 0

    for(let read = 0; read <= nums.length - 1; read++){

        if(val !== nums[read]){
            const saveNum = nums[insert]
            nums[insert] = nums[read]
            nums[read] = saveNum
            insert++
        }
        
    }
    return insert
};
// ============================================
// TEST CASES
// ============================================

console.log(removeElement([3, 2, 2, 3], 3)); // Expected: 2, nums = [2, 2, ...]
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // Expected: 5, nums = [0, 1, 3, 0, 4, ...]
