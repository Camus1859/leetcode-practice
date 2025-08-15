// Group Anagrams
// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
//   const sortedStrs = strs.map((str) => str.split("").sort().join(""));

  // [ 'aet', 'aet', 'ant', 'aet', 'ant', 'abt' ]

  // loop through the sorted array and check if the current sorted string already exist as a sub array
  // if yes, add the current iteration string to that array
  // if no, create a sub array with that new sorted string

  const outerArr: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    
    const sortedStr = outerArr.filter(
      (innArr) =>
        innArr[0].split("").sort().join("") ===
        strs[i].split("").sort().join("")
    );

    if (sortedStr.length > 0) {
      sortedStr[0].push(strs[i]);
    } else {
      const innerArr: string[] = [];
      innerArr.push(strs[i]);
      outerArr.push(innerArr);
    }
  }

  return outerArr;
}

// Test cases
const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1)); // Expected: [["bat"],["nat","tan"],["ate","eat","tea"]]

// const strs2 = [""];
// console.log(groupAnagrams(strs2)); // Expected: [[""]]

// const strs3 = ["a"];
// console.log(groupAnagrams(strs3)); // Expected: [["a"]]
