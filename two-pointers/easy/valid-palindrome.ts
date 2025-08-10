// Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

function isPalindrome(s: string): boolean {
  let cleanStr = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase();

    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      cleanStr += char;
    }
  }

  let startPos = 0;
  let endPos = cleanStr.length - 1;
  const stopPos = Math.min(cleanStr.length / 2);

  for (let i = 0; i < stopPos; i++) {
    if (cleanStr[startPos] != cleanStr[endPos]) {
      return false;
    } else {
      startPos++;
      endPos--;
    }
  }
  return true;
}

const testSx = "Was it a car or a cat I saw?";

console.log(isPalindrome(testSx));
