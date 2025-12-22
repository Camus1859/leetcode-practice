// Session 22 (Day 6, Session 2)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2025-12-20

// ============================================================
// PROBLEM 1
// ============================================================

export = {};

type SalesType = {
  saleId: string;
  region: string;
  rep: string;
  amount: number;
};

const sales = [
  { saleId: "S001", region: "North", rep: "Alice", amount: 1200 },
  { saleId: "S002", region: "South", rep: "Bob", amount: 800 },
  { saleId: "S003", region: "North", rep: "Carol", amount: 1500 },
  { saleId: "S004", region: "South", rep: "Bob", amount: 950 },
  { saleId: "S005", region: "North", rep: "Alice", amount: 2100 },
  { saleId: "S006", region: "East", rep: "Dan", amount: 600 },
  { saleId: "S007", region: "South", rep: "Eve", amount: 1100 },
];

const groupSales = (
  sales: SalesType[]
): {
  [key: string]: { totalSales: number; saleCount: number; topSale: number };
} => {
  return sales.reduce((acc, val) => {
    acc[val.region] = acc[val.region] || {
      totalSales: 0,
      saleCount: 0,
      topSale: 0,
    };

    acc[val.region].totalSales += val.amount;
    acc[val.region].saleCount += 1;
    acc[val.region].topSale =
      acc[val.region].topSale < val.amount
        ? val.amount
        : acc[val.region].topSale;
    return acc;
  }, {} as { [key: string]: { totalSales: number; saleCount: number; topSale: number } });
};

console.log(groupSales(sales));

// Task: Group sales by region. For each region, calculate:
// - totalSales (sum of all amounts)
// - saleCount (number of sales)
// - topSale (the highest single sale amount in that region)
//
// Expected output:
// {
//   "North": { totalSales: 4800, saleCount: 3, topSale: 2100 },
//   "South": { totalSales: 2850, saleCount: 3, topSale: 1100 },
//   "East": { totalSales: 600, saleCount: 1, topSale: 600 }
// }

// ============================================================
// PROBLEM 2
// ============================================================

const inventory = [
  { sku: "A100", name: "Widget", quantity: 50, price: 9.99, category: "parts" },
  {
    sku: "B200",
    name: "Gadget",
    quantity: 8,
    price: 24.99,
    category: "electronics",
  },
  {
    sku: "C300",
    name: "Sprocket",
    quantity: 120,
    price: 4.5,
    category: "parts",
  },
  {
    sku: "D400",
    name: "Sensor",
    quantity: 3,
    price: 89.99,
    category: "electronics",
  },
  {
    sku: "E500",
    name: "Bolt Pack",
    quantity: 500,
    price: 2.99,
    category: "parts",
  },
];

type InventoryType = {
  sku: string;
  name: string;
  quantity: number;
  price: number;
  category: string;
};

const getItems = (
  inventory: InventoryType[]
): { sku: string; name: string; stockValue: number }[] => {
  return inventory
    .filter((i) => i.quantity <= 10)
    .map((i) => {
      return {
        sku: i.sku,
        name: i.name,
        stockValue: Number((i.quantity * i.price).toFixed(2)),
      };
    });
};

console.log(getItems(inventory));

// Task: Get all items where quantity is 10 or less (low stock).
// Return an array with: sku, name, and stockValue (quantity * price, rounded to 2 decimals).
// Only include items where stockValue is greater than 50.
//
// Expected output:
// [
//   { sku: "B200", name: "Gadget", stockValue: 199.92 },
//   { sku: "D400", name: "Sensor", stockValue: 269.97 }
// ]

// ============================================================
// PROBLEM 3
// ============================================================

const logs = [
  { logId: 1, level: "info", service: "auth", message: "User logged in" },
  {
    logId: 2,
    level: "error",
    service: "payment",
    message: "Transaction failed",
  },
  { logId: 3, level: "warn", service: "auth", message: "Invalid token" },
  { logId: 4, level: "info", service: "payment", message: "Payment processed" },
  { logId: 5, level: "error", service: "auth", message: "Auth service down" },
  { logId: 6, level: "info", service: "shipping", message: "Order shipped" },
];

type LogsType = {
  logId: number;
  level: string;
  service: string;
  message: string;
};

const oneError = (logs: LogsType[]): boolean => {
  const uniqueServiceArr = [...new Set(logs.map((l) => l.service))];

  for (const s of uniqueServiceArr) {
    const hasErrorService = logs.find(
      (l) => l.service === s && l.level === "error"
    );

    if (!hasErrorService) {
      return false;
    }
  }

  return true;
};

// Task: Check if EVERY service has at least one "error" level log.
// Return true only if all unique services have logged an error.
//
// Expected output: false
//
// (auth has errors, payment has errors, but shipping has no errors)
