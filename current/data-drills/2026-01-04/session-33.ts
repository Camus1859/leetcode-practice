// Session 33 (Day 9, Session 3)
// Level: Beginner (Sessions 31-40: Near-intermediate patterns)
// Date: 2026-01-04
// Focus: Reinforcing filter vs map decision-making

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const users = [
  { id: 1, firstName: "John", lastName: "Doe", role: "admin" },
  { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
  { id: 3, firstName: "Bob", lastName: "Wilson", role: "user" },
  { id: 4, firstName: "Alice", lastName: "Jones", role: "moderator" },
];

// Task: Transform each user into a display format.
// Combine firstName and lastName into a single "fullName" field.
// Keep id and role.
//
// Expected output:
// [
//   { id: 1, fullName: "John Doe", role: "admin" },
//   { id: 2, fullName: "Jane Smith", role: "user" },
//   { id: 3, fullName: "Bob Wilson", role: "user" },
//   { id: 4, fullName: "Alice Jones", role: "moderator" }
// ]

const x = users.map((u) => {
  const fullName = u.firstName + " " + u.lastName;

  return {
    id: u.id,
    fullName,
    role: u.role,
  };
});

console.log(x);

// ============================================================
// PROBLEM 2
// ============================================================

const transactions = [
  { id: "T001", type: "purchase", amount: 150, status: "completed" },
  { id: "T002", type: "refund", amount: 50, status: "completed" },
  { id: "T003", type: "purchase", amount: 200, status: "pending" },
  { id: "T004", type: "purchase", amount: 75, status: "completed" },
  { id: "T005", type: "refund", amount: 30, status: "failed" },
  { id: "T006", type: "purchase", amount: 300, status: "completed" },
];

// Task: Get all completed purchases.
// Return the full transaction objects (no transformation needed).
//
// Expected output:
// [
//   { id: "T001", type: "purchase", amount: 150, status: "completed" },
//   { id: "T004", type: "purchase", amount: 75, status: "completed" },
//   { id: "T006", type: "purchase", amount: 300, status: "completed" }
// ]

const y = transactions.filter(
  (t) => t.type === "purchase" && t.status === "completed"
);
console.log(y);

// ============================================================
// PROBLEM 3
// ============================================================

const emails = [
  "john.doe@company.com",
  "jane.smith@company.com",
  "bob.wilson@external.org",
  "alice.jones@company.com",
  "charlie.brown@external.org",
];

const extract = (emails: string[]) => {
  const res: string[] = [];

  emails
    .filter((e) => e.includes("company.com"))
    .map((e) => {
      const prefix = e.split("@")[0].toUpperCase();
      res.push(prefix);
    });

  return res;
};

console.log(extract(emails))

// Task: Extract usernames from company.com emails only.
// Username is the part before the @ symbol.
// Return as an array of uppercase usernames.
//
// Expected output:
// ["JOHN.DOE", "JANE.SMITH", "ALICE.JONES"]
