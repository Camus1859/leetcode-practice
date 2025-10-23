// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

function lengthOfLastWord(s: string): number {
  let length = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    i--;
    length++;
  }

  return length;
}

console.log(lengthOfLastWord("Hello World")); // Expected: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected: 4
