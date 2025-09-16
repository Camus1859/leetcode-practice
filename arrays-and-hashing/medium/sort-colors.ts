// Sort Colors
// https://leetcode.com/problems/sort-colors/

function sortColors(nums: number[]): void {
  const bucket: { [key: string]: number } = {};
  let counter: number = 0;

  for (let num of nums) {
    if (bucket[num] === undefined) {
      bucket[num] = 1;
    } else {
      bucket[num] += 1;
    }
  }

  for (let key in bucket) {
    for (let i = 0; i < bucket[key]; i++) {
      nums[counter] = Number(key);
      counter++;
    }
  }
}

// Test cases
// const nums1 = [2,0,2,1,1,0];
sortColors([2, 0, 2, 1, 1, 0]);
console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Expected: [0,0,1,1,2,2]

