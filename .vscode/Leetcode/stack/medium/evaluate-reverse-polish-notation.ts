// 150. Evaluate Reverse Polish Notation
// https://leetcode.com/problems/evaluate-reverse-polish-notation/

function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(Number(tokens[i]))) {
      stack.push(Number(tokens[i]));
    } else {
      const latterNum = stack.pop()!;
      const formerNum = stack.pop()!;
      let newNum: number = 0;

      if (tokens[i] === "+") {
        newNum = formerNum + latterNum;
      } else if (tokens[i] === "-") {
        newNum = formerNum - latterNum;
      } else if (tokens[i] === "*") {
        newNum = formerNum * latterNum;
      } else if (tokens[i] === "/") {
newNum = Math.trunc(formerNum / latterNum);
      }

      stack.push(newNum);
    }
  }

  return stack[0];
}

// Test case
const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
console.log(evalRPN(tokens)); // Expected: 22
