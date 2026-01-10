// Session 36 (Day 10, Session 2)
// Level: Beginner (Sessions 31-40: Near-intermediate patterns)
// Date: 2026-01-08
// Focus: includes method, reduce to build lookup, findIndex

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const employees = [
  { id: "E01", name: "Alice Chen", department: "Engineering", level: 3 },
  { id: "E02", name: "Bob Martinez", department: "Sales", level: 2 },
  { id: "E03", name: "Carol Johnson", department: "Engineering", level: 4 },
  { id: "E04", name: "Dan Williams", department: "Marketing", level: 2 },
  { id: "E05", name: "Eve Thompson", department: "HR", level: 3 },
  { id: "E06", name: "Frank Lee", department: "Engineering", level: 2 },
  { id: "E07", name: "Grace Kim", department: "Sales", level: 4 },
  { id: "E08", name: "Grace Kim", department: "Marketing", level: 5 },
];

type EmployeesType = {
  id: string;
  name: string;
  department: string;
  level: number;
};

const priorityDepartments = ["Engineering", "Sales"];

type PriorityDepartments = string[];

const findEmployees = (
  employees: EmployeesType[],
  priorityDepartments: string[]
): string[] => {
  return employees
    .filter((e) => e.level >= 3 && priorityDepartments.includes(e.department))
    .map((e) => {
      return `${e.name} (${e.department})`;
    });
};

console.log(findEmployees(employees, priorityDepartments));

// Task: Find all employees who work in one of the priority departments
// AND have a level of 3 or higher.
// Return an array of strings in the format: "Name (Department)"
//
// Expected output:
// ["Alice Chen (Engineering)", "Carol Johnson (Engineering)", "Grace Kim (Sales)"]

// ============================================================
// PROBLEM 2
// ============================================================

const orders = [
  { orderId: "ORD-101", customerId: "C1", item: "Laptop", qty: 1 },
  { orderId: "ORD-102", customerId: "C2", item: "Mouse", qty: 3 },
  { orderId: "ORD-103", customerId: "C1", item: "Keyboard", qty: 1 },
  { orderId: "ORD-104", customerId: "C3", item: "Monitor", qty: 2 },
  { orderId: "ORD-105", customerId: "C2", item: "Headphones", qty: 1 },
  { orderId: "ORD-106", customerId: "C1", item: "Webcam", qty: 2 },
];

type OrdersType = {
  orderId: string;
  customerId: string;
  item: string;
  qty: number;
};

// Task: Build a lookup object where each customerId maps to an array
// of their order IDs (just the orderId strings, not full order objects).
//
// Expected output:
// {
//   "C1": ["ORD-101", "ORD-103", "ORD-106"],
//   "C2": ["ORD-102", "ORD-105"],
//   "C3": ["ORD-104"]
// }

const lookUpObj = (orders: OrdersType[]): { [key: string]: string[] } => {
  return orders.reduce((acc, val) => {
    acc[val.customerId] = acc[val.customerId] || [];
    acc[val.customerId].push(val.orderId);
    return acc;
  }, {} as { [key: string]: string[] });
};

console.log(lookUpObj(orders));

// ============================================================
// PROBLEM 3
// ============================================================

const queue = [
  { ticketId: "T001", priority: "low", status: "open" },
  { ticketId: "T002", priority: "medium", status: "closed" },
  { ticketId: "T003", priority: "high", status: "closed" },
  { ticketId: "T004", priority: "low", status: "open" },
  { ticketId: "T005", priority: "high", status: "open" },
  { ticketId: "T006", priority: "medium", status: "open" },
  { ticketId: "T007", priority: "high", status: "open" },
];

type QueueType = {
  ticketId: string;
  priority: string;
  status: string;
};

const findPosition = (
  queue: QueueType[]
): { position: number; ticketId: string; ticketsAhead: number } => {
  const ind = queue.findIndex(
    (q) => q.priority === "high" && q.status === "open"
  );

  const q = queue.filter((q, i) => i === ind)[0];

  return { position: ind, ticketId: q.ticketId, ticketsAhead: ind };
};

console.log(findPosition(queue));

// Task: Find the position (0-indexed) of the FIRST ticket that is
// both "high" priority AND has status "open".
//
// Then return an object with:
// - position: the index you found
// - ticketId: the ticketId at that position
// - ticketsAhead: how many tickets come before it in the queue
//
// Expected output:
// { position: 4, ticketId: "T005", ticketsAhead: 4 }
