/**
 * PRACTICE 3: Fixed-Width String with Header Row
 *
 * Given a fixed-width string where the first row is the header,
 * parse it into a matrix using the given column widths.
 * Trim whitespace from each cell.
 *
 * Input:
 *   str = "Name      Age City  Alice     30  DenverBob       25  AustinCarol     35  Miami "
 *   widths = [10, 4, 6]
 *
 * The first "row" worth of data is the header: "Name      Age City  "
 * Then each subsequent row is data.
 */
const cutStr = (str: string, distanceToCut: number) => {
  let modifiedChars: string | string[] = str.split("");
  let extractedChars: string | string[] = modifiedChars.splice(0, distanceToCut);

  extractedChars = extractedChars.join("").trim()
  modifiedChars = modifiedChars.join("");

  return { modifiedChars, extractedChars };
};

function fixedWidthWithHeader(str: string, widths: number[]): string[][] {
  let count: number = 0;
  let arr: string[] = []
  let finalArr: string[][] = []
  while (str.length) {
    const { modifiedChars, extractedChars } = cutStr(str, widths[count]);
    arr.push(extractedChars);

    str = modifiedChars;
    count++;

    if (count === 3) {
      finalArr.push(arr)
      arr = []
      count = 0;
    }
  }
  return finalArr;
}

console.log(
  fixedWidthWithHeader(
    "Name      Age City  Alice     30  DenverBob       25  AustinCarol     35  Miami ",
    [10, 4, 6],
  ),
);
