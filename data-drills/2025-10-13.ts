// Daily Data Drills - October 13, 2025
// Week 1 - Beginner Level
// Time: 30 minutes total (~10 min per problem)

// ============================================
// Problem 1: Product Filtering ⭐⭐
// ============================================

// Here's your data:
const products = [
  { id: 1, name: "Laptop", price: 999, inStock: true, category: "electronics" },
  { id: 2, name: "Mouse", price: 25, inStock: false, category: "electronics" },
  { id: 3, name: "Desk", price: 450, inStock: true, category: "furniture" },
  {
    id: 4,
    name: "Keyboard",
    price: 75,
    inStock: true,
    category: "electronics",
  },
  { id: 5, name: "Chair", price: 299, inStock: false, category: "furniture" },
];

// Task: Get all products that are in stock AND cost less than $500,
// but only return objects with the name and price properties.

// Expected results:
// When given the products array above → should return:
// [
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 75 },
//   { name: "Chair", price: 299 }
// ]

// When given [] → should return: []
// When given products where none match → should return: []

type ProductsType = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  category: string;
}[];

type ProductsReturnedType = {
  name: string;
  price: number;
}[];

const productFilter = (products: ProductsType): ProductsReturnedType => {
  if (products.length === 0) return [];

  const filteredProject = products
    .filter((product) => product.price < 500 && product.inStock)
    .map((product) => {
      return {
        name: product.name,
        price: product.price,
      };
    });

  return filteredProject;
};

console.log(productFilter(products));

// ============================================
// Problem 2: User Score Calculation ⭐⭐
// ============================================

// Here's your data:
const users = [
  { username: "alice", points: 120, level: 3 },
  { username: "bob", points: 85, level: 2 },
  { username: "charlie", points: 200, level: 5 },
  { username: "diana", points: 45, level: 1 },
];

// Task: Calculate the total points earned by all users whose level is 2 or higher.

// Expected results:
// When given the users array above → should return: 405
// (120 + 85 + 200 = 405, diana is excluded because level is 1)

// When given [] → should return: 0
// When given users where all have level 1 → should return: 0

type UsersType = {
  username: string;
  points: number;
  level: number;
}[];

const scoreCalculation = (users: UsersType): number => {
  if (users.length === 0) return 0;

  let total = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].level >= 2) {
      total += users[i].points;
    }
  }
  return total;
};

// ============================================
// Problem 3: Order Status Update ⭐⭐
// ============================================

// Here's your data:
const orders = [
  { orderId: 101, customerName: "John", total: 250, isPaid: true },
  { orderId: 102, customerName: "Sarah", total: 180, isPaid: false },
  { orderId: 103, customerName: "Mike", total: 420, isPaid: true },
  { orderId: 104, customerName: "Emma", total: 95, isPaid: false },
];

// Task: For each order, add a new property called `status`.
// If the order `isPaid` is true, status should be "complete",
// otherwise status should be "pending".
// Return the modified orders (keep all original properties too).

// Expected results:
// When given the orders array above → should return:
// [
//   { orderId: 101, customerName: "John", total: 250, isPaid: true, status: "complete" },
//   { orderId: 102, customerName: "Sarah", total: 180, isPaid: false, status: "pending" },
//   { orderId: 103, customerName: "Mike", total: 420, isPaid: true, status: "complete" },
//   { orderId: 104, customerName: "Emma", total: 95, isPaid: false, status: "pending" }
// ]

// When given [] → should return: []

type OrdersType = {
  orderId: number;
  customerName: string;
  total: number;
  isPaid: boolean;
  status?: string;
}[];

const modifyOrders = (orders: OrdersType): OrdersType => {
  const modifiedOrders = orders.map((order) => {
    return {
      ...order,
      status: order.isPaid ? "complete" : "pending",
    };
  });

  return modifiedOrders;
};
