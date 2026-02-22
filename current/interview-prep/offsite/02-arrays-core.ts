// 02 — Arrays (Core)
// 5 problems: easy → medium
// Topics: filter, map, reduce, find, some, every, includes

export {};

// ============================================================
// PROBLEM 1 (easy — confirm filter + map)
// ============================================================

type Products = {
  name: string;
  price: number;
  inStock: boolean;
};

const products = [
  { name: "Laptop", price: 999, inStock: true },
  { name: "Phone", price: 699, inStock: false },
  { name: "Tablet", price: 449, inStock: true },
  { name: "Monitor", price: 349, inStock: true },
  { name: "Keyboard", price: 79, inStock: false },
];

const getProducts = (products: Products[]): string[] => {
  return products.filter((p) => p.inStock && p.price < 500).map((p) => p.name);
};

console.log(getProducts(products));
// Task: Get the names of all products that are in stock
// and cost less than $500.
//
// Expected: ["Tablet", "Monitor"]

// ============================================================
// PROBLEM 2 (easy — confirm reduce)
// ============================================================

const cartItems = [
  { product: "Shirt", price: 25, qty: 2 },
  { product: "Pants", price: 45, qty: 1 },
  { product: "Socks", price: 8, qty: 3 },
  { product: "Hat", price: 15, qty: 1 },
];

type CartItems = {
  product: string;
  price: number;
  qty: number;
};

// Task: Calculate the total cost of the cart (price * qty for each,
// then sum them all).
//
// Expected: 134

const calculateTotalCost = (items: CartItems[]) => {
  return items.reduce((acc, val) => acc + val.price * val.qty, 0);
};

console.log(calculateTotalCost(cartItems));

// ============================================================
// PROBLEM 3 (medium — reduce to group)
// ============================================================

const transactions = [
  { id: "T1", type: "credit", amount: 500 },
  { id: "T2", type: "debit", amount: 150 },
  { id: "T3", type: "credit", amount: 200 },
  { id: "T4", type: "debit", amount: 75 },
  { id: "T5", type: "credit", amount: 350 },
  { id: "T6", type: "debit", amount: 420 },
];

type Transactions = {
  id: string;
  type: string;
  amount: number;
};

const calcTotal = (transactions: Transactions[]): { [key: string]: number } => {
  return transactions.reduce(
    (acc, val) => {
      acc[val.type] = (acc[val.type] || 0) + val.amount;
      return acc;
    },
    {} as { [key: string]: number },
  );
};

console.log(calcTotal(transactions));

// Task: Calculate the total for credits and the total for debits
// separately. Return an object with both.
//
// Expected: { credit: 1050, debit: 645 }

// ============================================================
// PROBLEM 4 (medium — find + some + every)
// ============================================================

type Users = {
  name: string;
  role: string;
  active: boolean;
};

const users = [
  { name: "Alice", role: "admin", active: true },
  { name: "Bob", role: "editor", active: true },
  { name: "Carol", role: "viewer", active: false },
  { name: "Dan", role: "editor", active: true },
  { name: "Eve", role: "admin", active: false },
];

// Task A: Find the first active admin. Return the full object.
// Expected: { name: "Alice", role: "admin", active: true }

const firstActiveAdmin = (
  users: Users[],
): { name: string; role: string; active: boolean } | undefined => {
  return users.find((u) => u.active && u.role === "admin");
};

// Task B: Are there any inactive users?
// Expected: true

users.some((u) => u.active === false);

// Task C: Are ALL editors active?
// Expected: true

users.filter((u) => u.role === "editor").every((u) => u.active);

// ============================================================
// PROBLEM 5 (medium — filter + reduce + math)
// ============================================================

const employees = [
  { name: "Sara", department: "Engineering", salary: 95000 },
  { name: "James", department: "Sales", salary: 72000 },
  { name: "Nina", department: "Engineering", salary: 110000 },
  { name: "Tom", department: "Marketing", salary: 68000 },
  { name: "Priya", department: "Engineering", salary: 88000 },
  { name: "Leo", department: "Sales", salary: 76000 },
];

type Employees = {
  name: string;
  department: string;
  salary: number;
};

const engDpt = (employees: Employees[]): number => {
  const res = employees
    .filter((emp) => emp.department === "Engineering")
    .reduce((acc, val) => {
      acc["total"] = (acc["total"] || 0 ) + val.salary
      acc["count"] = (acc["count"] || 0) + 1
      return acc
    }, {} as {total: number, count: number});

    return Math.round((res.total / res.count))
};

// Task: Find the average salary of the Engineering department.
// Round to the nearest whole number.
//
// Expected: 97667
