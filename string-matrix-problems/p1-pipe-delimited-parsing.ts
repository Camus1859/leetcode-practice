/**
 * PRACTICE 1: Pipe-Delimited String → Matrix
 *
 * Given a string where rows are separated by "\n" and columns by "|",
 * parse it into a matrix. Trim whitespace from each cell.
 *
 * Input:
 *   "Name | Age | City\nAlice | 30 | Denver\nBob | 25 | Austin\nCarol | 35 | Miami"
 */

function pipeToMatrix(str: string): string[][] {

  const arr =str.split("\n");
  const arrMatrix = arr.map((a)=>a.split("|"));
  return arrMatrix.map((am)=> am.map((a)=> a.trim()))
}

console.log(
  pipeToMatrix(
    "Name | Age | City\nAlice | 30 | Denver\nBob | 25 | Austin\nCarol | 35 | Miami"
  )
);
