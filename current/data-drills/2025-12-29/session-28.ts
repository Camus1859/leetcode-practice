// Session 28 (Day 7, Session 4)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2026-01-01

export = {};

// ============================================================
// PROBLEM 1
// ============================================================

const previousRoster = [
  { odId: "E001", name: "Alice" },
  { odId: "E002", name: "Bob" },
  { odId: "E003", name: "Carol" },
  { odId: "E005", name: "Eve" },
];

const currentRoster = [
  { odId: "E001", name: "Alice" },
  { odId: "E003", name: "Carol" },
  { odId: "E004", name: "Dan" },
  { odId: "E006", name: "Frank" },
];

// Task: Compare the two rosters and find which employees were ADDED
// (in current but not in previous) and which were REMOVED (in previous but not in current).
//

type RosterType = {
  odId: string;
  name: string;
};

const compare = (
  previousRoster: RosterType[],
  currentRoster: RosterType[]
): { added: RosterType[]; removed: RosterType[] } => {
  const res: { added: RosterType[]; removed: RosterType[] } = {
    added: [],
    removed: [],
  };

  for (const c of currentRoster) {
    const exist = previousRoster.find((p) => p.name === c.name);

    if (!exist) {
      res.added.push(c);
    }
  }

  for (const p of previousRoster) {
    const exist = currentRoster.find((c) => c.name === p.name);

    if (!exist) {
      res.removed.push(p);
    }
  }

  return res;
};

console.log(compare(previousRoster, currentRoster));

// Return an object with two arrays: added and removed.
// Each array should contain the full employee objects.
//
// Expected output:
// {
//   added: [
//     { odId: "E004", name: "Dan" },
//     { odId: "E006", name: "Frank" }
//   ],
//   removed: [
//     { odId: "E002", name: "Bob" },
//     { odId: "E005", name: "Eve" }
//   ]
// }

// ============================================================
// PROBLEM 2
// ============================================================

const users = [
  { userId: "U001", name: "Alice", email: "alice@test.com" },
  { userId: "U002", name: "Bob", email: "bob@test.com" },
  { userId: "U003", name: "Carol", email: "carol@test.com" },
];

type UsersType = {
  userId: string;
  name: string;
  email: string;
};

const orders = [
  { orderId: "ORD-1", userId: "U001", total: 150 },
  { orderId: "ORD-2", userId: "U002", total: 89 },
  { orderId: "ORD-3", userId: "U001", total: 220 },
  { orderId: "ORD-4", userId: "U003", total: 45 },
  { orderId: "ORD-5", userId: "U002", total: 310 },
];

type OrdersType = {
  orderId: string;
  userId: string;
  total: number;
};

type LookUpType = {
  orderId: string;
  userId: string;
  total: number;
  userName: string;
  userEmail: string;
};

const buildLookUp = (
  users: UsersType[],
  orders: OrdersType[]
): { [key: string]: LookUpType } => {
  return orders.reduce((acc, val) => {
    const obj = users.find((u) => u.userId === val.userId);

    acc[val.orderId] = acc[val.orderId] || {
      orderId: val.orderId,
      userId: val.userId,
      total: val.total,
      userName: obj?.name,
      userEmail: obj?.email,
    };
    return acc;
  }, {} as { [key: string]: LookUpType });
};

console.log(buildLookUp(users, orders));

// Task: Build a lookup object where the key is the orderId and the value
// includes the order info PLUS the user's name and email.
//
// Expected output:
// {
//   "ORD-1": { orderId: "ORD-1", userId: "U001", total: 150, userName: "Alice", userEmail: "alice@test.com" },
//   "ORD-2": { orderId: "ORD-2", userId: "U002", total: 89, userName: "Bob", userEmail: "bob@test.com" },
//   "ORD-3": { orderId: "ORD-3", userId: "U001", total: 220, userName: "Alice", userEmail: "alice@test.com" },
//   "ORD-4": { orderId: "ORD-4", userId: "U003", total: 45, userName: "Carol", userEmail: "carol@test.com" },
//   "ORD-5": { orderId: "ORD-5", userId: "U002", total: 310, userName: "Bob", userEmail: "bob@test.com" }
// }

// ============================================================
// PROBLEM 3
// ============================================================

const transactions = [
  { txId: "TX001", accountId: "A100", amount: 500 },
  { txId: "TX002", accountId: "A200", amount: 150 },
  { txId: "TX003", accountId: "A100", amount: 200 },
  { txId: "TX004", accountId: "A300", amount: 75 },
  { txId: "TX005", accountId: "A200", amount: 150 },
  { txId: "TX006", accountId: "A100", amount: 500 },
  { txId: "TX007", accountId: "A400", amount: 300 },
];

type TransactionsType = {
  txId: string;
  accountId: string;
  amount: number;
};

const getDuplicates = (
  transactions: TransactionsType[]
): TransactionsType[] => {
  const res = [];

  for (const t of transactions) {
    const isDuplicate = transactions.some(
      (t2) =>
        t2.accountId === t.accountId &&
        t2.amount === t.amount &&
        t2.txId !== t.txId
    );
    if (isDuplicate) {
      res.push(t);
    }
  }

  return res;
};

console.log(getDuplicates(transactions));

// Task: Find all DUPLICATE transactions. A duplicate is when BOTH accountId AND amount
// are the same as another transaction (but txId is different).
//
// Return an array of the duplicate transactions (include all copies, not just extras).
//
// Expected output:
// [
//   { txId: "TX001", accountId: "A100", amount: 500 },
//   { txId: "TX002", accountId: "A200", amount: 150 },
//   { txId: "TX005", accountId: "A200", amount: 150 },
//   { txId: "TX006", accountId: "A100", amount: 500 }
// ]
//
// (TX003, TX004, TX007 are unique - no other transaction has same accountId + amount)
