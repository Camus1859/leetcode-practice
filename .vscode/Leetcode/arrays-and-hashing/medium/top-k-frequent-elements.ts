// Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
  const container: { [key: string]: number } = {};
  const res: number[] = [];

  for (const number of nums) {
    if (container[number] === undefined) {
      container[number] = 1;
    } else {
      container[number] += 1;
    }
  }

const values = Object.values(container)
  .sort((a, b) => a - b)
  .slice(-k);

  for (let i = 0; i < values.length; i++) {
    for (const key in container) {
      if (container[key] === values[i]) {
        if (res.includes(Number(key))) {
          continue;
        }
        res.push(Number(key));
      }
    }
  }

  return res;
}

// Test cases
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
// Expected: [1,2]

// console.log(topKFrequent([1,2,2,3,3,3], 2));
// // Expected: [2,3] or [3,2]

// console.log(topKFrequent([7,7], 1));
// // Expected: [7]

// console.log(topKFrequent([1], 1));
// // Expected: [1]

// console.log(topKFrequent([3,0,1,0], 1));
// // Expected: [0]
