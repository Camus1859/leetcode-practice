// 412. Fizz Buzz
// https://leetcode.com/problems/fizz-buzz/

function fizzBuzz(n: number): string[] {
  let res: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i.toString());
    }
  }
  return res;
}

console.log(fizzBuzz(3)); // Expected: ["1","2","Fizz"]
