// Session 11 | Tuesday, December 16, 2025 | ~30 minutes

export = {};

// PROBLEM 1

const transactions = [
  { id: 1, amount: 150, type: "credit" },
  { id: 2, amount: 50, type: "debit" },
  { id: 3, amount: 200, type: "credit" },
  { id: 4, amount: 75, type: "debit" },
  { id: 5, amount: 300, type: "credit" },
];

type TransactionsType = {
  id: number;
  amount: number;
  type: string;
};

type TransactionReturnType = TransactionsType & { balance: number };

const addBalance = (
  transactions: TransactionsType[]
): TransactionReturnType[] => {
  return transactions.map((t) => {
    if (t.type === "debit") {
      return {
        balance: -t.amount,
        ...t,
      };
    } else
      return {
        balance: t.amount,
        ...t,
      };
  });
};

console.log(addBalance(transactions));

// Task: Transform each transaction to include a "balance" field.
// For "credit" type, balance = amount (positive).
// For "debit" type, balance = -amount (negative).
// Keep all original fields.
// Expected: [{ id: 1, amount: 150, type: "credit", balance: 150 }, { id: 2, amount: 50, type: "debit", balance: -50 }, ...]

// PROBLEM 2

type TasksType = {
  id: number;
  assignee: string;
  status: string;
};

const tasks = [
  { id: 1, assignee: "Alice", status: "done" },
  { id: 2, assignee: "Bob", status: "in-progress" },
  { id: 3, assignee: "Alice", status: "in-progress" },
  { id: 4, assignee: "Carol", status: "done" },
  { id: 5, assignee: "Bob", status: "done" },
  { id: 6, assignee: "Alice", status: "done" },
];

const groupTask = (tasks: TasksType[]): { [key: string]: number[] } => {
  return tasks.reduce((acc, val) => {
    acc[val.assignee] = acc[val.assignee] || [];
    acc[val.assignee].push(val.id);
    return acc;
  }, {} as { [key: string]: number[] });
};

console.log(groupTask(tasks))

// Task: Group tasks by assignee. Each assignee should have an array of their task IDs.
// Expected: { Alice: [1, 3, 6], Bob: [2, 5], Carol: [4] }

// PROBLEM 3

const orders = [
  { orderId: "X1", customer: "John", total: 250, shipped: true },
  { orderId: "X2", customer: "Sarah", total: 180, shipped: false },
  { orderId: "X3", customer: "Mike", total: 320, shipped: true },
  { orderId: "X4", customer: "John", total: 95, shipped: true },
];

type OrdersType = {
  orderId: string,
  customer: string,
  total: number,
  shipped: boolean
}

const findOrder = (orders: OrdersType[]): OrdersType | undefined => {
  return orders.find((o)=> o.shipped === false)
}

// Task: Find the first order that has NOT been shipped. Return the full order object, or undefined if all are shipped.
// Expected: { orderId: "X2", customer: "Sarah", total: 180, shipped: false }
