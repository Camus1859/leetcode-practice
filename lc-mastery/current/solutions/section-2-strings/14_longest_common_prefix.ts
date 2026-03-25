/**
 * 14. Longest Common Prefix
 * Link: https://leetcode.com/problems/longest-common-prefix/
 */

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let output = "";
  const word = strs[0];
  for (let i = 0; i < word.length; i++) {
    let character = word[i];

    const hasMatch = strs.every((word) => word[i] === character);

    if (hasMatch) {
      output += character;
    } else {
      return output;
    }
  }
  return output;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Expected: "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])); // Expected: ""
// console.log(longestCommonPrefix(["ab", "a"])); // Expected: "a"
