/**
 * PRACTICE 4: Semicolon String → HTML Table
 *
 * Given a string where rows are separated by ";" and columns by ",",
 * the first row is the header. Build an HTML table string from it.
 *
 * Input:
 *   "Name,Age,City;Alice,30,Denver;Bob,25,Austin;Carol,35,Miami"
 */

function toHtmlTable(str: string): string {
  const matrix = str.split(";").map((s) => s.split(","));
  const th = matrix[0]
    .map((c) => {
      return `<th>${c}</th>`;
    })
    .join("");

  const td = matrix
    .slice(1)
    .map((row) => {
      const cells = row.map((s) => `<td>${s}</td>`).join("");
      return `<tr>${cells}</tr>`;
    })
    .join("");

  return `
  <table>
    <thead>
      <tr>
        ${th}
      </tr>
    </thead>
    <tbody>
    ${td}
    </tbody>
  </table>`;
}

console.log(
  toHtmlTable("Name,Age,City;Alice,30,Denver;Bob,25,Austin;Carol,35,Miami"),
);
