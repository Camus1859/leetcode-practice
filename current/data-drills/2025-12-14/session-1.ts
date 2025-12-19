// Data Drills - Round 2, Session 1
// Date: 2025-12-14
// Difficulty: Beginner (Week 1)
// Time: 30 minutes total (10 min per problem)

// ============================================================
// PROBLEM 1
// ============================================================

export = {};
const employees = [
  { id: 1, name: "Alice", department: "Engineering", active: true },
  { id: 2, name: "Bob", department: "Sales", active: false },
  { id: 3, name: "Carol", department: "Engineering", active: true },
  { id: 4, name: "Dave", department: "Marketing", active: true },
  { id: 5, name: "Eve", department: "Sales", active: true },
  { id: 6, name: "Frank", department: "Engineering", active: false },
];

type EmployeesType = {
  id: number;
  name: string;
  department: string;
  active: boolean;
};

const getEmployees = (employees: EmployeesType[]): string[] => {
  return employees.filter((e) => e.active).map((e) => e.name);
};

console.log(getEmployees(employees));

// Task: Get a list of just the names of all active employees.

// Expected results:
// Given the employees array above → ["Alice", "Carol", "Dave", "Eve"]

// ============================================================
// PROBLEM 2
// ============================================================

const orders = [
  { id: 101, product: "Laptop", category: "Electronics", quantity: 2 },
  { id: 102, product: "Desk Chair", category: "Furniture", quantity: 1 },
  { id: 103, product: "Monitor", category: "Electronics", quantity: 3 },
  { id: 104, product: "Bookshelf", category: "Furniture", quantity: 2 },
  { id: 105, product: "Keyboard", category: "Electronics", quantity: 5 },
  { id: 106, product: "Lamp", category: "Furniture", quantity: 4 },
];

type OrdersType = {
  id: number;
  product: string;
  category: string;
  quantity: number;
};

const getOrders = (orders: OrdersType[]): { [key: string]: number } => {
  return orders.reduce((acc, val) => {
    acc[val.category] = (acc[val.category] || 0) + val.quantity;

    return acc;
  }, {} as { [key: string]: number });
};

console.log(getOrders(orders));

// Task: Count the total quantity of items ordered in each category.

// Expected results:
// Given the orders array above → { Electronics: 10, Furniture: 7 }

// ============================================================
// PROBLEM 3
// ============================================================

const transactions = [
  { id: "t1", account: "checking", amount: 500 },
  { id: "t2", account: "savings", amount: 200 },
  { id: "t3", account: "checking", amount: -150 },
  { id: "t4", account: "checking", amount: 300 },
  { id: "t5", account: "savings", amount: -50 },
  { id: "t6", account: "savings", amount: 400 },
];

type TransactionType = {
  id: string;
  account: string;
  amount: number;
};

const getTransaction = (
  transactions: TransactionType[]
): { [key: string]: number } => {
  return transactions.reduce((acc, val) => {
    acc[val.account] = (acc[val.account] || 0) + val.amount;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(getTransaction(transactions))

// Task: Calculate the final balance for each account (sum of all amounts).

// Expected results:
// Given the transactions array above → { checking: 650, savings: 550 }

// ============================================================
// YOUR SOLUTIONS BELOW
// ============================================================
