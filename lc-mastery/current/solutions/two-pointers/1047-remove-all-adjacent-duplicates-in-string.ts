// 1047. Remove All Adjacent Duplicates In String
//
// Given a string s, repeatedly remove two adjacent equal characters
// until no more removals can be made. Return the final string.
//
// Think of it like the game where matching pairs disappear.
//
// Example 1:
//   Input:  "abbaca"
//   Output: "ca"
//   Explanation: "abbaca" → remove "bb" → "aaca" → remove "aa" → "ca"
//
// Example 2:
//   Input:  "azxxzy"
//   Output: "ay"
//   Explanation: "azxxzy" → remove "xx" → "azzy" → remove "zz" → "ay"
//
// Example 3:
//   Input:  "aababaab"
//   Output: "ba"

function removeDuplicates(s: string): string {
  const arr: string[] = [];

  for (const ch of s) {
    if (arr.length > 0 && arr[arr.length - 1] === ch) {
      arr.pop();
    } else {
      arr.push(ch);
    }
  }

  return arr.join("");
}

// Test cases
console.log(removeDuplicates("abbaca")); // "ca"
console.log(removeDuplicates("azxxzy")); // "ay"
console.log(removeDuplicates("aababaab")); // "ba"
