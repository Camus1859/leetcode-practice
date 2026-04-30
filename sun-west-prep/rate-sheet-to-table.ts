const rateData =
  "5.0, 100, 5.5, 101, 6.0, 102:L10;5.0, 99, 5.5, 100, 6.0, 101:L20;5.0, 98, 5.5, 99, 6.0, 100:L30";

// The data represents this table:
//
//        | 5.0 | 5.5 | 6.0 |
//  ------|-----|-----|-----|
//  L10   | 100 | 101 | 102 |
//  L20   |  99 | 100 | 101 |
//  L30   |  98 |  99 | 100 |
//

// Your function should return the HTML as a single string (no extra whitespace needed).

const createTable = (rawData: string): string => {
  const table = rawData.split(";").map((s) => s.split(":"));
  const numbers = table[0][0].split(",").map((s) => s.trim());
  const rowHeader = numbers.filter((_, i) => i % 2 === 0);

  const rowBody = table.map((t) => {
    const cells = t[0].split(",").map((s) => s.trim());
    const prices = cells.filter((_, i) => i % 2 !== 0);
    return [t[1], ...prices];
  });

  const th = rowHeader.map((th) => `<th>${th}</th>`).join("");
  const tr = rowBody
    .map((tr) => {
      const td = tr.map((td) => `<td>${td}</td>`).join("");
      return `<tr>${td}</tr>`;
    })
    .join("");

  return `
  <table>
    <thead>
     <tr>
     <th></th>
     ${th}
     </tr>
    </thead>
    <tbody>
      ${tr}
    </tbody>
  </table>
  `;
};

createTable(rateData);
