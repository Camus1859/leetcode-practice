// Valid Anagram
// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {
  const holdLetters: { [key: string]: number } = {};

  if (s.length !== t.length) return false;

  for (const letter of s) {
    if (holdLetters[letter] === undefined) {
      holdLetters[letter] = 1;
    } else {
      holdLetters[letter] += 1;
    }
  }

  for (const letter of t) {
    if (holdLetters[letter] !== undefined && holdLetters[letter] >= 1) {
      holdLetters[letter] -= 1;
    } else {
      return false;
    }
  }
  console.log(holdLetters);

  return true;
}

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
