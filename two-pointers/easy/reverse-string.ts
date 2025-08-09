// Reverse String
// https://leetcode.com/problems/reverse-string/

function reverseString(s: string[]): string[] {
  let startPos = 0;
  let endPos = s.length - 1;
  const stopLoopPos = Math.floor(s.length / 2);
  let currentStartVal = "";

  for (let i = 0; i < stopLoopPos; i++) {
    currentStartVal = s[i];

    if (startPos === stopLoopPos) {
      return s;
    }

    s[startPos] = s[endPos];
    s[endPos] = currentStartVal;

    startPos++;
    endPos--;
  }
  return s;
}

const testS = ["n", "e", "e", "t"];

console.log(reverseString(testS));
