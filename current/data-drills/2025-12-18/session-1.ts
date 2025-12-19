// Session 13 (Day 4, Session 1)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-18

// ============================================================
// PROBLEM 1
// ============================================================

export = {};

const employees = [
  {
    id: 1,
    name: "Alice Chen",
    department: "Engineering",
    salary: 95000,
    isRemote: true,
  },
  {
    id: 2,
    name: "Bob Martinez",
    department: "Sales",
    salary: 72000,
    isRemote: false,
  },
  {
    id: 3,
    name: "Carol White",
    department: "Engineering",
    salary: 88000,
    isRemote: false,
  },
  {
    id: 4,
    name: "David Kim",
    department: "Marketing",
    salary: 65000,
    isRemote: true,
  },
  {
    id: 5,
    name: "Eva Brown",
    department: "Engineering",
    salary: 102000,
    isRemote: true,
  },
  {
    id: 6,
    name: "Frank Lee",
    department: "Sales",
    salary: 78000,
    isRemote: true,
  },
];

type EmployeesType = {
  id: number;
  name: string;
  department: string;
  salary: number;
  isRemote: boolean;
};

type EmployeesReturnType = {
  name: string;
  formattedSalary: string;
};

const getRemoteEmployees = (
  employees: EmployeesType[]
): EmployeesReturnType[] => {
  return employees
    .filter((e) => e.isRemote && e.salary > 80000)
    .map((e) => {
      const salaryAsString = e.salary.toLocaleString("en-US");
      return {
        formattedSalary: salaryAsString,
        name: e.name,
      };
    });
};

console.log(getRemoteEmployees(employees));

// Task: Get all remote employees who earn more than $80,000.
// Return only their name and a formatted salary string like "$95,000".
//
// Expected output:
// [
//   { name: "Alice Chen", formattedSalary: "$95,000" },
//   { name: "Eva Brown", formattedSalary: "$102,000" }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const orders = [
  {
    orderId: "A101",
    customer: "Acme Corp",
    items: 5,
    pricePerItem: 24.99,
    status: "shipped",
  },
  {
    orderId: "A102",
    customer: "TechStart",
    items: 12,
    pricePerItem: 15.5,
    status: "pending",
  },
  {
    orderId: "A103",
    customer: "Acme Corp",
    items: 3,
    pricePerItem: 89.0,
    status: "shipped",
  },
  {
    orderId: "A104",
    customer: "GlobalInc",
    items: 8,
    pricePerItem: 42.0,
    status: "shipped",
  },
  {
    orderId: "A105",
    customer: "TechStart",
    items: 2,
    pricePerItem: 199.99,
    status: "cancelled",
  },
  {
    orderId: "A106",
    customer: "Acme Corp",
    items: 7,
    pricePerItem: 33.0,
    status: "shipped",
  },
];

type OrdersType = {
  orderId: string;
  customer: string;
  items: number;
  pricePerItem: number;
  status: string;
};

const getTotalRevenue = (orders: OrdersType[]): { [key: string]: number } => {
  return orders
    .filter((o) => o.status === "shipped")
    .reduce((acc, val) => {
      acc[val.customer] =
        (acc[val.customer] || 0) + val.items * val.pricePerItem;
      return acc;
    }, {} as { [key: string]: number });
};

console.log(getTotalRevenue(orders));

// Task: Calculate the total revenue from shipped orders only, grouped by customer.
// Revenue for an order = items * pricePerItem
//
// Expected output:
// {
//   "Acme Corp": 622.95,
//   "GlobalInc": 336
// }
//
// Note: TechStart has no shipped orders, so they should not appear in the result.

// ============================================================
// PROBLEM 3
// ============================================================

const products = [
  {
    sku: "LAPTOP-001",
    name: "Pro Laptop 15",
    category: "Electronics",
    rating: 4.5,
    stock: 23,
  },
  {
    sku: "CHAIR-042",
    name: "Ergonomic Chair",
    category: "Furniture",
    rating: 4.8,
    stock: 0,
  },
  {
    sku: "MOUSE-007",
    name: "Wireless Mouse",
    category: "Electronics",
    rating: 4.2,
    stock: 150,
  },
  {
    sku: "DESK-019",
    name: "Standing Desk",
    category: "Furniture",
    rating: 4.5,
    stock: 12,
  },
  {
    sku: "MONITOR-003",
    name: "4K Monitor",
    category: "Electronics",
    rating: 4.8,
    stock: 8,
  },
  {
    sku: "LAMP-055",
    name: "LED Desk Lamp",
    category: "Furniture",
    rating: 4.2,
    stock: 45,
  },
];

type ProductsType = {
  sku: string;
  name: string;
  category: string;
  rating: number;
  stock: number;
};

const sortProducts = (products: ProductsType[]): ProductsType[] => {
  return products.sort((a, b) => {
    if (a.rating === b.rating) {
      return b.stock - a.stock;
    } else {
      return b.rating - a.rating;
    }
  });
};

console.log(sortProducts(products))

// Task: Sort products by rating (highest first), then by stock (highest first) as a tiebreaker.
// Return the full product objects in sorted order.
//
// Expected output:
// [
//   { sku: "MONITOR-003", name: "4K Monitor", category: "Electronics", rating: 4.8, stock: 8 },
//   { sku: "CHAIR-042", name: "Ergonomic Chair", category: "Furniture", rating: 4.8, stock: 0 },
//   { sku: "LAPTOP-001", name: "Pro Laptop 15", category: "Electronics", rating: 4.5, stock: 23 },
//   { sku: "DESK-019", name: "Standing Desk", category: "Furniture", rating: 4.5, stock: 12 },
//   { sku: "MOUSE-007", name: "Wireless Mouse", category: "Electronics", rating: 4.2, stock: 150 },
//   { sku: "LAMP-055", name: "LED Desk Lamp", category: "Furniture", rating: 4.2, stock: 45 }
// ]
