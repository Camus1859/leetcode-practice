// QUIZ - Session 12 | Tuesday, December 16, 2025 | 60 minutes (8 problems)

// PROBLEM 1 - Tests: Missing filter conditions (multiple conditions)

export = {};
const employees = [
  {
    id: 1,
    name: "Alice",
    dept: "Engineering",
    level: "senior",
    salary: 120000,
    active: true,
  },
  {
    id: 2,
    name: "Bob",
    dept: "Engineering",
    level: "junior",
    salary: 75000,
    active: true,
  },
  {
    id: 3,
    name: "Carol",
    dept: "Sales",
    level: "senior",
    salary: 95000,
    active: false,
  },
  {
    id: 4,
    name: "David",
    dept: "Engineering",
    level: "senior",
    salary: 115000,
    active: true,
  },
  {
    id: 5,
    name: "Eve",
    dept: "Marketing",
    level: "senior",
    salary: 105000,
    active: true,
  },
  {
    id: 6,
    name: "Frank",
    dept: "Engineering",
    level: "mid",
    salary: 90000,
    active: true,
  },
];

type EmployeesType = {
  id: number;
  name: string;
  dept: string;
  level: string;
  salary: number;
  active: boolean;
};

type EmployeesReturnType = Omit<
  EmployeesType,
  "id" | "dept" | "level" | "active"
>;

const getAll = (employees: EmployeesType[]): EmployeesReturnType[] => {
  return employees
    .filter((e) => e.active && e.dept === "Engineering" && e.level === "senior")
    .map((e) => {
      return {
        name: e.name,
        salary: e.salary,
      };
    });
};

console.log(getAll(employees));

// Task: Get all ACTIVE employees in ENGINEERING who are SENIOR level. Return only name and salary.
// Expected: [{ name: "Alice", salary: 120000 }, { name: "David", salary: 115000 }]

// PROBLEM 2 - Tests: AND vs OR logic

type ProductsType = {
  sku: string;
  name: string;
  price: number;
  inStock: boolean;
  onSale: boolean;
};

type ProductsReturnType = Omit<ProductsType, "price" | "inStock" | "onSale">;

const products = [
  { sku: "A1", name: "Laptop", price: 1200, inStock: true, onSale: false },
  { sku: "A2", name: "Mouse", price: 25, inStock: true, onSale: true },
  { sku: "A3", name: "Monitor", price: 400, inStock: false, onSale: true },
  { sku: "A4", name: "Keyboard", price: 80, inStock: true, onSale: false },
  { sku: "A5", name: "Webcam", price: 60, inStock: false, onSale: false },
  { sku: "A6", name: "Headset", price: 150, inStock: true, onSale: true },
];

const findProducts = (products: ProductsType[]): ProductsReturnType[] => {
  return products.filter(
    (p) => (p.inStock && p.price < 100) || (p.onSale && p.price < 200)
  ).map((p)=> {
    return {
      sku: p.sku,
      name: p.name
    }
  });
};

// Task: Find products that are EITHER (inStock AND price < 100) OR (onSale AND price < 200).
// Return only sku and name.
// Expected: [{ sku: "A2", name: "Mouse" }, { sku: "A4", name: "Keyboard" }, { sku: "A6", name: "Headset" }]

// PROBLEM 3 - Tests: Correct property access in calculations

type InventoryType = {
  itemId: string;
  itemName: string;
  unitPrice: number;
  unitsInStock: number;
  unitsSold: number;
};

const inventory = [
  {
    itemId: "X1",
    itemName: "Widget",
    unitPrice: 15,
    unitsInStock: 100,
    unitsSold: 45,
  },
  {
    itemId: "X2",
    itemName: "Gadget",
    unitPrice: 25,
    unitsInStock: 50,
    unitsSold: 30,
  },
  {
    itemId: "X3",
    itemName: "Gizmo",
    unitPrice: 10,
    unitsInStock: 200,
    unitsSold: 120,
  },
];

const calculateRevenue = (
  inventory: InventoryType[]
): { itemId: string; remainingValue: number; revenue: number }[] => {
  // return inventory.reduce((acc, val)=> {

  // }, {} as )

  return inventory.map((i) => {
    const revenue = i.unitPrice * i.unitsSold;
    const remainingValue = i.unitPrice * i.unitsInStock;

    return {
      itemId: i.itemId,
      revenue,
      remainingValue,
    };
  });
};

// Task: Calculate total revenue and total remaining value for each item.
// revenue = unitPrice * unitsSold
// remainingValue = unitPrice * unitsInStock
// Expected: [{ itemId: "X1", revenue: 675, remainingValue: 1500 }, { itemId: "X2", revenue: 750, remainingValue: 1250 }, { itemId: "X3", revenue: 1200, remainingValue: 2000 }]

// PROBLEM 4 - Tests: Math calculations (percentages, multi-step)

const orders = [
  { orderId: 1, subtotal: 200, taxRate: 8, discountPercent: 10 },
  { orderId: 2, subtotal: 150, taxRate: 6, discountPercent: 0 },
  { orderId: 3, subtotal: 500, taxRate: 8, discountPercent: 15 },
];

type OrdersType = {
  orderId: number;
  subtotal: number;
  taxRate: number;
  discountPercent: number;
};

const calculateTotal = (
  orders: OrdersType[]
): { orderId: number; finalTotal: number }[] => {
  return orders.map((o) => {
    const finalTotal = 
      o.subtotal * (1 - o.discountPercent / 100) * (1 + o.taxRate / 100)


    

    return {
      orderId: o.orderId,
      finalTotal: Number(finalTotal.toFixed(2))
    };
  });
};

console.log(calculateTotal(orders));

// Task: Calculate the final total for each order.
// Formula: finalTotal = subtotal * (1 - discountPercent/100) * (1 + taxRate/100)
// Round to 2 decimal places using toFixed, then convert back to number.
// Return orderId and finalTotal.
// Expected: [{ orderId: 1, finalTotal: 194.4 }, { orderId: 2, finalTotal: 159 }, { orderId: 3, finalTotal: 459 }]

// PROBLEM 5 - Tests: Similar property names (avoid typos)

const accounts = [
  {
    oderId: 101,
    odrerDate: "2025-01-15",
    orderTotal: 250,
    orderStatus: "shipped",
  },
  {
    oderId: 102,
    odrerDate: "2025-01-16",
    orderTotal: 180,
    orderStatus: "pending",
  },
  {
    oderId: 103,
    odrerDate: "2025-01-17",
    orderTotal: 320,
    orderStatus: "shipped",
  },
  {
    oderId: 104,
    odrerDate: "2025-01-18",
    orderTotal: 95,
    orderStatus: "cancelled",
  },
];

type AccountsType = {
  oderId: number;
  odrerDate: string;
  orderTotal: number;
  orderStatus: string;
};

const getSum = (accounts: AccountsType[]): number => {
  return accounts.reduce((acc, val) => {
    const total = val.orderStatus === "shipped" ? acc + val.orderTotal : acc;
    return total;
  }, 0 as number);
};

console.log(getSum(accounts));

// Task: Get the sum of orderTotal for all orders with orderStatus "shipped".
// Expected: 570

// PROBLEM 6 - Tests: Using parameters instead of hardcoded values

const scores = [
  { oderId: 1, name: "Alice", score: 85 },
  { oderId: 2, name: "Bob", score: 72 },
  { oderId: 3, name: "Carol", score: 91 },
  { oderId: 4, name: "David", score: 68 },
  { oderId: 5, name: "Eve", score: 77 },
];

type ScoresType = {
  oderId: number;
  name: string;
  score: number;
};

type ScoresRetunedType = Omit<ScoresType, "oderId">;

// Task: Write a function that takes the scores array AND a minimum score threshold as parameters.
// Return all students whose score is >= the threshold. Return only name and score.
// Example call: getPassingStudents(scores, 75)
// Expected for threshold 75: [{ name: "Alice", score: 85 }, { name: "Carol", score: 91 }, { name: "Eve", score: 77 }]

const getPassingStudents = (
  scores: ScoresType[],
  score: number
): ScoresRetunedType[] => {
  return scores
    .filter((s) => s.score >= score)
    .map((s) => {
      return {
        name: s.name,
        score: s.score,
      };
    });
};

// PROBLEM 7 - Tests: toFixed for formatting

const products2 = [
  { id: 1, name: "Item A", price: 19.99, quantity: 3 },
  { id: 2, name: "Item B", price: 5.5, quantity: 7 },
  { id: 3, name: "Item C", price: 12.333, quantity: 2 },
];

type Products2 = {
  id: number,
  name: string,
  price: number,
  quantity: number
}

type Products2ReturnedType = {
  id: number,
  name: string,
  total: number
}

const calculateTotal2 = (products: Products2[]): Products2ReturnedType[] => {



return products.map((p)=> {
  const total = Number((p.price * p.quantity).toFixed(2))

  return {
    id: p.id,
    name: p.name,
    total
  }
})



}

// Task: Calculate the total cost (price * quantity) for each product.
// Format the total to exactly 2 decimal places.
// Return id, name, and total (as a number, not string).
// Expected: [{ id: 1, name: "Item A", total: 59.97 }, { id: 2, name: "Item B", total: 38.5 }, { id: 3, name: "Item C", total: 24.67 }]

// PROBLEM 8 - Tests: findIndex (return index, not item)

const tasks = [
  { taskId: "T1", title: "Setup project", priority: "low", completed: true },
  { taskId: "T2", title: "Write tests", priority: "high", completed: false },
  { taskId: "T3", title: "Fix bug", priority: "high", completed: false },
  { taskId: "T4", title: "Deploy", priority: "medium", completed: false },
  { taskId: "T5", title: "Documentation", priority: "low", completed: true },
];

type TasksType = {
  taskId: string,
  title: string,
  priority: string,
  completed: boolean
}

const getIndex = (tasks: TasksType[]): number => {
  return tasks.findIndex((t)=> t.priority === "high" && t.completed === false)
}

// Task: Find the INDEX of the first task that has "high" priority AND is NOT completed.
// Return -1 if no such task exists.
// Expected: 1
