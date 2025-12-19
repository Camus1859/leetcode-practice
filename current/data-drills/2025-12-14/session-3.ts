// Data Drills - Round 2, Session 3
// Date: 2025-12-14
// Difficulty: Beginner
// Time: ~30 minutes total (~10 min per problem)

// ============================================================
// PROBLEM 7 - filter + map
// ============================================================

export = {};

const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true },
  { id: 2, name: "Mouse", price: 29, inStock: false },
  { id: 3, name: "Keyboard", price: 79, inStock: true },
  { id: 4, name: "Monitor", price: 349, inStock: true },
  { id: 5, name: "Webcam", price: 89, inStock: false },
  { id: 6, name: "Headphones", price: 149, inStock: true },
];

type ProductsType = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

const generateList = (products: ProductsType[]): string[] => {
  return products.filter((p) => p.inStock && p.price > 50).map((p) => p.name);
};

console.log(generateList(products));

// Task: Get just the names of products that are in stock and cost more than $50.

// Expected results:
// Given the products array above → ["Laptop", "Keyboard", "Monitor", "Headphones"]

// ============================================================
// PROBLEM 8 - reduce (grouping with object output)
// ============================================================

const tasks = [
  { id: 1, title: "Fix bug", assignee: "Alice", status: "done" },
  { id: 2, title: "Write tests", assignee: "Bob", status: "in_progress" },
  { id: 3, title: "Code review", assignee: "Alice", status: "done" },
  { id: 4, title: "Deploy", assignee: "Carol", status: "todo" },
  { id: 5, title: "Update docs", assignee: "Bob", status: "done" },
  { id: 6, title: "Refactor", assignee: "Alice", status: "in_progress" },
];

type TasksType = {
  id: number;
  title: string;
  assignee: string;
  status: string;
};

const countStatus = (tasks: TasksType[]): { [key: string]: number } => {
  return tasks.reduce((acc, val) => {
    acc[val.status] = (acc[val.status] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(countStatus(tasks));

// Task: Count how many tasks are in each status (done, in_progress, todo).

// Expected results:
// Given the tasks array above → { done: 3, in_progress: 2, todo: 1 }

// ============================================================
// PROBLEM 9 - find
// ============================================================

const users = [
  { id: 101, username: "alice_dev", email: "alice@example.com", role: "admin" },
  { id: 102, username: "bob_smith", email: "bob@example.com", role: "user" },
  {
    id: 103,
    username: "carol_jones",
    email: "carol@example.com",
    role: "user",
  },
  {
    id: 104,
    username: "dave_wilson",
    email: "dave@example.com",
    role: "moderator",
  },
];

type UsersType = {
  id: number;
  username: string;
  email: string;
  role: string;
};

const findUser = (users: UsersType[]): string | null => {
  return users.find((u) => u.role === "moderator")?.email || null
};

// Task: Find the user with the role "moderator" and return their email address.
// If no moderator exists, return null.

// Expected results:
// Given the users array above → "dave@example.com"
// If no moderator existed → null

// ============================================================
// YOUR SOLUTIONS BELOW
// ============================================================
