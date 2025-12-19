// ============================================
// SESSION 6 - December 15, 2025
// Difficulty: Beginner
// Methods: filter, reduce, some
// ============================================

// ============================================
// PROBLEM 16
// ============================================

export = {};

const transactions = [
  { id: 1, type: "deposit", amount: 500, status: "completed" },
  { id: 2, type: "withdrawal", amount: 200, status: "completed" },
  { id: 3, type: "deposit", amount: 150, status: "pending" },
  { id: 4, type: "withdrawal", amount: 75, status: "completed" },
  { id: 5, type: "deposit", amount: 1000, status: "failed" },
  { id: 6, type: "withdrawal", amount: 50, status: "completed" },
];

type TransactionsType = {
  id: number;
  type: string;
  amount: number;
  status: string;
};

type TransactionReturnedType = Omit<TransactionsType, "status" | "type">;

const completedTransactions = (
  transactions: TransactionsType[]
): TransactionReturnedType[] => {
  return transactions
    .filter((t) => t.status === "completed")
    .map((t) => {
      return {
        id: t.id,
        amount: t.amount,
      };
    });
};

console.log(completedTransactions(transactions));

// Task: Get all completed withdrawals.
// Return only the id and amount for each matching transaction.

// Expected results:
// Given the transactions above → should return:
// [
//   { id: 2, amount: 200 },
//   { id: 4, amount: 75 },
//   { id: 6, amount: 50 }
// ]

// Test case 2:
const transactions2 = [
  { id: 1, type: "deposit", amount: 500, status: "completed" },
  { id: 2, type: "withdrawal", amount: 200, status: "pending" },
];
// → should return: [] (no completed withdrawals)

// ============================================
// PROBLEM 17
// ============================================

const orders = [
  { orderId: "A1", customer: "Alice", items: 3, total: 45.0 },
  { orderId: "A2", customer: "Bob", items: 1, total: 15.0 },
  { orderId: "A3", customer: "Alice", items: 2, total: 30.0 },
  { orderId: "A4", customer: "Carol", items: 5, total: 75.0 },
  { orderId: "A5", customer: "Bob", items: 2, total: 28.0 },
  { orderId: "A6", customer: "Alice", items: 1, total: 12.0 },
];

type OrdersType = {
  orderId: string;
  customer: string;
  items: number;
  total: number;
};

const calculateTask = (
  orders: OrdersType[]
): { [key: string]: { [key: string]: number } } => {
  return orders.reduce((acc, val) => {
    acc[val.customer] = acc[val.customer] || { orderCount: 0, totalSpent: 0 };
    acc[val.customer].orderCount += val.items;
    acc[val.customer].totalSpent += val.total;
    return acc;
  }, {} as { [key: string]: { [key: string]: number } });
};

console.log(calculateTask(orders));

// Task: Calculate stats per customer.
// For each customer, return their total number of orders and total amount spent.

// Expected results:
// Given the orders above → should return:
// {
//   Alice: { orderCount: 3, totalSpent: 87 },
//   Bob: { orderCount: 2, totalSpent: 43 },
//   Carol: { orderCount: 1, totalSpent: 75 }
// }

// Test case 2:
const orders2 = [{ orderId: "B1", customer: "Dan", items: 4, total: 100.0 }];
// → should return: { Dan: { orderCount: 1, totalSpent: 100 } }

// ============================================
// PROBLEM 18
// ============================================

const tickets = [
  { id: 1, title: "Login broken", priority: "low", assignee: "Alex" },
  { id: 2, title: "Payment failed", priority: "high", assignee: "Jordan" },
  { id: 3, title: "UI glitch", priority: "medium", assignee: "Alex" },
  { id: 4, title: "Data missing", priority: "low", assignee: "Sam" },
];

type TicketsType = {
  id: number;
  title: string;
  priority: string;
  assignee: string;
};

const getHighPriorityTickets = (tickets: TicketsType[]): boolean => {
  return tickets.some((t) => t.priority === "high");
};

// Task: Check if there are ANY high-priority tickets in the list.
// Return true if at least one ticket has priority "high", false otherwise.

// Expected results:
// Given the tickets above → should return: true

// Test case 2:
const tickets2 = [
  { id: 1, title: "Minor bug", priority: "low", assignee: "Alex" },
  { id: 2, title: "Typo fix", priority: "low", assignee: "Jordan" },
];
// → should return: false

// Test case 3:
const tickets3 = [];
// → should return: false (empty array has no high priority tickets)
