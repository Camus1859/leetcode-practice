// 760. Find Anagram Mappings
// https://leetcode.com/problems/find-anagram-mappings/

function anagramMappings(nums1: number[], nums2: number[]): number[] {
  const mapContainer1: Map<number, string> = new Map();
  let res: number[] = [];

  for (const index in nums2) {
    mapContainer1.set(nums2[index], index);
  }

  for (const value of nums1) {
    res.push(Number(mapContainer1.get(Number(value))));
  }

  return res;
}

console.log(anagramMappings([12, 28, 46, 32, 50], [50, 12, 32, 46, 28])); // Expected: [1, 4, 3, 2, 0]
console.log(anagramMappings([84, 46], [84, 46])); // Expected: [0, 1]
