/**
 * VARIATION 9: Parse String → Matrix → Transpose
 *
 * Given a CSV string, parse it into a matrix, then transpose it
 * (rows become columns, columns become rows).
 *
 * Input:  "Product,Fixed 30,Fixed 15,ARM 5/1\nRate,6.5,5.75,5.25\nPrice,101.25,100.50,99.75"
 *
 * Parsed: [
 *   ["Product", "Fixed 30", "Fixed 15", "ARM 5/1"],
 *   ["Rate",    "6.5",      "5.75",     "5.25"],
 *   ["Price",   "101.25",   "100.50",   "99.75"]
 * ]
 *
 * Transposed: [
 *   ["Product",  "Rate",   "Price"],
 *   ["Fixed 30", "6.5",    "101.25"],
 *   ["Fixed 15", "5.75",   "100.50"],
 *   ["ARM 5/1",  "5.25",   "99.75"]
 * ]
 */

function parseAndTranspose(str: string): string[][] {
  console.log(str.split("\n").map((s) => s.split(",")));
  const parsed = str.split("\n").map((s) => s.split(","));

  const transposed: string[][] = [];

  for (let col = 0; col < parsed[0].length; col++) {
    const row: string[] = [];

    for (let r = 0; r < parsed.length; r++) {
      row.push(parsed[r][col]);
    }
    transposed.push(row)
  }
  return transposed
}

parseAndTranspose(
  "Product,Fixed 30,Fixed 15,ARM 5/1\nRate,6.5,5.75,5.25\nPrice,101.25,100.50,99.75",
);
