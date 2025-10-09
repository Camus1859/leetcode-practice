// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
  const containerOne: { [key: string]: string | number } = Object.create(null);
  const containerTwo: { [key: string]: string | number } = Object.create(null);
  let num: number = 0;

  for (let i = 0; i < pattern.length; i++) {
    if (containerOne[pattern[i]] === undefined) {
      containerOne[pattern[i]] = num;
      containerOne["string"] += "-" + num;
      num++;
    } else {
      const numberNeeded = containerOne[pattern[i]];
      containerOne["string"] += "-" + numberNeeded;
    }
  }

  num = 0;

  const sWord = s.split(" ");

  for (let i = 0; i < sWord.length; i++) {
    if (containerTwo[sWord[i]] === undefined) {
      containerTwo[sWord[i]] = num;
      containerTwo["stringTwo"] += "-" + num;
      num++;
    } else {
      const numberNeeded = containerTwo[sWord[i]];
      containerTwo["stringTwo"] += "-" + numberNeeded;
    }
  }

  return containerOne["string"] === containerTwo["stringTwo"];
}

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Expected: true
console.log(wordPattern("abba", "dog cat cat fish")); // Expected: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Expected: false
