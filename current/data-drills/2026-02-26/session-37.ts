// Session 37
// Date: 2026-02-26

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const products = [
  {
    sku: "A100",
    name: "Wireless Mouse",
    category: "Peripherals",
    rating: 4.7,
    inStock: true,
  },
  {
    sku: "A101",
    name: "Mechanical Keyboard",
    category: "Peripherals",
    rating: 4.2,
    inStock: true,
  },
  {
    sku: "A102",
    name: "USB Hub",
    category: "Accessories",
    rating: 3.1,
    inStock: false,
  },
  {
    sku: "A103",
    name: "Monitor Stand",
    category: "Accessories",
    rating: 4.8,
    inStock: true,
  },
  {
    sku: "A104",
    name: "Webcam HD",
    category: "Peripherals",
    rating: 3.6,
    inStock: true,
  },
  {
    sku: "A105",
    name: "Desk Lamp",
    category: "Accessories",
    rating: 2.9,
    inStock: true,
  },
  {
    sku: "A106",
    name: "Laptop Stand",
    category: "Accessories",
    rating: 4.5,
    inStock: false,
  },
];

type Products = {
  sku: string;
  name: string;
  category: string;
  rating: number;
  inStock: boolean;
};

const getAllProducts = (products: Products[]) => {
  const inStockProducts = products.filter((p) => p.inStock);

  return inStockProducts.map((p) => {
    let tier = "";

    if (p.rating > 4.5) {
      tier = "premium";
    } else if (p.rating > 3.5 && p.rating < 4.5) {
      tier = "standard";
    } else {
      tier = "budget";
    }

    return {
      name: p.name,
      category: p.category,
      tier,
    };
  });
};

console.log(getAllProducts(products));
// Task: Get all products that are currently in stock. For each one,
// create an object with the product's name, category, and a "tier"
// field based on its rating:
//   - "premium" if rating is 4.5 or higher
//   - "standard" if rating is 3.5 or higher (but below 4.5)
//   - "budget" otherwise
//
// Expected output:
// [
//   { name: "Wireless Mouse", category: "Peripherals", tier: "premium" },
//   { name: "Mechanical Keyboard", category: "Peripherals", tier: "standard" },
//   { name: "Monitor Stand", category: "Accessories", tier: "premium" },
//   { name: "Webcam HD", category: "Peripherals", tier: "standard" },
//   { name: "Desk Lamp", category: "Accessories", tier: "budget" }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const salesData = [
  { rep: "Nora", region: "West", revenue: 12500 },
  { rep: "Oscar", region: "East", revenue: 9800 },
  { rep: "Priya", region: "West", revenue: 15200 },
  { rep: "Quinn", region: "East", revenue: 11300 },
  { rep: "Rosa", region: "Central", revenue: 8700 },
  { rep: "Sam", region: "Central", revenue: 14100 },
  { rep: "Tina", region: "West", revenue: 10900 },
  { rep: "Uma", region: "East", revenue: 13400 },
];

type SalesData = {
  rep: string;
  region: string;
  revenue: number;
};

const getRegion = (
  salesData: SalesData[],
): { [key: string]: { rep: string; revenue: number } } => {
  return salesData.reduce(
    (acc, val) => {
      acc[val.region] = acc[val.region] || { rep: "", revenue: 0 };

      if (acc[val.region].revenue < val.revenue) {
        acc[val.region].rep = val.rep;
        acc[val.region].revenue = val.revenue;
      }

      return acc;
    },
    {} as { [key: string]: { rep: string; revenue: number } },
  );
};

console.log(getRegion(salesData));

// Task: For each region, find the sales rep with the highest revenue.
// Return an object where each key is a region name, and each value
// is an object containing the top rep's name and their revenue.
//
// Expected output:
// {
//   West: { rep: "Priya", revenue: 15200 },
//   East: { rep: "Uma", revenue: 13400 },
//   Central: { rep: "Sam", revenue: 14100 }
// }

// ============================================================
// PROBLEM 3
// ============================================================

const shipments = [
  { shipmentId: "S01", region: "North", weight: 500 },
  { shipmentId: "S02", region: "South", weight: 1200 },
  { shipmentId: "S03", region: "North", weight: 300 },
  { shipmentId: "S04", region: "East", weight: 800 },
  { shipmentId: "S05", region: "South", weight: 200 },
  { shipmentId: "S06", region: "West", weight: 950 },
];

const warehouses = [
  { warehouseId: "W1", region: "North", capacity: 400 },
  { warehouseId: "W2", region: "North", capacity: 600 },
  { warehouseId: "W3", region: "South", capacity: 1000 },
  { warehouseId: "W4", region: "East", capacity: 900 },
  { warehouseId: "W5", region: "West", capacity: 500 },
];

// Task: Find all shipments that can be fulfilled — meaning there is
// at least one warehouse in the same region that has enough capacity
// to handle the shipment (capacity >= weight).
// Return an array of objects with just the shipmentId and region
// of each fulfillable shipment.
//
// Expected output:
// [
//   { shipmentId: "S01", region: "North" },
//   { shipmentId: "S03", region: "North" },
//   { shipmentId: "S04", region: "East" },
//   { shipmentId: "S05", region: "South" }
// ]
