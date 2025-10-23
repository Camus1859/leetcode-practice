// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

function intersect(nums1: number[], nums2: number[]): number[] {
  const nums1Map: Map<number, number> = new Map();
  const nums2Map: Map<number, number> = new Map();
  const res: number[] = [];

  for (const num1 of nums1) {
    if (!nums1Map.has(num1)) {
      nums1Map.set(num1, 1);
    } else {
      const current = nums1Map.get(num1)!;
      nums1Map.set(num1, current + 1);
    }
  }

  for (const num2 of nums2) {
    if (!nums2Map.has(num2)) {
      nums2Map.set(num2, 1);
    } else {
      const current = nums2Map.get(num2)!;
      nums2Map.set(num2, current + 1);
    }
  }

  for (const num1 of nums1) {
    if (nums1Map.get(num1) === nums2Map.get(num1)) {
      res.push(num1);
    }
  }

  return res;
}

// Test cases
console.log(intersect([1, 2, 2, 1], [2, 2])); // Expected: [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // Expected: [4,9] or [9,4]
