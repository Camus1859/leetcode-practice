// Diagnostic Assessment
// Date: 2026-02-15
// Instructions: Work through in order. When you get stuck, that's the wall. No timer.

export {};

// ============================================================
// PROBLEM 1
// ============================================================

type Employees = {
  id: string;
  name: string;
  department: string;
  salary: number;
};

const employees = [
  { id: "E1", name: "Sara", department: "Engineering", salary: 95000 },
  { id: "E2", name: "James", department: "Sales", salary: 72000 },
  { id: "E3", name: "Nina", department: "Engineering", salary: 110000 },
  { id: "E4", name: "Tom", department: "Marketing", salary: 68000 },
  { id: "E5", name: "Priya", department: "Sales", salary: 81000 },
];

const getEmployees = (employees: Employees[]): Employees[] => {
  return employees.filter((e) => e.department === "Engineering");
};

console.log(getEmployees(employees));

// Task: Get all employees in the "Engineering" department.
// Return the full objects.
//
// Expected: [{ id: "E1", name: "Sara", ... }, { id: "E3", name: "Nina", ... }]

// ============================================================
// PROBLEM 2
// ============================================================

type Items = {
  product: string;
  price: number;
  qty: number;
};

const items = [
  { product: "Notebook", price: 4.99, qty: 3 },
  { product: "Pen", price: 1.5, qty: 10 },
  { product: "Backpack", price: 39.99, qty: 1 },
  { product: "Eraser", price: 0.75, qty: 5 },
];

const productNameAndTotal = (
  items: Items[],
): { product: string; lineTotal: number }[] => {
  return items.map((item) => {
    return {
      product: item.product,
      lineTotal: item.price * item.qty,
    };
  });
};

console.log(productNameAndTotal(items));

// Task: Create an array of objects with just the product name and
// a lineTotal (price * qty) for each item.
//
// Expected:
// [
//   { product: "Notebook", lineTotal: 14.97 },
//   { product: "Pen", lineTotal: 15.00 },
//   { product: "Backpack", lineTotal: 39.99 },
//   { product: "Eraser", lineTotal: 3.75 }
// ]

// ============================================================
// PROBLEM 3
// ============================================================

type Orders = {
  orderId: string;
  customer: string;
  total: number;
  status: string;
};

const orders = [
  { orderId: "A1", customer: "Lena", total: 120, status: "shipped" },
  { orderId: "A2", customer: "Marco", total: 45, status: "pending" },
  { orderId: "A3", customer: "Lena", total: 200, status: "shipped" },
  { orderId: "A4", customer: "Aisha", total: 89, status: "cancelled" },
  { orderId: "A5", customer: "Marco", total: 150, status: "shipped" },
];

const getShippedOrdes = (
  orders: Orders[],
): { customer: string; total: number }[] => {
  return orders
    .filter((order) => order.status === "shipped")
    .map((order) => {
      return {
        customer: order.customer,
        total: order.total,
      };
    });
};

console.log(getShippedOrdes(orders));

// Task: Get only shipped orders, then return just the customer name
// and total for each.
//
// Expected:
// [
//   { customer: "Lena", total: 120 },
//   { customer: "Lena", total: 200 },
//   { customer: "Marco", total: 150 }
// ]

// ============================================================
// PROBLEM 4
// ============================================================

type Expenses = {
  description: string;
  amount: number;
};
const expenses = [
  { description: "Office supplies", amount: 45.0 },
  { description: "Software license", amount: 299.99 },
  { description: "Lunch meeting", amount: 67.5 },
  { description: "Travel", amount: 412.0 },
  { description: "Equipment", amount: 189.0 },
];

const calculateTotal = (expenses: Expenses[]): number => {
  return expenses.reduce((acc, val) => {
    return val.amount + acc;
  }, 0);
};

console.log(calculateTotal(expenses));

// Task: Calculate the total of all expense amounts.
// Return a single number.
//
// Expected: 1013.49

// ============================================================
// PROBLEM 5
// ============================================================

type Pets = {
  name: string;
  type: string;
  age: number;
};

const pets = [
  { name: "Buddy", type: "dog", age: 5 },
  { name: "Whiskers", type: "cat", age: 3 },
  { name: "Rex", type: "dog", age: 8 },
  { name: "Mittens", type: "cat", age: 1 },
  { name: "Goldie", type: "fish", age: 2 },
];

const findFirstCat = (pets: Pets[]): Pets => {
  return pets.find((pet) => pet.type === "cat");
};

console.log(findFirstCat(pets));

// Task: Find the first cat in the array.
// Return the full object.
//
// Expected: { name: "Whiskers", type: "cat", age: 3 }

// ============================================================
// PROBLEM 6
// ============================================================

type Servers = {
  hostname: string;
  status: string;
  cpu: number;
};

const servers = [
  { hostname: "web-01", status: "running", cpu: 45 },
  { hostname: "web-02", status: "running", cpu: 72 },
  { hostname: "db-01", status: "stopped", cpu: 0 },
  { hostname: "web-03", status: "running", cpu: 88 },
  { hostname: "cache-01", status: "running", cpu: 15 },
];

const res = servers.some((server) => server.cpu > 80);

// Task: Check if ANY server has a cpu usage above 80.
// Return true or false.
//
// Expected: true (web-03 has cpu: 88)

// ============================================================
// PROBLEM 7
// ============================================================

type Passwords = {
  users: string;
  length: 12;
  hasSpecialChar: boolean;
};

const passwords = [
  { user: "alice", length: 12, hasSpecialChar: true },
  { user: "bob", length: 6, hasSpecialChar: false },
  { user: "carol", length: 10, hasSpecialChar: true },
  { user: "dan", length: 14, hasSpecialChar: true },
];

const res2 = passwords.every(
  (password) => password.length >= 8 && password.hasSpecialChar,
);

// Task: Check if ALL passwords have a length of 8 or more
// AND contain a special character.
// Return true or false.
//
// Expected: false (bob has length 6 and no special char)

// ============================================================
// PROBLEM 8
// ============================================================

const allowedSizes = ["S", "M", "L", "XL"];

const hasSize = (allowedSizes: string[], size: string): boolean => {
  return allowedSizes.includes(size);
};

// Task: Given a size string, check if it's in the allowedSizes array.
//
// Test case 1 (size = "M"): true
// Test case 2 (size = "XXL"): false

// ============================================================
// PROBLEM 9
// ============================================================

const tickets = [
  { id: "T1", priority: "low", assignee: "Kim" },
  { id: "T2", priority: "medium", assignee: "Pat" },
  { id: "T3", priority: "low", assignee: "Kim" },
  { id: "T4", priority: "high", assignee: "Sam" },
  { id: "T5", priority: "medium", assignee: "Pat" },
];

const res22 = tickets.findIndex((ticket) => ticket.priority === "high");

// Task: Find the position (0-based index) of the first "high"
// priority ticket.
// Return the index number.
//
// Expected: 3

// ============================================================
// PROBLEM 10
// ============================================================

const scores = [
  { player: "Ace", points: 340 },
  { player: "Blaze", points: 510 },
  { player: "Colt", points: 275 },
  { player: "Dash", points: 510 },
  { player: "Echo", points: 420 },
];

// Task: Sort the players from highest points to lowest.
// Return the sorted array of full objects.
//
// Expected:
// [
//   { player: "Blaze", points: 510 },
//   { player: "Dash", points: 510 },
//   { player: "Colt", points: 275 },
//   ...
// ]
// (Wait - where does Echo and Ace fit? Work it out.)

// ============================================================
// PROBLEM 11
// ============================================================

type Feedback = {
  reviewer: string;
  rating: number;
};

const feedback = [
  { reviewer: "Alex", rating: 4 },
  { reviewer: "Blake", rating: 2 },
  { reviewer: "Casey", rating: 5 },
  { reviewer: "Drew", rating: 3 },
  { reviewer: "Ellis", rating: 4 },
];

const review = (
  feedback: Feedback[],
): { reviewer: string; label: string }[] => {
  return feedback.map((f) => {
    let rating = "";
    if (f.rating >= 4) {
      rating = "positive";
    } else if (f.rating === 3) {
      rating = "neutral";
    } else if (f.rating === 1 || f.rating === 2) {
      rating = "negative";
    }
    return {
      reviewer: f.reviewer,
      label: rating,
    };
  });
};

console.log(review(feedback));

// Task: Create an array where each entry has the reviewer name
// and a label based on their rating:
//   - 4 or 5 → "positive"
//   - 3 → "neutral"
//   - 1 or 2 → "negative"
//
// Expected:
// [
//   { reviewer: "Alex", label: "positive" },
//   { reviewer: "Blake", label: "negative" },
//   { reviewer: "Casey", label: "positive" },
//   { reviewer: "Drew", label: "neutral" },
//   { reviewer: "Ellis", label: "positive" }
// ]

// ============================================================
// PROBLEM 12
// ============================================================

const votes = [
  "Alice",
  "Bob",
  "Alice",
  "Carol",
  "Bob",
  "Alice",
  "Carol",
  "Carol",
  "Bob",
  "Alice",
];

type Votes = string[];

// Task: Count how many votes each person received.
// Return an object where each key is a name and the value is their count.
//
// Expected: { Alice: 4, Bob: 3, Carol: 3 }

const countVote = (votes: Votes): { [key: string]: number } => {
  return votes.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
};

console.log(countVote(votes));
// ============================================================
// PROBLEM 13
// ============================================================

type Inventory = {
  sku: string;
  name: string;
  stock: number;
  minStock: number;
  category: string;
};

const inventory = [
  { sku: "W-100", name: "Wrench", stock: 3, minStock: 10, category: "tools" },
  { sku: "H-200", name: "Hammer", stock: 25, minStock: 5, category: "tools" },
  {
    sku: "N-300",
    name: "Nails",
    stock: 50,
    minStock: 100,
    category: "fasteners",
  },
  {
    sku: "S-400",
    name: "Screws",
    stock: 80,
    minStock: 50,
    category: "fasteners",
  },
  { sku: "D-500", name: "Drill", stock: 2, minStock: 5, category: "tools" },
];

const stock = (
  inventory: Inventory[],
): { name: string; reorder: number; category: string }[] => {
  return inventory
    .filter((i) => i.stock < i.minStock)
    .map((i) => {
      return {
        name: i.name,
        reorder: i.minStock - i.stock,
        category: i.category,
      };
    });
};

console.log(stock(inventory));

// Task: Find all items where stock is below minStock.
// For each one, return the name, how many units they need to
// reorder (minStock - stock), and the category.
//
// Expected:
// [
//   { name: "Wrench", reorder: 7, category: "tools" },
//   { name: "Nails", reorder: 50, category: "fasteners" },
//   { name: "Drill", reorder: 3, category: "tools" }
// ]

// ============================================================
// PROBLEM 14
// ============================================================

type Transactions = {
  id: string;
  category: string;
  amount: number;
};

const transactions = [
  { id: "T1", category: "food", amount: 12.5 },
  { id: "T2", category: "transport", amount: 35.0 },
  { id: "T3", category: "food", amount: 8.75 },
  { id: "T4", category: "entertainment", amount: 60.0 },
  { id: "T5", category: "food", amount: 22.0 },
  { id: "T6", category: "transport", amount: 15.0 },
];

const calculate = (
  transactions: Transactions[],
): { food: number; transport: number; entertainment: number } => {
  return transactions.reduce(
    (acc, val) => {
      acc[val.category] = (acc[val.category] || 0) + val.amount;
      return acc;
    },
    {} as { food: number; transport: number; entertainment: number },
  );
};

console.log(calculate(transactions));

// Task: Calculate the total spending per category.
// Return an object where each key is a category and the value is the sum.
//
// Expected: { food: 43.25, transport: 50.00, entertainment: 60.00 }

// ============================================================
// PROBLEM 15
// ============================================================

type Messages = {
  from: string;
  text: string;
};

const messages = [
  { from: "Alice", text: "Hey!" },
  { from: "Bob", text: "Meeting at 3" },
  { from: "Alice", text: "Got it" },
  { from: "Carol", text: "Lunch?" },
  { from: "Bob", text: "Running late" },
  { from: "Alice", text: "No worries" },
  { from: "Carol", text: "See you there" },
];

const groupMessages = (messages: Messages[]): { [key: string]: string[] } => {
  return messages.reduce(
    (acc, val) => {
      acc[val.from] = acc[val.from] || [];
      acc[val.from].push(val.text);
      return acc;
    },
    {} as { [key: string]: string[] },
  );
};

console.log(groupMessages(messages))

// Task: Group all messages by sender.
// Return an object where each key is a sender name and the value is
// an array of their message texts (just the strings, not full objects).
//
// Expected:
// {
//   Alice: ["Hey!", "Got it", "No worries"],
//   Bob: ["Meeting at 3", "Running late"],
//   Carol: ["Lunch?", "See you there"]
// }
