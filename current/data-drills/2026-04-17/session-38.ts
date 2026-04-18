
// Session 38
export {};

// ============================================================
// PROBLEM 1
// ============================================================

type FilesType = {
  path: string;
  size: number;
  modified: boolean;
};

const files = [
  { path: "src/components/Header.tsx", size: 2400, modified: false },
  { path: "src/components/Footer.tsx", size: 1800, modified: true },
  { path: "src/utils/format.ts", size: 950, modified: true },
  { path: "src/utils/validate.ts", size: 1200, modified: false },
  { path: "tests/Header.test.tsx", size: 3100, modified: true },
  { path: "tests/Footer.test.tsx", size: 2700, modified: false },
  { path: "src/components/Sidebar.tsx", size: 4200, modified: true },
  { path: "README.md", size: 500, modified: false },
];

const modifyFiles = (files: FilesType[]): string[] => {
  return files
    .filter((file) => file.path.split("/")[0] === "src" && file.modified)
    .map((file) => {
      const fileName = file.path.split("/")[file.path.split("/").length - 1];
      const number = (file.size / 1000).toFixed(1);
      const fileSize = `(${number} KB)`;
      return fileName + " " + fileSize;
    });
};

console.log(modifyFiles(files));

// Task: Get only the modified files whose path starts with "src/",
// then transform each into a string like:
//   "Header.tsx (2.4 KB)"
//
// Extract the filename from the path (the part after the last "/").
// Convert size from bytes to KB by dividing by 1000, rounded to 1 decimal.
//
// Expected output:
// ["Footer.tsx (1.8 KB)", "format.ts (1.0 KB)", "Sidebar.tsx (4.2 KB)"]

// ============================================================
// PROBLEM 2
// ============================================================

type TransactionsType = {
  id: string;
  type: string;
  amount: number;
};

const transactions = [
  { id: "T1", type: "deposit", amount: 500 },
  { id: "T2", type: "withdrawal", amount: 200 },
  { id: "T3", type: "deposit", amount: 150 },
  { id: "T4", type: "withdrawal", amount: 400 },
  { id: "T5", type: "deposit", amount: 100 },
  { id: "T6", type: "withdrawal", amount: 300 },
];

const transactionUpdates = (
  transactions: TransactionsType[],
): { id: string; type: string; amount: number }[] => {
  let amount: number = 0;

  return transactions.map((transaction) => {
    if (transaction.type === "deposit") {
      amount += transaction.amount;
    } else if (transaction.type === "withdrawal") {
      amount -= transaction.amount;
    }
    return {
      id: transaction.id,
      type: transaction.type,
      amount,
    };
  });
};

console.log(transactionUpdates(transactions));

// Task: Process these transactions in order and build an array
// showing the running balance after each transaction.
// Start with a balance of 0. Deposits add, withdrawals subtract.
//
// Each entry should have the transaction id, the transaction type,
// and the balance AFTER that transaction.
//
// Expected output:
// [
//   { id: "T1", type: "deposit", balance: 500 },
//   { id: "T2", type: "withdrawal", balance: 300 },
//   { id: "T3", type: "deposit", balance: 450 },
//   { id: "T4", type: "withdrawal", balance: 50 },
//   { id: "T5", type: "deposit", balance: 150 },
//   { id: "T6", type: "withdrawal", balance: -150 },
// ]

// ============================================================
// PROBLEM 3
// ============================================================

type InventoryType = {
  sku: string;
  name: string;
  stock: number;
};

const inventory = [
  { sku: "A1", name: "Widget", stock: 50 },
  { sku: "B2", name: "Gadget", stock: 30 },
  { sku: "C3", name: "Gizmo", stock: 0 },
  { sku: "D4", name: "Doohickey", stock: 15 },
];

type OrderItems = {
  sku: string;
  qty: number;
};

const orderItems = [
  { sku: "A1", qty: 100 },
  { sku: "B2", qty: 30 },
  { sku: "D4", qty: 5 },
];

const order = (
  inventory: InventoryType[],
  orderItems: OrderItems[],
): { canFulfill: boolean; shortages: {}[] } => {
  const res: { canFulfill: boolean; shortages: {}[] } = {
    canFulfill: true,
    shortages: [],
  };

  for (const order of orderItems) {
    const inventoryItem = inventory.find((i) => i.sku === order.sku);

    if (!inventoryItem || inventoryItem.stock < order.qty) {
      res.shortages.push({
        sku: inventoryItem?.sku ?? order.sku,
        requested: order.qty,
        available: inventoryItem?.stock ?? 0,
      });
      res.canFulfill = false;
    }
  }

  return res;
};

console.log(order(inventory, orderItems))

// Task: Check if every item in the order can be fulfilled.
// An item can be fulfilled if the matching inventory item
// has enough stock (stock >= qty).
//
// Return an object with:
//   - canFulfill: true/false (can ALL items be fulfilled?)
//   - shortages: array of items that can't be fulfilled, each with
//     the sku, requested qty, and available stock
//
// Expected output for the data above:
// { canFulfill: true, shortages: [] }
//
// Test case 2: If orderItems were:
//   [{ sku: "A1", qty: 60 }, { sku: "C3", qty: 5 }, { sku: "D4", qty: 3 }]
// Expected: {
//   canFulfill: false,
//   shortages: [
//     { sku: "A1", requested: 60, available: 50 },
//     { sku: "C3", requested: 5, available: 0 }
//   ]
// }
