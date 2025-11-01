/*
 * 389. Find the Difference
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/find-the-difference/
 */



function findTheDifference(s: string, t: string): string {
  const seen: Map<string, number> = new Map();

  for (const string of s) {
    seen.set(string, (seen.get(string) || 0) + 1);
  }

  for (const string of t) {
    seen.set(string, (seen.get(string) || 0) - 1);
  }

  for (let [key, value] of seen) {
    if (value === -1) {
      return key;
    }
  }
  return ""
}

console.log(findTheDifference("abcd", "abcde")); // Expected: "e"
