/**
 * VARIATION 11: Whitespace-Aligned String → Matrix
 *
 * Given a string that looks like terminal/report output with columns
 * aligned by whitespace (2+ spaces separate columns), parse into a matrix.
 * Single spaces within a value are part of the value.
 *
 * Input:
 * "Product        Rate   Price\nFixed 30 Year  6.500  101.250\nFixed 15 Year  5.750  100.500\n5/1 ARM        5.250  99.750"
 *
 * (Visually:)
 * Product        Rate   Price
 * Fixed 30 Year  6.500  101.250
 * Fixed 15 Year  5.750  100.500
 * 5/1 ARM        5.250  99.750
 */

function whitespaceColumnsToMatrix(str: string): string[][] {
  return str.split("\n").map((s) =>
    s
      .split("  ")
      .filter((s) => s.trim())
      .map((s) => s.trim()),
  );
}

console.log(
  whitespaceColumnsToMatrix(
    "Product        Rate   Price\nFixed 30 Year  6.500  101.250\nFixed 15 Year  5.750  100.500\n5/1 ARM        5.250  99.750",
  ),
);
