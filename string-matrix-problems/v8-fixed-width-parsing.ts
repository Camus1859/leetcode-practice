/**
 * VARIATION 8: Fixed-Width String → Matrix
 *
 * Legacy systems often store data
 * in fixed-width format — no delimiters, just character positions.
 *
 * Given a string and an array of column widths, parse into a matrix.
 * Trim whitespace from each cell.
 *
 * Input:
 *   str = "Fixed 30  6.500 101.250Fixed 15  5.750 100.500ARM 5/1   5.250  99.750"
 *   widths = [10, 6, 7]
 *
 * Output: [
 *   ["Fixed 30", "6.500", "101.250"],
 *   ["Fixed 15", "5.750", "100.500"],
 *   ["ARM 5/1", "5.250", "99.750"]
 * ]
 */

const spliceStr = (str: string, section: number) => {
  const chars = str.split("");
  const extractedCharsArr = chars.splice(0, section);
  const extractedCharsJoined = extractedCharsArr.join("").trim();

  const leftOverChars = chars.join("");
  return { leftOverChars, extractedCharsJoined };
};

function fixedWidthToMatrix(str: string, widths: number[]): string[][] {
  const output: string[][] = [];

  let count = 0;
  let buildArr = [];
  while (str.length) {
    const { leftOverChars, extractedCharsJoined } = spliceStr(
      str,
      widths[count],
    );
    str = leftOverChars;
    buildArr.push(extractedCharsJoined);
    count++;

    if (count === 3) {
      output.push(buildArr);
      buildArr = [];
      count = 0;
    }
  }
  return output;
}

console.log(
  fixedWidthToMatrix(
    "Fixed 30  6.500 101.250Fixed 15  5.750 100.500ARM 5/1   5.250  99.750",
    [10, 6, 7],
  ),
);
