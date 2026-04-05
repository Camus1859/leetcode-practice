/**
 * PRACTICE 2: Parse, Transpose, and Reverse Rows
 *
 * Given a CSV string, parse it into a matrix, transpose it
 * (rows become columns), then reverse the order of the rows.
 *
 * Input:
 *   "City,Austin,Denver,Miami\nTemp,95,85,90\nPop,1000,700,500"
 */

function transposeAndFlip(str: string): string[][] {
  const arr = str.split("\n").map((s) => s.split(","));

  const transposed: string[][] = [];

  for (let col = 0; col < arr[0].length; col++) {
    const newRow: string[] = [];
    for (let row = 0; row < arr.length; row++) {
      newRow.push(arr[row][col]);
    }
    transposed.push(newRow);
  }

  return transposed.reverse();
}

console.log(
  transposeAndFlip("City,Austin,Denver,Miami\nTemp,95,85,90\nPop,1000,700,500"),
);
