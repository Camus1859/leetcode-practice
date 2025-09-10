// Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

function hasDuplicate(nums: number[]): boolean {

      const container = new Map<number, number>();

      for (let i = 0; i < nums.length; i++) {
        const currentValue = nums[i];

        if (container.has(currentValue)) {
          return true;
        } else {
          container.set(currentValue, i);
        }
      }
      return false;
  
}

//  use new Set since I dont care for the value in the key value relationship