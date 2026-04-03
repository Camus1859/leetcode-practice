/**
 * VARIATION 10: String → Grouped HTML Table
 *
 * Given a string with a category column, parse it and build an HTML table
 * where rows are grouped under category headers that span all columns.
 *
 * Input:  "Fixed,30yr,6.500,101.25;Fixed,15yr,5.750,100.50;ARM,5/1,5.250,99.75;ARM,7/1,5.500,100.00"
 *
 * Records are separated by ";", fields by ",". The first field is the category.
 * Build an HTML table with a header row (Category, Term, Rate, Price),
 * group rows by category with a spanning header when the category changes,
 * and show body rows with the remaining fields.
 */

function groupedHtmlTable(str: string): string {
  const arrStr = str.split(";").map((s) => s.split(","));

  

  const tr = arrStr
    .map((arr) => {
      return `<tr>
        ${arr
          .map((r, i) => {
            return `
            <td>
          ${r}
            </td>
            `;
          })
          .join("")}
        </tr>`;
    })
    .join("");

  return `
  <Table> 
    <thead>
     <tr>
      <th>Category</th>
      <th>Term</th>
      <th>Rate</th>
      <th>Price</th>
     </tr>
   </thead>
   <tbody>
    ${tr}
   </tbody>
  <Table>`;
}

console.log(
  groupedHtmlTable(
    "Fixed,30yr,6.500,101.25;Fixed,15yr,5.750,100.50;ARM,5/1,5.250,99.75;ARM,7/1,5.500,100.00",
  ),
);
