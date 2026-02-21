// Session 38
// Date: 2026-02-18
// Time target: 30 minutes (3 problems, ~10 min each)

export {};

// ============================================================
// PROBLEM 1
// ============================================================

type Products = {
  code: string;
  name: string;
  price: number;
};

const products = [
  { code: "EL-001", name: "Wireless Mouse", price: 29.99 },
  { code: "EL-042", name: "USB-C Hub", price: 49.99 },
  { code: "HM-101", name: "Desk Lamp", price: 34.5 },
  { code: "EL-099", name: "Mechanical Keyboard", price: 89.99 },
  { code: "HM-203", name: "Office Chair", price: 299.0 },
  { code: "EL-055", name: "Webcam HD", price: 59.99 },
];

type Reviews = {
  productCode: string;
  rating: number;
};

const reviews = [
  { productCode: "EL-001", rating: 5 },
  { productCode: "EL-001", rating: 4 },
  { productCode: "EL-001", rating: 4 },
  { productCode: "EL-042", rating: 3 },
  { productCode: "EL-042", rating: 2 },
  { productCode: "HM-101", rating: 5 },
  { productCode: "HM-101", rating: 5 },
  { productCode: "HM-101", rating: 4 },
  { productCode: "HM-101", rating: 5 },
  { productCode: "EL-099", rating: 5 },
  { productCode: "EL-099", rating: 5 },
  { productCode: "EL-099", rating: 4 },
  { productCode: "EL-099", rating: 4 },
  { productCode: "HM-203", rating: 4 },
  { productCode: "EL-055", rating: 5 },
  { productCode: "EL-055", rating: 4 },
  { productCode: "EL-055", rating: 5 },
];

const getELReviews = (products: Products[], reviews: Reviews[]) => {
  const ELProducts = products.filter((p) => p.code.split("-")[0] === "EL");
  let arr = [];

  for (const p of ELProducts) {
    const result = reviews.reduce((acc, val) => {
      if (p.code === val.productCode) {
        acc["reviewCount"] = (acc["reviewCount"] || 0) + 1;
        acc["name"] = p.name;
        acc["rating"] = (acc["rating"] || 0) + val.rating;
        return acc;
      }
      return acc;
    }, {});

    arr.push(result);
  }

  const res = arr
    .filter((a) => a.reviewCount >= 3)
    .map((a) => {
      const avgRating = Number((a.rating / a.reviewCount).toFixed(1));
      return {
        name: a.name,
        avgRating,
        reviewCount: a.reviewCount,
      };
    });

  return res.filter((r) => r.avgRating >= 4);
};

console.log(getELReviews(products, reviews));
// Task: Find all products where:
//   - The product code starts with "EL-" (electronics only)
//   - The product has at least 3 reviews
//   - The average review rating is 4.0 or higher
//
// For each matching product, return an object with the product name,
// the number of reviews, and the average rating rounded to 1 decimal place.
//
// Expected output:
// [
//   { name: "Wireless Mouse", reviewCount: 3, avgRating: 4.3 },
//   { name: "Mechanical Keyboard", reviewCount: 4, avgRating: 4.5 },
//   { name: "Webcam HD", reviewCount: 3, avgRating: 4.7 },
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const departments = [
  {
    name: "Engineering",
    teams: [
      { teamName: "Frontend", members: ["Alice", "Bob"] },
      { teamName: "Backend", members: ["Carla", "Derek"] },
    ],
  },
  {
    name: "Design",
    teams: [
      { teamName: "UX", members: ["Elena", "Frank"] },
      { teamName: "Visual", members: ["Grace"] },
    ],
  },
  {
    name: "Marketing",
    teams: [{ teamName: "Content", members: ["Henry", "Irene", "Jake"] }],
  },
];

type Teams = {
  teamName: string;
  members: string[];
};

type Departments = {
  name: string;
  teams: Teams[];
};

const creatFlattenTeam = (
  departments: Departments[],
): { name: string; team: string; department: string }[] => {
  let res = [];
  for (const department of departments) {
    const teams = department.teams;
    const name = department.name;

    for (const team of teams) {
      const members = team.members;
      const teamName = team.teamName;

      const arr = members.map((m) => {
        return {
          name: m,
          team: teamName,
          department: name,
        };
      });

      res.push(...arr);
    }
  }
  return res;
};

console.log(creatFlattenTeam(departments));

// Task: Flatten this nested structure into a single array where each
// entry contains a person's name, the team they belong to, and their
// department. The order should match the order they appear in the data.
//
// Expected output:
// [
//   { name: "Alice", team: "Frontend", department: "Engineering" },
//   { name: "Bob", team: "Frontend", department: "Engineering" },
//   { name: "Carla", team: "Backend", department: "Engineering" },
//   { name: "Derek", team: "Backend", department: "Engineering" },
//   { name: "Elena", team: "UX", department: "Design" },
//   { name: "Frank", team: "UX", department: "Design" },
//   { name: "Grace", team: "Visual", department: "Design" },
//   { name: "Henry", team: "Content", department: "Marketing" },
//   { name: "Irene", team: "Content", department: "Marketing" },
//   { name: "Jake", team: "Content", department: "Marketing" },
// ]

// ============================================================
// PROBLEM 3
// ============================================================

type Items = {
  sku: string;
  qty: number;
};

type Orders = {
  orderId: string;
  items: Items[];
};

const orders = [
  {
    orderId: "A1",
    items: [
      { sku: "W100", qty: 2 },
      { sku: "W200", qty: 1 },
    ],
  },
  {
    orderId: "A2",
    items: [
      { sku: "W100", qty: 5 },
      { sku: "W300", qty: 3 },
    ],
  },
  {
    orderId: "A3",
    items: [
      { sku: "W200", qty: 2 },
      { sku: "W300", qty: 1 },
    ],
  },
];

type Inventory = {
  sku: string;
  stock: number;
};

const inventory = [
  { sku: "W100", stock: 4 },
  { sku: "W200", stock: 10 },
  { sku: "W300", stock: 2 },
];

type UnfilledOrder = {
  orderId: string;
  shortItems: { sku: string; requested: number; available: number }[];
};

const firstUnfilledOrder = (
  orders: Orders[],
  inventory: Inventory[],
): UnfilledOrder | null => {
  for (const order of orders) {
    const items = order.items;

    const noOrder = items
      .filter((i) => {
        const inv = inventory.find((inventory) => inventory.sku === i.sku);
        return inv && inv.stock < i.qty;
      })
      .map((i) => {
        const inv = inventory.find((inventory) => inventory.sku === i.sku);
        return {
          sku: i.sku,
          requested: i.qty,
          available: inv.stock,
        };
      });
    if (noOrder.length > 0) {
      return {
        orderId: order.orderId,
        shortItems: noOrder,
      };
    }
  }
  return null;
};

console.log(firstUnfilledOrder(orders, inventory));

// Task: Find the first order that cannot be fully fulfilled — meaning
// at least one of its items has a requested quantity that exceeds
// the available stock in inventory. Return the orderId and an array
// of only the specific items that are short, showing the sku, the
// requested quantity, and the available stock.
//
// If all orders can be fulfilled, return null.
//
// Expected output:
// {
//   orderId: "A2",
//   shortItems: [
//     { sku: "W100", requested: 5, available: 4 },
//     { sku: "W300", requested: 3, available: 2 }
//   ]
// }
//
// Test case 2: If inventory had stock: W100=10, W200=10, W300=10,
// expected output: null
