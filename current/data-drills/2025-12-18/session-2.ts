// Session 14 (Day 4, Session 2)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-18

// ============================================================
// PROBLEM 1
// ============================================================

export = {};

const students = [
  { id: 1, name: "Maya Johnson", score: 92, submitted: true },
  { id: 2, name: "Liam Chen", score: 78, submitted: true },
  { id: 3, name: "Sofia Rodriguez", score: 85, submitted: false },
  { id: 4, name: "Noah Williams", score: 64, submitted: true },
  { id: 5, name: "Emma Davis", score: 91, submitted: true },
  { id: 6, name: "Oliver Brown", score: 55, submitted: true },
];

type StudentsType = {
  id: number;
  name: string;
  score: number;
  submitted: boolean;
};

type StudentReturnType = {
  name: string;
  grade: string;
};

const transformStudent = (students: StudentsType[]): StudentReturnType[] => {
  return students
    .filter((s) => s.submitted)
    .map((s) => {
      let grade = "";

      if (s.score >= 90) {
        grade = "A";
      } else if (s.score >= 80) {
        grade = "B";
      } else if (s.score >= 70) {
        grade = "C";
      } else if (s.score >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }

      return {
        name: s.name,
        grade,
      };
    });
};

console.log(transformStudent(students));

// Task: Transform each student into an object with their name and a letter grade.
// Grading scale: A (90+), B (80-89), C (70-79), D (60-69), F (below 60)
// Only include students who have submitted their work.
//
// Expected output:
// [
//   { name: "Maya Johnson", grade: "A" },
//   { name: "Liam Chen", grade: "C" },
//   { name: "Noah Williams", grade: "D" },
//   { name: "Emma Davis", grade: "A" },
//   { name: "Oliver Brown", grade: "F" }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const inventory = [
  { itemId: "SKU-001", warehouse: "North", quantity: 45 },
  { itemId: "SKU-002", warehouse: "South", quantity: 120 },
  { itemId: "SKU-001", warehouse: "South", quantity: 30 },
  { itemId: "SKU-003", warehouse: "North", quantity: 0 },
  { itemId: "SKU-002", warehouse: "North", quantity: 85 },
  { itemId: "SKU-003", warehouse: "South", quantity: 15 },
  { itemId: "SKU-001", warehouse: "East", quantity: 60 },
];

type InventoryType = {
  itemId: string;
  warehouse: string;
  quantity: number;
};

const lookup = (inventory: InventoryType[]): { [key: string]: number } => {
  return inventory.reduce((acc, val) => {
    acc[val.itemId] = (acc[val.itemId] || 0) + val.quantity;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(lookup(inventory))

// Task: Create a lookup object where each key is an itemId and the value is the
// total quantity across all warehouses for that item.
//
// Expected output:
// {
//   "SKU-001": 135,
//   "SKU-002": 205,
//   "SKU-003": 15
// }

// ============================================================
// PROBLEM 3
// ============================================================

const tasks = [
  { taskId: "T1", assignee: "Alice", priority: "high", completed: false },
  { taskId: "T2", assignee: "Bob", priority: "low", completed: true },
  { taskId: "T3", assignee: "Alice", priority: "medium", completed: false },
  { taskId: "T4", assignee: "Charlie", priority: "high", completed: false },
  { taskId: "T5", assignee: "Bob", priority: "high", completed: true },
  { taskId: "T6", assignee: "Alice", priority: "low", completed: true },
];

type tasksType = {
  taskId: string,
  assignee: string,
  priority: string,
  completed: boolean
}

 tasks.some((t)=> t.priority === "high" && t.completed === false)

// Task: Check if there are any high-priority tasks that are not yet completed.
// Return true if at least one exists, false otherwise.
//
// Expected output: true
//
// Additional test case:
// If all high-priority tasks were completed, the result would be: false
