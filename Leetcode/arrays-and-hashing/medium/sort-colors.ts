// Sort Colors
// https://leetcode.com/problems/sort-colors/

function sortColors(nums: number[]): void {
  let leftWrite: number = 0;
  let rightWrite: number = nums.length - 1;

  for (let read = 0; read <= rightWrite; read++) {
    if (nums[read] === 0) {
      const savedVal = nums[leftWrite];
      nums[leftWrite] = nums[read];
      leftWrite++;
      nums[read] = savedVal;
    }

    if (nums[read] === 2) {
      const savedVal = nums[rightWrite];
      nums[rightWrite] = nums[read];
      rightWrite--;
      nums[read] = savedVal;
      read--;
    }
  }
}

// Test cases
// const nums1 = [2,0,2,1,1,0];
sortColors([2, 0, 2, 1, 1, 0]);
// console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Expected: [0,0,1,1,2,2]
