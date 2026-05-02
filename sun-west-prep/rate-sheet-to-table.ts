// Rate Sheet to HTML Table (Transposed)
//

//
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
  const label = rateData
    .split(";")
    .map((s) => s.split(":"))
    .map((s) => s[1].split("L")[1]);

  const columnOne = table[0][0].split(",").filter((_, i) => i % 2 === 0);

  const tableRow = table.map((t) => {
    const row = t[0].split(",").filter((_, i) => i % 2 !== 0);
    return row;
  });

  const th = label.map((th) => `<th>${th}</th>`);

  const outerArr = [];
  let innerArr = [];
  let counter = 0;

  while (counter < tableRow[0].length) {
    for (const arr of tableRow) {
      innerArr.push(arr[counter]);

      if (innerArr.length === tableRow.length) {
        outerArr.push(innerArr);
        counter++;
        innerArr = [];
      }
    }
  }

  for (let i = 0; i < tableRow.length; i++) {
    const value = columnOne[i];
    outerArr[i].unshift(value);
  }

  const tr = outerArr.map((tr)=> {
    const td = tr.map((td)=> `<td>${td}</td>`)
    return `<tr>${td}</tr>`
  })

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

createData(rateData);
