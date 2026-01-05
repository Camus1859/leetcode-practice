// Session 32 (Day 9, Session 2)
// Level: Beginner (Sessions 31-40: Near-intermediate patterns)
// Date: 2026-01-04
// Reinforcing: split, join, trim, toLowerCase

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const csvData = [
  "id,name,department,salary",
  "101,Alice,Engineering,95000",
  "102,Bob,Marketing,72000",
  "103,Carol,Engineering,88000",
  "104,Dan,Sales,65000",
  "105,Eva,Engineering,102000",
];

const parseCSV = (csvData: string[]) => {
  return csvData
    .filter((csv) => csv.includes("Engineering"))
    .map((csv) => {
      const name = csv.split(",")[1];
      const salary = Number(csv.split(",")[3]);

      return { name, salary };
    });
};

console.log(parseCSV(csvData));

// Task: Parse this CSV data (first row is headers, rest are data rows).
// Return only Engineering employees as objects with name and salary.
// Salary should be a number, not a string.
//
// Expected output:
// [
//   { name: "Alice", salary: 95000 },
//   { name: "Carol", salary: 88000 },
//   { name: "Eva", salary: 102000 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const inventory = [
  { sku: "A100", name: "Widget", qty: 5, reorderAt: 10 },
  { sku: "B200", name: "Gadget", qty: 25, reorderAt: 15 },
  { sku: "C300", name: "Gizmo", qty: 3, reorderAt: 5 },
  { sku: "D400", name: "Thingamajig", qty: 0, reorderAt: 8 },
  { sku: "E500", name: "Doohickey", qty: 12, reorderAt: 10 },
];

type InventoryType = {
  sku: string;
  name: string;
  qty: number;
  reorderAt: number;
};

// Task: Generate reorder alerts for items where qty is at or below reorderAt.
//
// Return an array of formatted strings: "REORDER: [sku] - [name] (only [qty] left)"
// Use uppercase for "REORDER" and the sku.
//
// Expected output:
// [
//   "REORDER: A100 - Widget (only 5 left)",
//   "REORDER: C300 - Gizmo (only 3 left)",
//   "REORDER: D400 - Thingamajig (only 0 left)",
//   "REORDER: E500 - Doohickey (only 12 left)"
// ]

const generateOrder = (inventory: InventoryType[]): string[] => {
  return inventory
    .filter((i) => i.qty <= i.reorderAt)
    .map((i) => {
      const total = i.qty;
      return `REORDER: ${i.sku} - ${i.name} (only ${total} left)`;
    });
};

console.log(generateOrder(inventory));

// ============================================================
// PROBLEM 3
// ============================================================

const orders = [
  { orderId: "ORD-001", items: ["apple", "banana", "orange"] },
  { orderId: "ORD-002", items: ["milk"] },
  { orderId: "ORD-003", items: ["bread", "butter"] },
  { orderId: "ORD-004", items: ["apple", "milk", "bread", "cheese"] },
];

type OrdersType = {
  orderId: string;
  items: string[];
};

const summary = (orders: OrdersType[]): string[] => {
  return orders.map((o) => {
    const id = o.orderId;
    const numberOfItems = o.items.length;
    const str = o.items.join(", ");
    const spaceOrS = numberOfItems > 1 ? "s" : "";

    return `${id}: ${numberOfItems} item${spaceOrS} - ${str}`;
  });
};

console.log(summary(orders));

// Task: Create a summary for each order.
//
// Format: "[orderId]: [item count] item(s) - [items joined by comma-space]"
// Use "item" for 1 item, "items" for multiple.
//
// Expected output:
// [
//   "ORD-001: 3 items - apple, banana, orange",
//   "ORD-002: 1 item - milk",
//   "ORD-003: 2 items - bread, butter",
//   "ORD-004: 4 items - apple, milk, bread, cheese"
// ]
