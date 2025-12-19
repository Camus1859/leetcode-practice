// Session 19 (Day 5, Session 3)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-19

export = {};

// ============================================================
// PROBLEM 1
// ============================================================

const products = [
  { sku: "A100", name: "Laptop Stand", originalPrice: 45.0, onSale: true },
  { sku: "A101", name: "USB Hub", originalPrice: 29.99, onSale: false },
  { sku: "A102", name: "Webcam HD", originalPrice: 79.99, onSale: true },
  { sku: "A103", name: "Desk Mat", originalPrice: 24.99, onSale: true },
  { sku: "A104", name: "Monitor Light", originalPrice: 54.99, onSale: false },
];

type ProductsType = {
  sku: string;
  name: string;
  originalPrice: number;
  onSale: boolean;
};

const getAllProducts = (
  products: ProductsType[]
): { name: string; salePrice: number }[] => {
  return products
    .filter((p) => p.onSale)
    .map((p) => {
      return {
        name: p.name,
        salePrice: p.originalPrice * 0.8,
      };
    });
};

// Task: Get all products that are on sale and reduce their price by 20%.
// Return only the name and the sale price (as "salePrice"), rounded to 2 decimal places.
//
// Expected output:
// [
//   { name: "Laptop Stand", salePrice: 36 },
//   { name: "Webcam HD", salePrice: 63.99 },
//   { name: "Desk Mat", salePrice: 19.99 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const orders = [
  { orderId: "ORD-1", region: "East", product: "Widget", quantity: 5 },
  { orderId: "ORD-2", region: "West", product: "Gadget", quantity: 12 },
  { orderId: "ORD-3", region: "East", product: "Widget", quantity: 8 },
  { orderId: "ORD-4", region: "East", product: "Gadget", quantity: 3 },
  { orderId: "ORD-5", region: "West", product: "Widget", quantity: 7 },
  { orderId: "ORD-6", region: "West", product: "Gadget", quantity: 4 },
];

type OrdersType = {
  orderId: string;
  region: string;
  product: string;
  quantity: number;
};

const calculateQuantity = (orders: OrdersType[]): { [key: string]: number } => {
  return orders.reduce((acc, val) => {
    acc[val.region] = (acc[val.region] || 0) + val.quantity;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Calculate the total quantity ordered for each region.
//
// Expected output:
// {
//   "East": 16,
//   "West": 23
// }

// ============================================================
// PROBLEM 3
// ============================================================

const inventory = [
  { itemId: "INV-001", name: "Bolts", quantity: 500, reorderLevel: 100 },
  { itemId: "INV-002", name: "Nuts", quantity: 80, reorderLevel: 100 },
  { itemId: "INV-003", name: "Washers", quantity: 1200, reorderLevel: 200 },
  { itemId: "INV-004", name: "Screws", quantity: 150, reorderLevel: 100 },
  { itemId: "INV-005", name: "Nails", quantity: 50, reorderLevel: 75 },
];

type InventoryType = {
  itemId: string,
  name: string,
  quantity: number,
  reorderLevel: number
}

const check = (inventory: InventoryType[]): boolean => {

  return inventory.some((i) => i.quantity < i.reorderLevel)

}

// Task: Check if ANY item in the inventory needs to be reordered.
// An item needs reorder if its quantity is less than its reorderLevel.
// Return true if at least one item needs reorder, false otherwise.
//
// Expected output: true
//
// (Nuts has 80 < 100, and Nails has 50 < 75, so at least one needs reorder)
