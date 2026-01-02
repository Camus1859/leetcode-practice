// Session 29 (Day 8, Session 1)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2026-01-01

export = {};

// ============================================================
// PROBLEM 1
// ============================================================

const inventory = [
  { sku: "SKU-001", product: "Laptop", warehouse: "A", quantity: 15 },
  { sku: "SKU-002", product: "Mouse", warehouse: "A", quantity: 120 },
  { sku: "SKU-003", product: "Keyboard", warehouse: "B", quantity: 45 },
  { sku: "SKU-001", product: "Laptop", warehouse: "B", quantity: 8 },
  { sku: "SKU-002", product: "Mouse", warehouse: "B", quantity: 200 },
  { sku: "SKU-004", product: "Monitor", warehouse: "A", quantity: 30 },
  { sku: "SKU-003", product: "Keyboard", warehouse: "A", quantity: 60 },
];

type InventoryType = {
  sku: string;
  product: string;
  warehouse: string;
  quantity: number;
};

const consolodate = (
  inventory: InventoryType[]
): {
  [key: string]: {
    product: string;
    totalQuantity: number;
    warehouseCount: number;
    warehouses: string[];
  };
} => {
  return inventory.reduce(
    (acc, val) => {
      acc[val.sku] = acc[val.sku] || {
        product: "",
        totalQuantity: 0,
        warehouseCount: 0,
        warehouses: [],
      };
      acc[val.sku].product = val.product
      acc[val.sku].totalQuantity += val.quantity;
      acc[val.sku].warehouseCount += 1;
      acc[val.sku].warehouses.push(val.warehouse);
      return acc;
    },
    {} as {
      [key: string]: {
        product: string;
        totalQuantity: number;
        warehouseCount: number;
        warehouses: string[];
      };
    }
  );
};

console.log(consolodate(inventory))

// Task: Consolidate inventory by SKU. For each unique SKU, calculate:
// - totalQuantity (sum across all warehouses)
// - warehouseCount (how many warehouses have this item)
// - warehouses (array of warehouse names that have this item)
//
// Return as an object keyed by SKU.
//
// Expected output:
// {
//   "SKU-001": { product: "Laptop", totalQuantity: 23, warehouseCount: 2, warehouses: ["A", "B"] },
//   "SKU-002": { product: "Mouse", totalQuantity: 320, warehouseCount: 2, warehouses: ["A", "B"] },
//   "SKU-003": { product: "Keyboard", totalQuantity: 105, warehouseCount: 2, warehouses: ["B", "A"] },
//   "SKU-004": { product: "Monitor", totalQuantity: 30, warehouseCount: 1, warehouses: ["A"] }
// }

// ============================================================
// PROBLEM 2
// ============================================================

const products = [
  { productId: "P100", name: "Widget", price: 25 },
  { productId: "P200", name: "Gadget", price: 75 },
  { productId: "P300", name: "Gizmo", price: 150 },
];

const sales = [
  { saleId: "S001", productId: "P100", qty: 4, customerId: "C01" },
  { saleId: "S002", productId: "P200", qty: 2, customerId: "C02" },
  { saleId: "S003", productId: "P100", qty: 1, customerId: "C01" },
  { saleId: "S004", productId: "P300", qty: 3, customerId: "C03" },
  { saleId: "S005", productId: "P200", qty: 5, customerId: "C01" },
];

// Task: Enrich each sale with product info and calculate the total for that sale.
// Return an array of enriched sale objects.
//
// Each enriched sale should have:
// - all original sale fields (saleId, productId, qty, customerId)
// - productName (from products)
// - unitPrice (from products)
// - saleTotal (qty * price)
//
// Expected output:
// [
//   { saleId: "S001", productId: "P100", qty: 4, customerId: "C01", productName: "Widget", unitPrice: 25, saleTotal: 100 },
//   { saleId: "S002", productId: "P200", qty: 2, customerId: "C02", productName: "Gadget", unitPrice: 75, saleTotal: 150 },
//   { saleId: "S003", productId: "P100", qty: 1, customerId: "C01", productName: "Widget", unitPrice: 25, saleTotal: 25 },
//   { saleId: "S004", productId: "P300", qty: 3, customerId: "C03", productName: "Gizmo", unitPrice: 150, saleTotal: 450 },
//   { saleId: "S005", productId: "P200", qty: 5, customerId: "C01", productName: "Gadget", unitPrice: 75, saleTotal: 375 }
// ]

// ============================================================
// PROBLEM 3
// ============================================================

const currentPermissions = [
  { userId: "U01", resource: "dashboard", access: "read" },
  { userId: "U01", resource: "reports", access: "write" },
  { userId: "U02", resource: "dashboard", access: "read" },
  { userId: "U02", resource: "settings", access: "admin" },
  { userId: "U03", resource: "reports", access: "read" },
];

const requestedPermissions = [
  { userId: "U01", resource: "dashboard", access: "read" },
  { userId: "U01", resource: "settings", access: "read" },
  { userId: "U02", resource: "dashboard", access: "write" },
  { userId: "U03", resource: "reports", access: "read" },
  { userId: "U03", resource: "dashboard", access: "read" },
];

// Task: Compare current vs requested permissions and categorize each requested permission as:
// - "unchanged": exact match exists in current (same userId, resource, AND access)
// - "upgraded": same userId+resource exists but access level changed
// - "new": userId+resource combination doesn't exist in current
//
// Return an object with three arrays.
//
// Expected output:
// {
//   unchanged: [
//     { userId: "U01", resource: "dashboard", access: "read" },
//     { userId: "U03", resource: "reports", access: "read" }
//   ],
//   upgraded: [
//     { userId: "U02", resource: "dashboard", access: "write" }
//   ],
//   new: [
//     { userId: "U01", resource: "settings", access: "read" },
//     { userId: "U03", resource: "dashboard", access: "read" }
//   ]
// }
