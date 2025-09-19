function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  const container = new Map<string, number>();
  let res = 0;

  for (let right = 0; right < s.length; right++) {
    if (container.has(s[right])) {
      const index = container.get(s[right]) || 0;
      left = index + 1 < left ? left : index + 1;
      container.set(s[right], right);
    } else {
      container.set(s[right], right);
    }

    if (right - left + 1 > res) {
      res = right - left + 1;
    }
  }

  return res;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
