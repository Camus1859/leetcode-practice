// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

function isValid(s: string): boolean {
  const stack: string[] = [];
  const container: { [key: string]: string } = { "}": "{", "]": "[", ")": "(" };

  for (const char of s) {
    if (char in container) {
      if (container[char] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

// Test case
const s = "[()[ ]{}]";
console.log(isValid("()[ ]{}")); // Expected: true
