// Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/

function validPalindrome(s: string): boolean {
  let startPos = 0;
  let endPos = s.length - 1;

  for (let i = 0; startPos < endPos; i++) {
    if (s[startPos] !== s[endPos]) {
      return (
        isValidPalindrome(s, startPos + 1, endPos) ||
        isValidPalindrome(s, startPos, endPos - 1)
      );
    }
    startPos++;
    endPos--;
  }

  return true;
}

function isValidPalindrome(
  s: string,
  startPos: number,
  endPos: number
): boolean {
  for (let i = 0; startPos < endPos; i++) {
    if (s[startPos] !== s[endPos]) {
      return false;
    }
    startPos++;
    endPos--;
  }
  return true;
}

const testSt = "adbba";

console.log(validPalindrome(testSt));
