// Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/

function mergeAlternately(word1: string, word2: string): string {
  const combinedWordsLength = word1.length + word2.length;

  let res = "";

  for (let i = 0; i < combinedWordsLength; i++) {
    let letterInFirstWord = word1[i] || "";

    res += letterInFirstWord;

    let letterInSecondWord = word2[i] || "";
    res += letterInSecondWord;
  }

  return res;
}

const testWord1 = "a";
const testWord2 = "xyz";

console.log(mergeAlternately(testWord1, testWord2));
