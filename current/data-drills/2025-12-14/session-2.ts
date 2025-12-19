// Data Drills - Round 2, Session 1 (Set 2)
// Date: 2025-12-14
// Difficulty: Beginner
// Time: ~22 minutes total (~7.5 min per problem)

// ============================================================
// PROBLEM 4
// ============================================================

export = {};
const students = [
  { id: 1, name: "Alice", grade: "A", subject: "Math" },
  { id: 2, name: "Bob", grade: "B", subject: "Math" },
  { id: 3, name: "Carol", grade: "A", subject: "Science" },
  { id: 4, name: "Dave", grade: "C", subject: "Math" },
  { id: 5, name: "Eve", grade: "A", subject: "Science" },
  { id: 6, name: "Frank", grade: "B", subject: "Science" },
];

type StudentsType = {
  id: number;
  name: string;
  grade: string;
  subject: string;
};

const countGrades = (students: StudentsType[]): { [key: string]: number } => {
  return students.reduce((acc, val) => {
    acc[val.grade] = (acc[val.grade] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(countGrades(students));

// Task: Count how many students got each grade (A, B, C, etc.)

// Expected results:
// Given the students array above → { A: 3, B: 2, C: 1 }

// ============================================================
// PROBLEM 5
// ============================================================

const inventory = [
  { sku: "A001", item: "Laptop", warehouse: "East", stock: 25 },
  { sku: "A002", item: "Mouse", warehouse: "East", stock: 150 },
  { sku: "A003", item: "Laptop", warehouse: "West", stock: 30 },
  { sku: "A004", item: "Keyboard", warehouse: "East", stock: 75 },
  { sku: "A005", item: "Mouse", warehouse: "West", stock: 200 },
  { sku: "A006", item: "Keyboard", warehouse: "West", stock: 50 },
];

type InventoryType = {
  sku: string;
  item: string;
  warehouse: string;
  stock: number;
};

const countInventory = (
  inventory: InventoryType[]
): { [key: string]: number } => {
  return inventory.reduce((acc, val) => {
    acc[val.item] = (acc[val.item] || 0) + val.stock;

    return acc;
  }, {} as { [key: string]: number });
};

console.log(countInventory(inventory));
// Task: Calculate total stock for each item across all warehouses.

// Expected results:
// Given the inventory array above → { Laptop: 55, Mouse: 350, Keyboard: 125 }

// ============================================================
// PROBLEM 6
// ============================================================

const salesData = [
  { id: 1, rep: "Alice", region: "North", amount: 5000 },
  { id: 2, rep: "Bob", region: "South", amount: 7500 },
  { id: 3, rep: "Alice", region: "North", amount: 3000 },
  { id: 4, rep: "Carol", region: "North", amount: 4500 },
  { id: 5, rep: "Bob", region: "South", amount: 2500 },
  { id: 6, rep: "Carol", region: "South", amount: 6000 },
];

type SalesDataType = {
  id: number;
  rep: string;
  region: string;
  amount: number;
};

const calculateSales = (
  salesData: SalesDataType[]
): { [key: string]: number } => {
  return salesData.reduce((acc, val) => {
    acc[val.region] = (acc[val.region] || 0) + val.amount;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(calculateSales(salesData));

// Task: Calculate total sales amount per region.

// Expected results:
// Given the salesData array above → { North: 12500, South: 16000 }

// ============================================================
// YOUR SOLUTIONS BELOW
// ============================================================
