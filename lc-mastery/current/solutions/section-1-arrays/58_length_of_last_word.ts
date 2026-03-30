/**
 * 58. Length of Last Word
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/length-of-last-word/
 */

function lengthOfLastWord(s: string): number {

    const strToArr = s.split(" ")

    for (let i = strToArr.length - 1; i >= 0; i--) {
        const word = strToArr[i]
        if (word.length) {
            return word.length
        }
    }
    return 0
};

console.log(lengthOfLastWord("Hello World")); // Expected: 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Expected: 4
// console.log(lengthOfLastWord("luffy is still joyboy")); // Expected: 6
