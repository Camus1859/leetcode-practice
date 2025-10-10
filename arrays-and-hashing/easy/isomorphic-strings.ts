// 205. Isomorphic Strings
// https://leetcode.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
  const sString = new Map<string, string>();
  const tString = new Map<string, string>();

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    if (sString.has(s[i]) && sString.get(s[i]) !== t[i]) return false;
    if (tString.has(t[i]) && tString.get(t[i]) !== s[i]) return false;

    sString.set(s[i], t[i]);
    tString.set(t[i], s[i]);
  }
  return true;
}

// Test cases
console.log(isIsomorphic("egg", "add")); // Expected: true
// console.log(isIsomorphic("foo", "bar")); // Expected: false
// console.log(isIsomorphic("paper", "title")); // Expected: true

// e, a
// e, a - g, d
// e, a - g, d - g

//a, e
//a, e, - d, g
//a, e - d, g
