// 03b — Arrays (Single Data Structure)
// 4 problems: medium → hard
// Topics: chaining, grouping, nested data, reduce + sort
// Rule: every problem uses ONE array — no cross-referencing two datasets

export {};

// ============================================================
// PROBLEM 1 (medium — group + aggregate + sort)
// ============================================================

const employees = [
  { name: "Sara", department: "Engineering", salary: 95000 },
  { name: "James", department: "Sales", salary: 72000 },
  { name: "Nina", department: "Engineering", salary: 110000 },
  { name: "Tom", department: "Marketing", salary: 68000 },
  { name: "Priya", department: "Engineering", salary: 88000 },
  { name: "Leo", department: "Sales", salary: 76000 },
  { name: "Gina", department: "Marketing", salary: 91000 },
];

type Employees = {
  name: string;
  department: string;
  salary: number;
};

type Res = { department: string; topEarner: string; salary: number };

const grouping = (
  employees: Employees[],
): { department: string; topEarner: string; salary: number }[] => {
  const res = employees.reduce(
    (acc, val) => {
      acc[val.department] = {
        department: val.department,
        topEarner: acc[val.department]?.topEarner || "",
        salary: acc[val.department]?.salary || 0,
      };

      if (acc[val.department].salary < val.salary) {
        acc[val.department].salary = val.salary;
        acc[val.department].topEarner = val.name;
      }
      return acc;
    },
    {} as { [key: string]: Res },
  );

  return Object.values(res).sort((a: Res, b: Res) =>
    a.department.localeCompare(b.department),
  );
};

console.log(grouping(employees));

// Task: For each department, find the top earner.
// Return an array of { department, topEarner, salary },
// sorted alphabetically by department.
//
// Expected:
// [
//   { department: "Engineering", topEarner: "Nina", salary: 110000 },
//   { department: "Marketing", topEarner: "Gina", salary: 91000 },
//   { department: "Sales", topEarner: "Leo", salary: 76000 },
// ]

// ============================================================
// PROBLEM 2 (medium — calculate aggregate, then filter + map)
// ============================================================

const scores = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 72 },
  { name: "Carol", score: 95 },
  { name: "Dan", score: 60 },
  { name: "Eve", score: 84 },
  { name: "Frank", score: 77 },
];

type Scores = {
  name: string;
  score: number;
};

const studentsScores = (
  scores: Scores[],
): { name: string; score: number; pointsAboveAverage: number }[] => {
  const numberOfScores = scores.length;
  const totalScore = scores.reduce((acc, val) => acc + val.score, 0);
  const avgScore = totalScore / numberOfScores;

  return scores
    .filter((s) => s.score > avgScore)
    .map((s) => {
      return {
        name: s.name,
        score: s.score,
        pointsAboveAverage: Number((s.score - avgScore).toFixed(1)),
      };
    })
    .sort((a, b) => b.score - a.score);
};

console.log(studentsScores(scores));

// Task: Find all students who scored above the average score.
// Return { name, score, pointsAboveAverage } for each,
// sorted by score descending. Round pointsAboveAverage to 1 decimal.
//
// Expected (average is 79.3):
// [
//   { name: "Carol", score: 95, pointsAboveAverage: 15.7 },
//   { name: "Alice", score: 88, pointsAboveAverage: 8.7 },
//   { name: "Eve", score: 84, pointsAboveAverage: 4.7 },
// ]

// ============================================================
// PROBLEM 3 (hard — nested data, filter + map with inner reduce)
// ============================================================

type Items = {
  product: string;
  qty: number;
  price: number;
};

type Orders = {
  orderId: string;
  customer: string;
  items: Items[];
};
const orders = [
  {
    orderId: "O1",
    customer: "Acme Corp",
    items: [
      { product: "Desk", qty: 2, price: 250 },
      { product: "Chair", qty: 4, price: 85 },
    ],
  },
  {
    orderId: "O2",
    customer: "Globex",
    items: [
      { product: "Laptop", qty: 1, price: 999 },
      { product: "Mouse", qty: 2, price: 29 },
    ],
  },
  {
    orderId: "O3",
    customer: "Initech",
    items: [
      { product: "Notebook", qty: 10, price: 4 },
      { product: "Pen", qty: 20, price: 1 },
    ],
  },
  {
    orderId: "O4",
    customer: "Umbrella",
    items: [
      { product: "Monitor", qty: 3, price: 350 },
      { product: "Keyboard", qty: 3, price: 79 },
    ],
  },
];

const getOrders = (
  orders: Orders[],
): { orderId: string; customer: string; total: number }[] => {
  return orders
    .filter((o) => {
      const items = o.items;
      const total = items.reduce((acc, val) => acc + val.qty * val.price, 0);
      return total > 500 ? true : false;
    })
    .map((o) => {
      const items = o.items;
      const total = items.reduce((acc, val) => acc + val.qty * val.price, 0);
      return {
        orderId: o.orderId,
        customer: o.customer,
        total,
      };
    })
    .sort((a, b) => b.total - a.total);
};

console.log(getOrders(orders));

// Task: Find all orders where the total cost (sum of qty * price
// across all items) exceeds $500.
// Return { orderId, customer, total } sorted by total descending.
//
// Expected:
// [
//   { orderId: "O4", customer: "Umbrella", total: 1287 },
//   { orderId: "O2", customer: "Globex", total: 1057 },
//   { orderId: "O1", customer: "Acme Corp", total: 840 },
// ]

// ============================================================
// PROBLEM 4 (hard — nested data, filter + map + some + reduce)
// ============================================================

const events = [
  {
    name: "Tech Summit",
    date: "2026-03-10",
    attendees: [
      { name: "Alice", paid: true },
      { name: "Bob", paid: false },
      { name: "Carol", paid: true },
    ],
  },
  {
    name: "Design Conf",
    date: "2026-03-15",
    attendees: [
      { name: "Dan", paid: true },
      { name: "Eve", paid: true },
    ],
  },
  {
    name: "Sales Kickoff",
    date: "2026-03-20",
    attendees: [
      { name: "Frank", paid: false },
      { name: "Grace", paid: false },
      { name: "Hank", paid: true },
      { name: "Ivy", paid: false },
    ],
  },
];

// Task: Find all events that have at least one attendee who hasn't paid.
// Return { name, totalAttendees, unpaidCount } for each,
// sorted by unpaidCount descending.
//
// Expected:
// [
//   { name: "Sales Kickoff", totalAttendees: 4, unpaidCount: 3 },
//   { name: "Tech Summit", totalAttendees: 3, unpaidCount: 1 },
// ]
