// Session 23 (Day 6, Session 3)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2025-12-20

// ============================================================
// PROBLEM 1
// ============================================================

export = {};

const projects = [
  { projectId: "P001", team: "Alpha", hoursWorked: 120, budget: 5000 },
  { projectId: "P002", team: "Beta", hoursWorked: 80, budget: 3000 },
  { projectId: "P003", team: "Alpha", hoursWorked: 200, budget: 8000 },
  { projectId: "P004", team: "Beta", hoursWorked: 150, budget: 6000 },
  { projectId: "P005", team: "Gamma", hoursWorked: 60, budget: 2500 },
];

type ProjectsType = {
  projectId: string;
  team: string;
  hoursWorked: number;
  budget: number;
};

const groupProjects = (projects: ProjectsType[]) => {
  const res = projects.reduce((acc, val) => {
    acc[val.team] = acc[val.team] || {
      totalHours: 0,
      totalBudget: 0,
      costPerHour: 0,
    };

    acc[val.team].totalHours += val.hoursWorked;
    acc[val.team].totalBudget += val.budget;
    acc[val.team].costPerHour += val.budget;
    return acc;
  }, {} as { [key: string]: { totalHours: number; totalBudget: number; costPerHour: number } });

  const x = Object.entries(res).map((r) => {
    const key = r[0];
    const obj = r[1];
    const costPerHour = obj.totalBudget / obj.totalHours;
    obj.costPerHour = Number(costPerHour.toFixed(2));
    return [key, obj];
  });

  return Object.fromEntries(x);
};

console.log(groupProjects(projects));

// Task: Group projects by team. For each team, calculate:
// - totalHours (sum of hoursWorked)
// - totalBudget (sum of budget)
// - costPerHour (totalBudget / totalHours, rounded to 2 decimals)
//
// Expected output:
// {
//   "Alpha": { totalHours: 320, totalBudget: 13000, costPerHour: 40.63 },
//   "Beta": { totalHours: 230, totalBudget: 9000, costPerHour: 39.13 },
//   "Gamma": { totalHours: 60, totalBudget: 2500, costPerHour: 41.67 }
// }

// ============================================================
// PROBLEM 2
// ============================================================

const products = [
  { id: 1, name: "Laptop", category: "electronics", price: 999, inStock: true },
  { id: 2, name: "Shirt", category: "clothing", price: 29, inStock: true },
  {
    id: 3,
    name: "Headphones",
    category: "electronics",
    price: 199,
    inStock: false,
  },
  { id: 4, name: "Jeans", category: "clothing", price: 59, inStock: true },
  {
    id: 5,
    name: "Monitor",
    category: "electronics",
    price: 349,
    inStock: true,
  },
  { id: 6, name: "Jacket", category: "clothing", price: 120, inStock: false },
];

type ProductsType = {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

const getAllProducts = (
  products: ProductsType[]
): { id: number; name: string; priceWithTax: number }[] => {
  return products
    .filter((p) => p.category === "electronics" && p.inStock && p.price > 200)
    .map((p) => {
      return {
        id: p.id,
        name: p.name,
        priceWithTax: Number((p.price * 1.08).toFixed(2)),
      };
    });
};

// Task: Get all products that are:
// - in the "electronics" category AND
// - currently in stock AND
// - priced over 200
//
// Return an array with: id, name, and priceWithTax (price * 1.08, rounded to 2 decimals).
//
// Expected output:
// [
//   { id: 1, name: "Laptop", priceWithTax: 1078.92 },
//   { id: 5, name: "Monitor", priceWithTax: 376.92 }
// ]

// ============================================================
// PROBLEM 3
// ============================================================

const candidates = [
  { name: "Alice", experience: 5, testScore: 88, salary: 95000 },
  { name: "Bob", experience: 3, testScore: 92, salary: 80000 },
  { name: "Carol", experience: 5, testScore: 85, salary: 90000 },
  { name: "Dan", experience: 7, testScore: 78, salary: 110000 },
  { name: "Eva", experience: 3, testScore: 92, salary: 75000 },
];

type CandidatesType = {
  name: string;
  experience: number;
  testScore: number;
  salary: number;
};

const sortCandidates = (candidates: CandidatesType[]): CandidatesType[] => {
  return candidates.sort((a, b) => {
    if (a.experience !== b.experience) {
      return b.experience - a.experience;
    } else if (a.testScore !== b.testScore) {
      return b.testScore - a.testScore;
    } else {
      return a.salary - b.salary;
    }
  });
};

// Task: Sort candidates by:
// 1. experience (descending - more experience first)
// 2. If experience is equal, by testScore (descending - higher score first)
// 3. If both are equal, by salary (ascending - lower salary first)
//
// Expected output:
// [
//   { name: "Dan", experience: 7, testScore: 78, salary: 110000 },
//   { name: "Alice", experience: 5, testScore: 88, salary: 95000 },
//   { name: "Carol", experience: 5, testScore: 85, salary: 90000 },
//   { name: "Eva", experience: 3, testScore: 92, salary: 75000 },
//   { name: "Bob", experience: 3, testScore: 92, salary: 80000 }
// ]
