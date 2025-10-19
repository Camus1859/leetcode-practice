// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/

const intersections = (nums1: number[], nums2: number[]): number[] => {
  const container: Set<number> = new Set();
  const res: Set<number> = new Set();

  for (const num1 of nums1) {
    container.add(num1);
  }

  for (const num2 of nums2) {
    if (container.has(num2)) {
      res.add(num2);
    }
  }
  return [...res];
}

// Test cases
console.log(intersections([1, 2, 2, 1], [2, 2])); // Expected: [2]
