// ============================================
// SESSION 7 - December 15, 2025
// Difficulty: Beginner
// Methods: map, reduce, findIndex
// ============================================

// ============================================
// PROBLEM 19
// ============================================

export = {};
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse", price: 29, inStock: false },
  { id: 3, name: "Keyboard", price: 79, inStock: true },
  { id: 4, name: "Monitor", price: 349, inStock: true },
  { id: 5, name: "Webcam", price: 89, inStock: false },
];

type ProductsType = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

type ProductsReturnType = {
  displayName: string;
  priceLabel: string;
  availability: string;
};

const listProducts = (products: ProductsType[]): ProductsReturnType[] => {
  return products.map((p) => {
    return {
      displayName: p.name.toUpperCase(),
      priceLabel: "$" + p.price.toFixed(2),
      availability: p.inStock ? "In Stock" : "Out of Stock",
    };
  });
};

console.log(listProducts(products));

// Task: Create a display list of products.
// For each product, return an object with:
// - displayName: the name in uppercase
// - priceLabel: the price formatted as "$X.XX"
// - availability: "In Stock" if inStock is true, "Out of Stock" if false

// Expected results:
// Given the products above → should return:
// [
//   { displayName: "LAPTOP", priceLabel: "$999.00", availability: "In Stock" },
//   { displayName: "MOUSE", priceLabel: "$29.00", availability: "Out of Stock" },
//   { displayName: "KEYBOARD", priceLabel: "$79.00", availability: "In Stock" },
//   { displayName: "MONITOR", priceLabel: "$349.00", availability: "In Stock" },
//   { displayName: "WEBCAM", priceLabel: "$89.00", availability: "Out of Stock" }
// ]

// Test case 2:
const products2 = [{ id: 1, name: "Cable", price: 9, inStock: true }];
// → should return: [{ displayName: "CABLE", priceLabel: "$9.00", availability: "In Stock" }]

// ============================================
// PROBLEM 20
// ============================================

const salesData = [
  { region: "North", product: "Widget", quantity: 100, unitPrice: 25 },
  { region: "South", product: "Gadget", quantity: 50, unitPrice: 40 },
  { region: "North", product: "Gadget", quantity: 75, unitPrice: 40 },
  { region: "East", product: "Widget", quantity: 120, unitPrice: 25 },
  { region: "South", product: "Widget", quantity: 80, unitPrice: 25 },
  { region: "North", product: "Widget", quantity: 60, unitPrice: 25 },
];

type SalesDataType = {
  region: string;
  product: string;
  quantity: number;
  unitPrice: number;
};

const calculateSales = (
  salesData: SalesDataType[]
): { [key: string]: number } => {
  return salesData.reduce((acc, val) => {
    acc[val.region] = (acc[val.region] || 0) + val.quantity * val.unitPrice;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(calculateSales(salesData))

// Task: Calculate total revenue per region.
// Revenue for each sale = quantity * unitPrice
// Return an object where keys are region names and values are total revenue.

// Expected results:
// Given the salesData above → should return:
// {
//   North: 7000,   // (100*25) + (75*40) + (60*25) = 2500 + 3000 + 1500
//   South: 4000,   // (50*40) + (80*25) = 2000 + 2000
//   East: 3000     // (120*25) = 3000
// }

// Test case 2:
const salesData2 = [
  { region: "West", product: "Gizmo", quantity: 10, unitPrice: 100 },
  { region: "West", product: "Gizmo", quantity: 5, unitPrice: 100 },
];
// → should return: { West: 1500 }

// ============================================
// PROBLEM 21
// ============================================

const tasks = [
  { id: 101, title: "Setup database", status: "completed" },
  { id: 102, title: "Write API endpoints", status: "completed" },
  { id: 103, title: "Create frontend", status: "in_progress" },
  { id: 104, title: "Write tests", status: "pending" },
  { id: 105, title: "Deploy to staging", status: "pending" },
];

// Task: Find the position (index) of the first task that is NOT completed.
// Return the index (0-based). If all tasks are completed, return -1.

// Expected results:
// Given the tasks above → should return: 2 (index of "Create frontend")

// Test case 2:
const tasks2 = [
  { id: 1, title: "Task A", status: "completed" },
  { id: 2, title: "Task B", status: "completed" },
];

type Tasks2Type = {
  id: number;
  title: string;
  status: string;
};

const findPosition = (tasks2: Tasks2Type[]): number => {
  return tasks.findIndex((t, i) => t.status !== "completed");
};

// → should return: -1 (all completed)

// Test case 3:
const tasks3 = [
  { id: 1, title: "Task A", status: "pending" },
  { id: 2, title: "Task B", status: "completed" },
];
// → should return: 0 (first task is not completed)
