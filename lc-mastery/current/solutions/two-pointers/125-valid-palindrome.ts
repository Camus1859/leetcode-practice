// 125. Valid Palindrome
//
// Given a string s, return true if it is a palindrome after:
//   - Converting all uppercase letters to lowercase
//   - Removing all non-alphanumeric characters (only letters and numbers remain)
//
// Example 1:
//   Input:  "A man, a plan, a canal: Panama"
//   Output: true
//   Explanation: after cleanup → "amanaplanacanalpanama" → reads same forwards and backwards
//
// Example 2:
//   Input:  "race a car"
//   Output: false
//   Explanation: after cleanup → "raceacar" → not a palindrome
//
// Example 3:
//   Input:  " "
//   Output: true
//   Explanation: after cleanup → "" → empty string is a palindrome

function isPalindrome(s: string): boolean {
  let left = 0;
  let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true
console.log(isPalindrome("0P")); // false
