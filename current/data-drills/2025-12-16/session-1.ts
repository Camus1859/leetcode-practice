// Session 9 | Tuesday, December 16, 2025 | ~30 minutes

// PROBLEM 1

export = {};

const employees = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering",
    salary: 85000,
    isRemote: true,
  },
  { id: 2, name: "Bob", department: "Sales", salary: 62000, isRemote: false },
  {
    id: 3,
    name: "Carol",
    department: "Engineering",
    salary: 92000,
    isRemote: false,
  },
  {
    id: 4,
    name: "David",
    department: "Marketing",
    salary: 58000,
    isRemote: true,
  },
  {
    id: 5,
    name: "Eve",
    department: "Engineering",
    salary: 78000,
    isRemote: true,
  },
  { id: 6, name: "Frank", department: "Sales", salary: 71000, isRemote: false },
];

type EmployeesType = {
  id: number;
  name: string;
  department: string;
  salary: number;
  isRemote: boolean;
};

type EmployeesReturnType = Omit<
  EmployeesType,
  "id" | "department" | "isRemote"
>;

const getEmployees = (employees: EmployeesType[]): EmployeesReturnType[] => {
  return employees
    .filter((e) => e.isRemote)
    .map((e) => {
      return {
        name: e.name,
        salary: e.salary,
      };
    });
};

// Task: Get all Engineering employees who are remote. Return only name and salary.
// Expected: [{ name: "Alice", salary: 85000 }, { name: "Eve", salary: 78000 }]

// PROBLEM 2

const orders = [
  {
    orderId: "A1",
    customer: "John",
    item: "Laptop",
    quantity: 2,
    priceEach: 999,
  },
  {
    orderId: "A2",
    customer: "Sarah",
    item: "Mouse",
    quantity: 5,
    priceEach: 25,
  },
  {
    orderId: "A3",
    customer: "John",
    item: "Keyboard",
    quantity: 1,
    priceEach: 150,
  },
  {
    orderId: "A4",
    customer: "Mike",
    item: "Monitor",
    quantity: 1,
    priceEach: 450,
  },
  {
    orderId: "A5",
    customer: "Sarah",
    item: "Headphones",
    quantity: 2,
    priceEach: 80,
  },
  {
    orderId: "A6",
    customer: "John",
    item: "Webcam",
    quantity: 1,
    priceEach: 120,
  },
];

type OrdersType = {
  orderId: string;
  customers: string;
  item: string;
  quantity: number;
  priceEach: number;
};

const calculateSpent = (orders: OrdersType[]): { [key: string]: number } => {
  return orders.reduce((acc, val) => {
    acc[val.customers] =
      (acc[val.customers] || 0) + val.quantity * val.quantity;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Calculate total spent by each customer (quantity * priceEach per order).
// Expected: { John: 2268, Sarah: 285, Mike: 450 }

// PROBLEM 3

const products = [
  { sku: "P001", name: "Widget", stock: 45, rating: 4.2 },
  { sku: "P002", name: "Gadget", stock: 0, rating: 4.8 },
  { sku: "P003", name: "Gizmo", stock: 12, rating: 3.9 },
  { sku: "P004", name: "Doohickey", stock: 0, rating: 4.5 },
  { sku: "P005", name: "Thingamajig", stock: 30, rating: 4.2 },
  { sku: "P006", name: "Whatchamacallit", stock: 8, rating: 4.8 },
];

type ProductsType = {
  sku: string,
  name: string,
  stock: number,
  rating: number
}

const sortProducts = (products: ProductsType[]): ProductsType[] => {

  return products.sort((a, b)=> {
    if(a.rating === b.rating){
      return b.stock - a.stock
    }else{
     return b.rating - a.rating
    }
  })

}
// Task: Sort by rating (highest first). If same rating, sort by stock (highest first).
// Expected order: P006, P002, P004, P001, P005, P003
