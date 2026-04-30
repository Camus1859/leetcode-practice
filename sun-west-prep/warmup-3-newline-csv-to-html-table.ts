// Warmup 3: Employee Report to HTML Table
//
// Given a string where rows are separated by "\n" and each row has
// the format "name:role:salary", build an HTML table.
//
// But here's the twist:
// - The header row is NOT in the data. You must add it yourself: "Employee", "Role", "Salary"
// - Salary values should be formatted with a "$" prefix (e.g. "75000" becomes "$75000")
// - Rows where salary is below 60000 should be excluded from the table
//
// Input:
//   "Alice:Engineer:95000\nBob:Intern:45000\nCarol:Manager:110000\nDave:Support:55000\nEve:Designer:72000"
//
// What the table looks like:
//
//  +----------+----------+---------+
//  | Employee | Role     | Salary  |
//  +----------+----------+---------+
//  | Alice    | Engineer | $95000  |
//  | Carol    | Manager  | $110000 |
//  | Eve      | Designer | $72000  |
//  +----------+----------+---------+
//
// (Bob and Dave are excluded because their salary is below 60000)
//
// Expected output:

const input3 =
  "Alice:Engineer:95000\nBob:Intern:45000\nCarol:Manager:110000\nDave:Support:55000\nEve:Designer:72000";

const createTable = (input3: string): string => {
  const table = input3.split("\n").map((s) => s.split(":"));

  const approvedTable = table.filter((t) => {
    const salary = Number(t[t.length - 1]);
    if (salary < 60000) {
      return false;
    } else {
      return true;
    }
  });

  const tr = approvedTable
    .map((tr) => {
      const td = tr
        .map((td) => {
          if (isNaN(Number(td))) {
            return `<td>${td}</td>`;
          } else {
            return `<td>$${td}</td>`;
          }
        })
        .join("");

      return `<tr>${td}</tr>`;
    })
    .join("");


  return `<table>
    <thead>
      <tr>
        <th>
         Employee
        </th>
        <th>
         Role
        </th>
        <th>
         Salary
        </th>
      </tr>
    </thead>
    <tbody>
     ${tr}
    </tbody>
  </table>
  `;

};

console.log(createTable(input3));
