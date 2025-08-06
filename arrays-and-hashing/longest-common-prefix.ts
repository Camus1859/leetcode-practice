// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {

  let results = ""


  for(let i = 0; i < strs.length; i++){

    const currentWord = strs[i]
    const currentLetter = currentWord[i]

    


    if (strs.every((str) => str[i] === currentLetter)) {
      results += currentLetter
    }

  }

  return results
 

}

const strs = ["neet", "feet"];

console.log(longestCommonPrefix(strs));