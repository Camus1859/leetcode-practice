function reverseSomeChars(s: string, chars: string[]): string {
  const stack: string[] = [];
  const set = new Set<string>(chars);
  let res: string = "";

  for (const char of s) {
    if (set.has(char)) {
      stack.push(char);
    }
  }

  for (const char of s) {
    if (set.has(char)) {
      res += stack.pop();
    } else {
      res += char;
    }
  }

  return res;
}

// Test case
const str = "skateboard";
const chars = ["a", "e", "i", "o", "u"];
console.log(reverseSomeChars(str, chars)); // Expected: "skatobeard"
