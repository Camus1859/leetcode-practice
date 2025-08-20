function mostFrequentChar(s: string): string {
  const container: { [key: string]: number } = {};
  let mostFrequentLetter = "";
  let letterCount = 0;


  for (let i = 0; i < s.length; i++) {
    if (container[s[i]] === undefined) {
      container[s[i]] = 1;
    } else {
      container[s[i]] += 1;
    }
  }

  for (let char of s) {
    if (container[char] > letterCount) {
      letterCount = container[char];
      mostFrequentLetter = char;

    }
  }

  return mostFrequentLetter;
}

// Test case
const str = "potato";
console.log(mostFrequentChar(str)); // Expected: 'e'
