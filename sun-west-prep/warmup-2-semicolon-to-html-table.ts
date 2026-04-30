// Input:
//   "Name,Age,City;Alice,30,Denver;Bob,25,Austin;Carol,35,Miami"
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

const input2 = "Name,Age,City;Alice,30,Denver;Bob,25,Austin;Carol,35,Miami";

const createTable = (input2: string): string => {
  const table = input2.split(";").map((s) => s.split(","));
  const headerRow = table[0];
  const tableBody = table.slice(1);
  const th = headerRow.map((th) => `<th>${th}</th>`).join("");
  const tr = tableBody
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
    </table>`;
};

console.log(createTable(input2));
