// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {

    const letterToWord = new Map<string, string>()
    const wordToLetter= new Map<string, string>()

    const words = s.split(" ")

    if (pattern.length !== words.length) return false

    for (let i = 0; i < words.length; i++) {

        if (wordToLetter.has(words[i]) && pattern[i] !== wordToLetter.get(words[i])) return false
        if (letterToWord.has(pattern[i]) && words[i] !== letterToWord.get(pattern[i])) return false

        letterToWord.set(pattern[i], words[i])
        wordToLetter.set(words[i], pattern[i])
    }
return true
};

// Test cases
console.log(wordPattern("abba", "dog cat cat dog")); // Expected: true
console.log(wordPattern("abba", "dog cat cat fish")); // Expected: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Expected: false
