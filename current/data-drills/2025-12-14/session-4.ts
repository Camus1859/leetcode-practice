// Data Drills - Round 2, Session 4
// Date: 2025-12-14
// Difficulty: Beginner
// Time: ~30 minutes total (~10 min per problem)

// ============================================================
// PROBLEM 10 - map (transform objects)
// ============================================================

export = {};
const employees = [
  { id: 1, firstName: "Alice", lastName: "Smith", salary: 75000 },
  { id: 2, firstName: "Bob", lastName: "Jones", salary: 82000 },
  { id: 3, firstName: "Carol", lastName: "Williams", salary: 68000 },
  { id: 4, firstName: "Dave", lastName: "Brown", salary: 91000 },
];

type EmployeesType = {
  id: number;
  firstName: string;
  lastName: string;
  salary: number;
};

// Task: Create a new array where each employee object has:
// - fullName (firstName + " " + lastName)
// - annualBonus (10% of salary)
// Keep id and salary as well.

// Expected results:
// [
//   { id: 1, fullName: "Alice Smith", salary: 75000, annualBonus: 7500 },
//   { id: 2, fullName: "Bob Jones", salary: 82000, annualBonus: 8200 },
//   { id: 3, fullName: "Carol Williams", salary: 68000, annualBonus: 6800 },
//   { id: 4, fullName: "Dave Brown", salary: 91000, annualBonus: 9100 },
// ]

type EmployeeReturn = {
  id: number;
  fullName: string;
  salary: number;
  annualBonus: number;
};

const createEmployee = (employees: EmployeesType[]): EmployeeReturn[] => {
  return employees.map((e) => {
    return {
      fullName: e.firstName + " " + e.lastName,
      annualBonus: e.salary * 0.01,
      id: e.id,
      salary: e.salary,
    };
  });
};

console.log(createEmployee(employees));

// ============================================================
// PROBLEM 11 - reduce (sum multiple fields)
// ============================================================

const invoices = [
  { id: 101, client: "Acme Corp", amount: 1500, paid: true },
  { id: 102, client: "Globex", amount: 2300, paid: false },
  { id: 103, client: "Initech", amount: 890, paid: true },
  { id: 104, client: "Umbrella", amount: 3200, paid: false },
  { id: 105, client: "Acme Corp", amount: 750, paid: true },
];

type InvoicesType = {
  id: number;
  client: string;
  amount: number;
  paid: boolean;
};

const createInvoice = (invoices: InvoicesType[]): { [key: string]: number } => {
  return invoices.reduce((acc, val) => {
    val.paid === true
      ? (acc["paidTotal"] = (acc["paidTotal"] || 0) + val.amount)
      : (acc["unpaidTotal"] = (acc["unpaidTotal"] || 0) + val.amount);
    return acc;
  }, {} as { [key: string]: number });
};

console.log(createInvoice(invoices));

// Task: Calculate the total amount for paid invoices AND the total amount for unpaid invoices.
// Return an object with both totals.

// Expected results:
// { paidTotal: 3140, unpaidTotal: 5500 }

// ============================================================
// PROBLEM 12 - sort
// ============================================================

const scores = [
  { name: "Alice", score: 87 },
  { name: "Bob", score: 92 },
  { name: "Carol", score: 78 },
  { name: "Dave", score: 92 },
  { name: "Eve", score: 85 },
];

type ScoresType = {
  name: string;
  score: number;
};

const getScores = (scores: ScoresType[]): { name: string; score: number }[] => {
  return scores.sort((a, b) => {
    if (a.score === b.score) {
      return a.name.localeCompare(b.name);
    }
    return b.score - a.score;
  });
};

console.log(getScores(scores));

// Task: Sort the scores array by score in descending order (highest first).
// If two people have the same score, sort them alphabetically by name.

// Expected results:
// [
//   { name: "Bob", score: 92 },
//   { name: "Dave", score: 92 },
//   { name: "Alice", score: 87 },
//   { name: "Eve", score: 85 },
//   { name: "Carol", score: 78 },
// ]

// ============================================================
// YOUR SOLUTIONS BELOW
// ============================================================
