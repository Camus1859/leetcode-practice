// ============================================
// SESSION 5 - December 15, 2025
// Difficulty: Beginner
// Methods: filter, reduce, every
// ============================================

// ============================================
// PROBLEM 13
// ============================================

export = {};

const inventory = [
  { sku: "A001", name: "Wireless Mouse", quantity: 15, minStock: 10 },
  { sku: "A002", name: "USB Cable", quantity: 3, minStock: 20 },
  { sku: "A003", name: "Monitor Stand", quantity: 8, minStock: 5 },
  { sku: "A004", name: "Keyboard", quantity: 0, minStock: 10 },
  { sku: "A005", name: "Webcam", quantity: 25, minStock: 15 },
  { sku: "A006", name: "Headphones", quantity: 12, minStock: 12 },
];

type InventoryTypeA = {
  sku: string;
  name: string;
  quantity: number;
  minStock: number;
};

type InventoryReturnType = Omit<InventoryTypeA, "quantity" | "minStock">;
const reOrderInventory = (
  inventory: InventoryTypeA[]
): InventoryReturnType[] => {
  return inventory
    .filter((i) => i.quantity < i.minStock)
    .map((i) => {
      return {
        sku: i.sku,
        name: i.name,
      };
    });
};

console.log(reOrderInventory(inventory));

// Task: Find all items that need to be reordered.
// An item needs reordering if its quantity is BELOW its minStock threshold.
// Return only the sku and name of items that need reordering.

// Expected results:
// Given the inventory above → should return:
// [
//   { sku: "A002", name: "USB Cable" },
//   { sku: "A004", name: "Keyboard" }
// ]

// Test case 2:
const inventory2 = [
  { sku: "B001", name: "Desk Lamp", quantity: 10, minStock: 10 },
  { sku: "B002", name: "Chair Mat", quantity: 5, minStock: 3 },
];

// → should return: [] (no items below threshold - equal doesn't count)

// ============================================
// PROBLEM 14
// ============================================

const employees = [
  { id: 1, name: "Alice", department: "Engineering", yearsAtCompany: 3 },
  { id: 2, name: "Bob", department: "Sales", yearsAtCompany: 7 },
  { id: 3, name: "Carol", department: "Engineering", yearsAtCompany: 5 },
  { id: 4, name: "Dan", department: "Sales", yearsAtCompany: 2 },
  { id: 5, name: "Eve", department: "Engineering", yearsAtCompany: 1 },
  { id: 6, name: "Frank", department: "Marketing", yearsAtCompany: 4 },
];

type EmployeesType = {
  id: number;
  name: string;
  department: string;
  yearsAtCompany: number;
};

const calculateTotal = (
  employees: EmployeesType[]
): { [key: string]: number } => {
  return employees.reduce((acc, val) => {
    acc[val.department] = (acc[val.department] || 0) + val.yearsAtCompany;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Calculate the total years of experience per department.
// Return an object where keys are department names and values are the sum of yearsAtCompany.

// Expected results:
// Given the employees above → should return:
// {
//   Engineering: 9,
//   Sales: 9,
//   Marketing: 4
// }

// Test case 2:
const employees2 = [
  { id: 1, name: "Zoe", department: "HR", yearsAtCompany: 10 },
];
// → should return: { HR: 10 }

console.log(calculateTotal(employees2));

// ============================================
// PROBLEM 15
// ============================================

const submissions = [
  { id: 1, studentName: "Alex", score: 85, maxScore: 100 },
  { id: 2, studentName: "Jordan", score: 72, maxScore: 100 },
  { id: 3, studentName: "Sam", score: 91, maxScore: 100 },
  { id: 4, studentName: "Taylor", score: 68, maxScore: 100 },
];

type SubmissionsType = {
  id: number;
  studentName: string;
  score: number;
  maxScore: number;
};

const checkedPassScore = (submissions: SubmissionsType[]): boolean => {
  return submissions.every((s) => s.score >= s.maxScore * 0.7);
};

// Task: Check if ALL students passed the assignment.
// A student passes if their score is at least 70% of maxScore.
// Return true if everyone passed, false otherwise.

// Expected results:
// Given the submissions above → should return: true
// (Alex: 85%, Jordan: 72%, Sam: 91%, Taylor: 68% → Taylor is at 68% which is below 70%)
// Wait, let me recalculate: 68/100 = 68% which is < 70%
// → should return: false

// Test case 2:
const submissions2 = [
  { id: 1, studentName: "Lee", score: 70, maxScore: 100 },
  { id: 2, studentName: "Kim", score: 80, maxScore: 100 },
];
// → should return: true (70% exactly counts as passing)

// Test case 3:
const submissions3 = [
  { id: 1, studentName: "Pat", score: 14, maxScore: 20 },
  { id: 2, studentName: "Chris", score: 18, maxScore: 20 },
];
// → should return: true (Pat: 14/20 = 70%, Chris: 18/20 = 90%)
