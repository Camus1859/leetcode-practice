/**
 * 49. Group Anagrams
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/group-anagrams/
 */

function groupAnagrams(strs: string[]): string[][] {
  const obj: { [key: string]: string[] } = {};

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");

    if (obj[sortedWord] === undefined) {
      obj[sortedWord] = [];
    }
    obj[sortedWord].push(word);
  }
  return Object.values(obj);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]
// console.log(groupAnagrams([""])); // Expected: [[""]]
// console.log(groupAnagrams(["a"])); // Expected: [["a"]]
