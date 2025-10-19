// 271. Encode and Decode Strings
// https://leetcode.com/problems/encode-and-decode-strings/

function encode(strs: string[]): string {
  let newS = "";

  for (const char of strs) {
    newS += char.length + "#" + char;
  }
  return newS;
}

function decode(s: string): string[] {
  // 5#hello98#moto

  const res = [];
  let i = 0;

  while (i < s.length) {
    let lengthAsString = "";

    while (s[i] !== "#") {
      lengthAsString += s[i];
      i++;
    }

    i++;
    const lengthAsNum = parseInt(lengthAsString);

    let word = "";

    for (let j = 0; j < lengthAsNum; j++) {
      word += s[i];
      i++
    }

    res.push(word)
  }
  return res;
}

// Test cases
console.log(decode(encode(["hello", "world"]))); // Expected: ["hello", "world"]
// console.log(decode(encode([""]))); // Expected: [""]
// console.log(decode(encode(["a", "bc", "def"]))); // Expected: ["a", "bc", "def"]
