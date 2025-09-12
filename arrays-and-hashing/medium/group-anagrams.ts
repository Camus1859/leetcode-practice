// Group Anagrams
// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
  const res: { [key: string]: string[] } = {};

  for (const word of strs) {
    const sortedWord = word.split("").sort().join("");

    if (res[sortedWord] === undefined) {
      res[sortedWord] = [word];
    } else {
      res[sortedWord].push(word);
    }
  }

  return Object.values(res);
}

// Test cases
console.log(groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
// Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams([""]));
// Expected: [[""]]

console.log(groupAnagrams(["a"]));
// Expected: [["a"]]
