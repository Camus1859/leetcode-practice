// Group Anagrams
// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {

  const sortedStrAsKey: { [key: string]: string[] } = {};
  const outerArr: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join(""); 

    if (sortedStrAsKey[sortedStr] === undefined) {
      sortedStrAsKey[sortedStr] = [];
      sortedStrAsKey[sortedStr].push(strs[i]);
    } else {
      sortedStrAsKey[sortedStr].push(strs[i]);
    }
  }

  for (let key in sortedStrAsKey) {
    outerArr.push(sortedStrAsKey[key]);
  }

  return outerArr;
}

// Test cases
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];

// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(strs1));
