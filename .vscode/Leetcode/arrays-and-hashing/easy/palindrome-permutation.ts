// 266. Palindrome Permutation
// https://leetcode.com/problems/palindrome-permutation/

function canPermutePalindrome(s: string): boolean {
  const container: { [key: string]: number } = {};

  const isLengthIsEven = s.length % 2 === 0;

  if (isLengthIsEven) {
    for (let char of s) {
      if (container[char] === undefined) {
        container[char] = 1;
      } else {
        container[char] += 1;
      }
    }

    return Object.values(container).every((char) => char % 2 === 0);
  } else {
    for (let char of s) {
      if (container[char] === undefined) {
        container[char] = 1;
      } else {
        container[char] += 1;
      }
    }

    let onlyOneOddOccurrence = 0;

    for (let key in container) {
      if (container[key] % 2 !== 0) {
        onlyOneOddOccurrence++;
      }
    }
    return onlyOneOddOccurrence === 1;
  }
}

// Test cases
// console.log(canPermutePalindrome("code")); // Expected: false
// console.log(canPermutePalindrome("aab")); // Expected: true
console.log(canPermutePalindrome("carerac")); // Expected: true
