// Session 21 (Day 6, Session 1)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2025-12-20

// ============================================================
// PROBLEM 1
// ============================================================

export = {}

const employees = [
  { id: "E001", name: "Alice", department: "Engineering", salary: 95000, yearsAtCompany: 3 },
  { id: "E002", name: "Bob", department: "Sales", salary: 72000, yearsAtCompany: 5 },
  { id: "E003", name: "Carol", department: "Engineering", salary: 88000, yearsAtCompany: 2 },
  { id: "E004", name: "Dan", department: "Sales", salary: 68000, yearsAtCompany: 1 },
  { id: "E005", name: "Eva", department: "Engineering", salary: 102000, yearsAtCompany: 4 },
  { id: "E006", name: "Frank", department: "HR", salary: 65000, yearsAtCompany: 6 },
];


type EmployeesType = {
  id: string,
  name: string,
  department: string,
  salary: number,
  yearsAtCompany: number
}

const groupEmployees = (employees: EmployeesType[]): {[key:string]: {headcount: number, totalSalary: number, avgYears: number}} => {

  return employees.reduce((acc, val) => {

    acc[val.department] = (acc[val.department] ||  { headcount: 0, totalSalary: 0, avgYears: 0 })
    acc[val.department].headcount + 1
    acc[val.department].totalSalary 





  },
  {} as { [key: string]: { headcount: number; totalSalary: number; avgYears: number } });




}

// Task: Group employees by department. For each department, calculate:
// - headcount (number of employees)
// - totalSalary (sum of all salaries)
// - avgYears (average yearsAtCompany, rounded to 1 decimal)
//
// Expected output:
// {
//   "Engineering": { headcount: 3, totalSalary: 285000, avgYears: 3.0 },
//   "Sales": { headcount: 2, totalSalary: 140000, avgYears: 3.0 },
//   "HR": { headcount: 1, totalSalary: 65000, avgYears: 6.0 }
// }

// ============================================================
// PROBLEM 2
// ============================================================

const orders = [
  { orderId: "ORD-1", customerId: "C1", items: 3, total: 89.50, isPriority: true },
  { orderId: "ORD-2", customerId: "C2", items: 1, total: 24.99, isPriority: false },
  { orderId: "ORD-3", customerId: "C1", items: 5, total: 156.00, isPriority: true },
  { orderId: "ORD-4", customerId: "C3", items: 2, total: 45.00, isPriority: false },
  { orderId: "ORD-5", customerId: "C2", items: 4, total: 112.75, isPriority: true },
  { orderId: "ORD-6", customerId: "C1", items: 1, total: 19.99, isPriority: false },
];

// Task: Get all priority orders and transform them.
// Return an array with: orderId, customerId, and avgItemPrice (total / items, rounded to 2 decimals).
// Sort by avgItemPrice descending.
//
// Expected output:
// [
//   { orderId: "ORD-3", customerId: "C1", avgItemPrice: 31.20 },
//   { orderId: "ORD-1", customerId: "C1", avgItemPrice: 29.83 },
//   { orderId: "ORD-5", customerId: "C2", avgItemPrice: 28.19 }
// ]

// ============================================================
// PROBLEM 3
// ============================================================

const tickets = [
  { ticketId: "T001", assignee: "Alice", priority: "high", hoursLogged: 4 },
  { ticketId: "T002", assignee: "Bob", priority: "low", hoursLogged: 1 },
  { ticketId: "T003", assignee: "Alice", priority: "medium", hoursLogged: 6 },
  { ticketId: "T004", assignee: "Carol", priority: "high", hoursLogged: 8 },
  { ticketId: "T005", assignee: "Bob", priority: "high", hoursLogged: 3 },
  { ticketId: "T006", assignee: "Alice", priority: "low", hoursLogged: 2 },
];

// Task: Find the first ticket where the assignee has logged more than 5 hours
// AND the priority is NOT "low".
// Return the full ticket object, or undefined if none match.
//
// Expected output:
// { ticketId: "T003", assignee: "Alice", priority: "medium", hoursLogged: 6 }
