// 243. Shortest Word Distance
// https://leetcode.com/problems/shortest-word-distance/

function shortestDistance(
  wordsDict: string[],
  word1: string,
  word2: string
): number {
  let index1 = null;
  let index2 = null;
  let previousLowestDistance = Infinity;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] === word1) {
      index1 = i;
    }

    if (wordsDict[i] === word2) {
      index2 = i;
    }

    if (index1 !== null && index2 !== null) {
      if (Math.abs(index1 - index2) < previousLowestDistance) {
        previousLowestDistance = Math.abs(index1 - index2);
      }
    }
  }

  return previousLowestDistance;
}

// Test cases
// console.log(
//   shortestDistance(
//     ["practice", "makes", "perfect", "coding", "makes"],
//     "coding",
//     "practice"
//   )
// ); // Expected: 3
console.log(
  shortestDistance(
    ["practice", "makes", "perfect", "coding", "makes"],
    "makes",
    "coding"
  )
); // Expected: 1
