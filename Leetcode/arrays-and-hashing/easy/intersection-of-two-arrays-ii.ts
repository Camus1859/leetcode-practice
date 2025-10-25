// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersect(nums1: number[], nums2: number[]): number[] {
  const arrMap: Map<number, number> = new Map();
  const res: number[] = [];

  for (const num1 of nums1) {
    arrMap.set(num1, (arrMap.get(num1) || 0) + 1);
  }

  for (const num2 of nums2) {
    if (arrMap.get(num2)! > 0) {
      res.push(num2);
      arrMap.set(num2, (arrMap.get(num2) || 0) - 1);
    }
  }
  return res;
}

// Test cases
console.log(intersect([1, 2, 2, 1], [2, 2])); // Expected: [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Expected: [4,9] or [9,4]
