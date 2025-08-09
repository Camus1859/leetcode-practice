// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  let results = "";

  for (let i = 0; i < strs[0].length; i++) {
    const currentLetterInFirstWord = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      const currentLetter = strs[j][i];

      if (currentLetterInFirstWord !== currentLetter) {
        return results;
      }
    }

    results += currentLetterInFirstWord;
  }
  return results
}

const strs = ["ney", "nep"];

console.log(longestCommonPrefix(strs));
