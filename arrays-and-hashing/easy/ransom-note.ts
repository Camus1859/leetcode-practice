// 383. Ransom Note
// https://leetcode.com/problems/ransom-note/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineMap: Map<string, number> = new Map();

  for (const char of magazine) {
    if (!magazineMap.has(char)) {
      magazineMap.set(char, 1);
    } else {
      const currentNum = magazineMap.get(char)!;
      magazineMap.set(char, currentNum + 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineMap.get(char) === 0) return false;
    if (!magazineMap.has(char)) return false;

    const currentNumber = magazineMap.get(char)!;
    magazineMap.set(char, currentNumber - 1);
  }

  return true;
}

// Test cases
console.log(canConstruct("a", "b")); // Expected: false
console.log(canConstruct("aa", "ab")); // Expected: false
console.log(canConstruct("aa", "aab")); // Expected: true
