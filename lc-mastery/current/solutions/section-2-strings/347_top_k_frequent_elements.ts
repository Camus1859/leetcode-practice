/**
 * 347. Top K Frequent Elements
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/top-k-frequent-elements/
 */

function topKFrequent(nums: number[], k: number): number[] {
  const map: Map<number, number> = new Map();

  for (const number of nums) {
    map.set(number, (map.get(number) ?? 0) + 1);
  }
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((arr) => arr[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Expected: [1, 2]
// console.log(topKFrequent([1], 1)); // Expected: [1]
