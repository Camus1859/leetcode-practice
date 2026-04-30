// Warmup 1: Pipe-Delimited String to HTML Table
//
// Given a string where rows are separated by "\n" and columns by "|",
// the first row is the header. Trim whitespace from each cell.
// Build an HTML table string.
//
// Input:
//   "Name | Age | City\nAlice | 30 | Denver\nBob | 25 | Austin\nCarol | 35 | Miami"
//
// What the table looks like:
//
//  +-------+-----+--------+
//  | Name  | Age | City   |
//  +-------+-----+--------+
//  | Alice | 30  | Denver |
//  | Bob   | 25  | Austin |
//  | Carol | 35  | Miami  |
//  +-------+-----+--------+
//
// Expected output:

const input1 =
  "Name | Age | City\nAlice | 30 | Denver\nBob | 25 | Austin\nCarol | 35 | Miami";

const userTable = (input1: string): string => {
  const allRows = input1.split("\n").map((s) => s.split("|"));
  const headerRow = allRows[0];
  const bodyRow = allRows.slice(1);

  const th = headerRow.map((th) => `<th>${th}</th>`).join("");
  const tr = bodyRow
    .map((tr) => {
      const td = tr.map((td) => `<td>${td}</td>`).join("");
      return `<tr>${td}</tr>`;
    })
    .join("");

  return `<table>
     <thead>
      <tr>
        ${th}
      </tr>
     </thead>

     <tbody>
        ${tr}
     </tbody>
    </table>
   `;
};

console.log(userTable(input1));
