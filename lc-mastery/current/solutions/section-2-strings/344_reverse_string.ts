/**
 * 344. Reverse String
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/reverse-string/
 */

function reverseString(s: string[]): void {
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer < rightPointer) {
    const holdLeftChar = s[leftPointer];
    const holdRightChar = s[rightPointer];

    s[leftPointer] = holdRightChar;
    s[rightPointer] = holdLeftChar;
    leftPointer++;
    rightPointer--;
  }
}    

const test1 = ["h", "e", "l", "l", "o"];
reverseString(test1);
console.log(test1); // Expected: ["o", "l", "l", "e", "h"]
// const test2 = ["H", "a", "n", "n", "a", "h"];
// reverseString(test2);
// console.log(test2); // Expected: ["h", "a", "n", "n", "a", "H"]
