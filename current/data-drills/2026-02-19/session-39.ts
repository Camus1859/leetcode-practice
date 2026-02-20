// Session 39
// Date: 2026-02-19
// Reinforcement drill — 2 problems like P1, 2 problems like P2 from Session 38

export {};

// ============================================================
// PROBLEM 1 (P1-style: filter + aggregate + multi-condition)
// ============================================================

const employees = [
  { id: "ENG-01", name: "Sara", department: "Engineering" },
  { id: "ENG-07", name: "Tom", department: "Engineering" },
  { id: "MKT-03", name: "Lena", department: "Marketing" },
  { id: "ENG-12", name: "James", department: "Engineering" },
  { id: "MKT-08", name: "Nina", department: "Marketing" },
  { id: "ENG-20", name: "Roy", department: "Engineering" },
];

const tasks = [
  { assignee: "ENG-01", project: "Atlas", hours: 12 },
  { assignee: "ENG-01", project: "Atlas", hours: 8 },
  { assignee: "ENG-01", project: "Beacon", hours: 5 },
  { assignee: "ENG-07", project: "Atlas", hours: 20 },
  { assignee: "ENG-07", project: "Atlas", hours: 15 },
  { assignee: "MKT-03", project: "Campaign", hours: 10 },
  { assignee: "MKT-03", project: "Campaign", hours: 6 },
  { assignee: "ENG-12", project: "Beacon", hours: 4 },
  { assignee: "ENG-12", project: "Beacon", hours: 3 },
  { assignee: "MKT-08", project: "Campaign", hours: 25 },
  { assignee: "ENG-20", project: "Atlas", hours: 6 },
  { assignee: "ENG-20", project: "Atlas", hours: 9 },
  { assignee: "ENG-20", project: "Beacon", hours: 10 },
];

// Task: Find all employees where:
//   - The employee id starts with "ENG-" (engineering only)
//   - The employee has logged at least 3 tasks
//   - The total hours logged is 20 or more
//
// For each matching employee, return an object with their name,
// the number of tasks they logged, and total hours.
//
// Expected output:
// [
//   { name: "Sara", taskCount: 3, totalHours: 25 },
//   { name: "Roy", taskCount: 3, totalHours: 25 },
// ]

// ============================================================
// PROBLEM 2 (P1-style: filter + aggregate + multi-condition)
// ============================================================

const stores = [
  { storeId: "WEST-10", city: "Seattle" },
  { storeId: "WEST-22", city: "Portland" },
  { storeId: "EAST-05", city: "Boston" },
  { storeId: "WEST-38", city: "San Francisco" },
  { storeId: "EAST-11", city: "New York" },
];

const sales = [
  { storeId: "WEST-10", amount: 450 },
  { storeId: "WEST-10", amount: 320 },
  { storeId: "WEST-10", amount: 510 },
  { storeId: "WEST-10", amount: 280 },
  { storeId: "WEST-22", amount: 600 },
  { storeId: "WEST-22", amount: 150 },
  { storeId: "EAST-05", amount: 900 },
  { storeId: "EAST-05", amount: 850 },
  { storeId: "EAST-05", amount: 700 },
  { storeId: "WEST-38", amount: 200 },
  { storeId: "WEST-38", amount: 180 },
  { storeId: "WEST-38", amount: 220 },
  { storeId: "WEST-38", amount: 400 },
  { storeId: "WEST-38", amount: 350 },
  { storeId: "EAST-11", amount: 500 },
  { storeId: "EAST-11", amount: 475 },
];

// Task: Find all stores where:
//   - The storeId starts with "WEST-" (west region only)
//   - The store has at least 3 transactions
//   - The average transaction amount is $300 or higher
//
// For each matching store, return an object with the city,
// the number of transactions, and the average amount rounded
// to the nearest whole number.
//
// Expected output:
// [
//   { city: "Seattle", transactionCount: 4, avgAmount: 390 },
// ]

// ============================================================
// PROBLEM 3 (P2-style: flatten nested structure)
// ============================================================

const school = [
  {
    grade: "9th",
    classes: [
      { subject: "Math", students: ["Ava", "Ben", "Chloe"] },
      { subject: "English", students: ["David", "Ella"] },
    ],
  },
  {
    grade: "10th",
    classes: [
      { subject: "Science", students: ["Finn", "Gina"] },
      { subject: "History", students: ["Hugo", "Iris", "Jack"] },
    ],
  },
  {
    grade: "11th",
    classes: [{ subject: "Art", students: ["Kara"] }],
  },
];

// Task: Flatten this nested structure into a single array where each
// entry contains a student's name, the subject they're in, and their
// grade level. The order should match the order they appear in the data.
//
// Expected output:
// [
//   { name: "Ava", subject: "Math", grade: "9th" },
//   { name: "Ben", subject: "Math", grade: "9th" },
//   { name: "Chloe", subject: "Math", grade: "9th" },
//   { name: "David", subject: "English", grade: "9th" },
//   { name: "Ella", subject: "English", grade: "9th" },
//   { name: "Finn", subject: "Science", grade: "10th" },
//   { name: "Gina", subject: "Science", grade: "10th" },
//   { name: "Hugo", subject: "History", grade: "10th" },
//   { name: "Iris", subject: "History", grade: "10th" },
//   { name: "Jack", subject: "History", grade: "10th" },
//   { name: "Kara", subject: "Art", grade: "11th" },
// ]

// ============================================================
// PROBLEM 4 (P2-style: flatten nested structure)
// ============================================================

const warehouse = [
  {
    zone: "A",
    aisles: [
      { aisleId: "A1", items: ["Bolts", "Screws", "Nails"] },
      { aisleId: "A2", items: ["Hammers", "Wrenches"] },
    ],
  },
  {
    zone: "B",
    aisles: [
      { aisleId: "B1", items: ["Paint", "Brushes"] },
      { aisleId: "B2", items: ["Tape"] },
      { aisleId: "B3", items: ["Ladders", "Tarps", "Ropes", "Gloves"] },
    ],
  },
];

// Task: Flatten this nested structure into a single array where each
// entry contains the item name, the aisleId it's stored in, and the
// zone. The order should match the order they appear in the data.
//
// Expected output:
// [
//   { item: "Bolts", aisleId: "A1", zone: "A" },
//   { item: "Screws", aisleId: "A1", zone: "A" },
//   { item: "Nails", aisleId: "A1", zone: "A" },
//   { item: "Hammers", aisleId: "A2", zone: "A" },
//   { item: "Wrenches", aisleId: "A2", zone: "A" },
//   { item: "Paint", aisleId: "B1", zone: "B" },
//   { item: "Brushes", aisleId: "B1", zone: "B" },
//   { item: "Tape", aisleId: "B2", zone: "B" },
//   { item: "Ladders", aisleId: "B3", zone: "B" },
//   { item: "Tarps", aisleId: "B3", zone: "B" },
//   { item: "Ropes", aisleId: "B3", zone: "B" },
//   { item: "Gloves", aisleId: "B3", zone: "B" },
// ]
