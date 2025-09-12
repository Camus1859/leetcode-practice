// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let str: string = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] === strs[j][i]) {
        if (strs.length - 1 === j) {
          str += strs[0][i];
        }
      } else {
        return str;
      }
    }
  }
  return str;
}

// Test cases
console.log(longestCommonPrefix(["cir", "car"])); // Expected: "c"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Expected: ""
// console.log(longestCommonPrefix(["ney", "nep"])); // Expected: "ne"
