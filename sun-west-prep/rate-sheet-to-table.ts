// Rate Sheet to HTML Table (Transposed)

//        | 10  | 20  |  30 |
//  ------|-----|-----|-----|
//  5.0   | 100 |  99 |  98 |
//  5.5   | 101 | 100 |  99 |
//  6.0   | 102 | 101 | 100 |
//
// Your function should return the HTML as a single string.

const rateData =
  "5.0, 100, 5.5, 101, 6.0, 102:L10;5.0, 99, 5.5, 100, 6.0, 101:L20;5.0, 98, 5.5, 99, 6.0, 100:L30";

const createData = (rateData: string): string => {
  const table = rateData.split(";").map((s) => s.split(":"));
  const rowOne = table.map((row) => row[1].split("L")[1]);
  const rates = table[0][0].split(",").filter((_, i) => i % 2 === 0);
  const tableRow = table.map((t) =>
    t[0].split(",").filter((_, i) => i % 2 !== 0),
  );

  const transpose = rates.map((rate, i) => {
    const row = tableRow.map((r) => r[i]);
    return [rate, ...row];
  });

  const th = rowOne.map((th) => `<th>${th}</th>`).join("");
  const tr = transpose
    .map((tr) => {
      const td = tr.map((td) => `<td>${td.trim()}</td>`).join("");
      return `<tr>${td}</tr>`;
    })
    .join("");

  return `<table>
  <thead>
  <tr>
  <th></th>
   ${th}
  </tr>
  </thead>
  <tbody>
  ${tr}
  </tbody>
  </table>`;
};

console.log(createData(rateData));
