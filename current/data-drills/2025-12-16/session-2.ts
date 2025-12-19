// Session 10 | Tuesday, December 16, 2025 | ~30 minutes

// PROBLEM 1

export = {};

const inventory = [
  {
    sku: "A100",
    name: "Laptop",
    price: 1200,
    inStock: true,
    category: "Electronics",
  },
  {
    sku: "A101",
    name: "Mouse",
    price: 25,
    inStock: false,
    category: "Electronics",
  },
  {
    sku: "B200",
    name: "Desk Chair",
    price: 350,
    inStock: true,
    category: "Furniture",
  },
  {
    sku: "B201",
    name: "Standing Desk",
    price: 800,
    inStock: true,
    category: "Furniture",
  },
  {
    sku: "A102",
    name: "Keyboard",
    price: 75,
    inStock: true,
    category: "Electronics",
  },
  {
    sku: "C300",
    name: "Notebook",
    price: 5,
    inStock: true,
    category: "Office Supplies",
  },
];

type InventoryType = {
  sku: string;
  name: string;
  price: number;
  inStock: boolean;
  category: string;
};

type InventoryReturnType = Omit<
  InventoryType,
  "price" | "inStock" | "category"
>;

const getAllItems = (inventory: InventoryType[]): InventoryReturnType[] => {
  return inventory
    .filter((i) => i.inStock && i.price > 50)
    .map((i) => {
      return {
        sku: i.sku,
        name: i.name,
      };
    });
};

console.log(getAllItems(inventory));

// Task: Get all items that are in stock AND cost more than $50. Return only sku and name.
// Expected: [{ sku: "A100", name: "Laptop" }, { sku: "B200", name: "Desk Chair" }, { sku: "B201", name: "Standing Desk" }, { sku: "A102", name: "Keyboard" }]

// PROBLEM 2

const votes = [
  { oderId: 1, choice: "A" },
  { oderId: 2, choice: "B" },
  { oderId: 3, choice: "A" },
  { oderId: 4, choice: "A" },
  { oderId: 5, choice: "C" },
  { oderId: 6, choice: "B" },
  { oderId: 7, choice: "A" },
  { oderId: 8, choice: "C" },
];

type VotesType = {
  oderId: number;
  choice: string;
};

const countVotes = (votes: VotesType[]): { [key: string]: number } => {
  return votes.reduce((acc, val) => {
    acc[val.choice] = (acc[val.choice] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(countVotes(votes))
// Task: Count how many votes each choice received.
// Expected: { A: 4, B: 2, C: 2 }

// PROBLEM 3

type StudentsType = {
  id: number,
  name: string,
  grade: number,
  attendance: number
}

const students = [
  { id: 1, name: "Alice", grade: 85, attendance: 95 },
  { id: 2, name: "Bob", grade: 72, attendance: 88 },
  { id: 3, name: "Carol", grade: 91, attendance: 92 },
  { id: 4, name: "David", grade: 68, attendance: 75 },
  { id: 5, name: "Eve", grade: 88, attendance: 98 },
];

const checkAllStudents = (students: StudentsType[]): boolean => {

  return students.every((s)=> s.grade >= 70 ||  s.attendance >= 80)
}
// Task: Check if ALL students have both a grade of 70 or higher AND attendance of 80 or higher.
// Expected: false (David fails both conditions)
