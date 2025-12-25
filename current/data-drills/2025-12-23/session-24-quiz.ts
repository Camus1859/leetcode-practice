// Session 24 - QUIZ (Day 7, Session 4)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2025-12-23
// Time limit: 75 minutes (10 problems, ~7.5 min each)
// Concepts tested: Top 10 struggles from Sessions 13-23

// ============================================================
// PROBLEM 1 - Discount/Increase Math
// ============================================================

export = {}

const memberships = [
  { id: "M001", type: "gold", monthlyFee: 50 },
  { id: "M002", type: "silver", monthlyFee: 30 },
  { id: "M003", type: "gold", monthlyFee: 50 },
  { id: "M004", type: "bronze", monthlyFee: 15 },
  { id: "M005", type: "silver", monthlyFee: 30 },
];

type MemberShipsType = {
  id: string;
  type: string;
  monthlyFee: number;
};

const pricingAdjustment = (
  memberships: MemberShipsType[]
): {
  id: string;
  type: string;
  adjustedFee: number;
}[] => {
  return memberships.map((m) => {
    let fee;

    if (m.type === "gold") {
      fee = m.monthlyFee * 0.85;
    } else if (m.type === "silver") {
      fee = m.monthlyFee * 1.1;
    } else {
      fee = m.monthlyFee;
    }

    return {
      id: m.id,
      type: m.type,
      adjustedFee: Number(fee.toFixed(2)),
    };
  });
};

console.log(pricingAdjustment(memberships))

// Task: Apply annual pricing adjustments:
// - Gold members get a 15% discount on their monthly fee
// - Silver members get a 10% increase on their monthly fee
// - Bronze members stay the same
//
// Return an array with id, type, and adjustedFee (rounded to 2 decimals).
//
// Expected output:
// [
//   { id: "M001", type: "gold", adjustedFee: 42.50 },
//   { id: "M002", type: "silver", adjustedFee: 33.00 },
//   { id: "M003", type: "gold", adjustedFee: 42.50 },
//   { id: "M004", type: "bronze", adjustedFee: 15.00 },
//   { id: "M005", type: "silver", adjustedFee: 33.00 }
// ]

// ============================================================
// PROBLEM 2 - Reading Comprehension (Multiple Conditions)
// ============================================================

const shipments = [
  { id: 1, weight: 25, destination: "domestic", insured: true, fragile: false },
  {
    id: 2,
    weight: 8,
    destination: "international",
    insured: true,
    fragile: true,
  },
  {
    id: 3,
    weight: 45,
    destination: "domestic",
    insured: false,
    fragile: false,
  },
  {
    id: 4,
    weight: 12,
    destination: "international",
    insured: true,
    fragile: false,
  },
  { id: 5, weight: 30, destination: "domestic", insured: true, fragile: true },
  {
    id: 6,
    weight: 5,
    destination: "international",
    insured: false,
    fragile: true,
  },
];

type ShipmentsType = {
  id: number,
  weight: number,
  destination: string,
  insured: boolean,
  fragile: boolean
}


const findShipments = (shipments: ShipmentsType[]): {id: number, weight: number}[] => {

  return shipments.filter((s) => s.destination === "international" && s.insured && s.weight < 15).map((s)=> {
    return {
      id: s.id,
      weight: s.weight
    }
  })
}

console.log(findShipments(shipments))

// Task: Find all shipments that are:
// - going to "international" destination AND
// - are insured AND
// - weigh less than 15 kg
//
// Return an array with just the id and weight.
//
// Expected output:
// [
//   { id: 2, weight: 8 },
//   { id: 4, weight: 12 }
// ]

// ============================================================
// PROBLEM 3 - Multi-Criteria Sort
// ============================================================

const restaurants = [
  { name: "Pasta Palace", rating: 4.5, reviewCount: 120, priceLevel: 2 },
  { name: "Burger Barn", rating: 4.2, reviewCount: 350, priceLevel: 1 },
  { name: "Sushi Supreme", rating: 4.5, reviewCount: 200, priceLevel: 3 },
  { name: "Taco Town", rating: 4.2, reviewCount: 350, priceLevel: 2 },
  { name: "Pizza Planet", rating: 4.5, reviewCount: 120, priceLevel: 1 },
];

type RestaurantsType = {
  name: string,
  rating: number,
  reviewCount: number,
  priceLevel: number
}

const sortRestaurants = (restaurants: RestaurantsType[]): RestaurantsType[] => {

  return restaurants.sort((a, b)=> {

    if(a.rating !== b.rating){
      return b.rating - a.rating
    }else if(a.reviewCount !== b.reviewCount){
      return b.reviewCount - a.reviewCount
    }else{
      return a.priceLevel - b.priceLevel
    }
  })
}

console.log(sortRestaurants(restaurants))

// Task: Sort restaurants to show the "best" ones first.
// Best = highest rating. If two have the same rating, prefer more reviews.
// If still tied, prefer the cheaper option (lower priceLevel).
//
// Expected output:
// [
//   { name: "Sushi Supreme", rating: 4.5, reviewCount: 200, priceLevel: 3 },
//   { name: "Pizza Planet", rating: 4.5, reviewCount: 120, priceLevel: 1 },
//   { name: "Pasta Palace", rating: 4.5, reviewCount: 120, priceLevel: 2 },
//   { name: "Burger Barn", rating: 4.2, reviewCount: 350, priceLevel: 1 },
//   { name: "Taco Town", rating: 4.2, reviewCount: 350, priceLevel: 2 }
// ]

// ============================================================
// PROBLEM 4 - Object.entries + Object.fromEntries
// ============================================================

const inventory = {
  apples: { quantity: 50, price: 1.2 },
  bananas: { quantity: 30, price: 0.5 },
  oranges: { quantity: 45, price: 0.8 },
  grapes: { quantity: 20, price: 2.5 },
};

type InventoryType = {
  [key: string]: {quantity: number, price: number}
}

type InventoryReturnType = {
  [key: string]: { quantity: number; price: number; totalValue: number };
};

const transformInventory = (inventory: InventoryType): InventoryReturnType => {
  const x = Object.entries(inventory).map((i) => {
    const key = i[0];
    const obj = i[1];
    const totalPrice = (obj.price * obj.quantity).toFixed(2);

    return [key, { ...obj, totalPrice }];
  });

  return Object.fromEntries(x);
};

console.log(transformInventory(inventory))


// Task: Transform the inventory object so each item includes its totalValue
// (quantity * price, rounded to 2 decimals).
//
// Expected output:
// {
//   apples: { quantity: 50, price: 1.20, totalValue: 60.00 },
//   bananas: { quantity: 30, price: 0.50, totalValue: 15.00 },
//   oranges: { quantity: 45, price: 0.80, totalValue: 36.00 },
//   grapes: { quantity: 20, price: 2.50, totalValue: 50.00 }
// }

// ============================================================
// PROBLEM 5 - Rounding with toFixed
// ============================================================

const transactions = [
  { id: "T1", amount: 125.789, currency: "USD" },
  { id: "T2", amount: 89.123, currency: "EUR" },
  { id: "T3", amount: 200.005, currency: "USD" },
  { id: "T4", amount: 55.999, currency: "GBP" },
];

// Task: Format all transactions so the amount is rounded to exactly 2 decimal places.
// Return an array with id, formattedAmount (as a number, not string), and currency.
//
// Expected output:
// [
//   { id: "T1", formattedAmount: 125.79, currency: "USD" },
//   { id: "T2", formattedAmount: 89.12, currency: "EUR" },
//   { id: "T3", formattedAmount: 200.01, currency: "USD" },
//   { id: "T4", formattedAmount: 56.00, currency: "GBP" }
// ]

// ============================================================
// PROBLEM 6 - Accumulation (+= Pattern)
// ============================================================

const workLogs = [
  { employee: "Alice", project: "Alpha", hours: 8 },
  { employee: "Bob", project: "Beta", hours: 6 },
  { employee: "Alice", project: "Beta", hours: 4 },
  { employee: "Carol", project: "Alpha", hours: 7 },
  { employee: "Bob", project: "Alpha", hours: 5 },
  { employee: "Alice", project: "Alpha", hours: 3 },
];

// Task: Calculate total hours worked per project.
//
// Expected output:
// { Alpha: 23, Beta: 10 }

// ============================================================
// PROBLEM 7 - Two-Level Logic
// ============================================================

const courses = [
  { courseId: "CS101", instructor: "Smith" },
  { courseId: "CS102", instructor: "Jones" },
  { courseId: "CS103", instructor: "Smith" },
  { courseId: "CS104", instructor: "Davis" },
];

const enrollments = [
  { studentId: "S1", courseId: "CS101", grade: 85 },
  { studentId: "S2", courseId: "CS101", grade: 72 },
  { studentId: "S1", courseId: "CS102", grade: 90 },
  { studentId: "S3", courseId: "CS103", grade: 88 },
  { studentId: "S2", courseId: "CS104", grade: 65 },
];

// Task: Find all instructors who have at least one student with a grade above 80.
// Return an array of unique instructor names, sorted alphabetically.
//
// Expected output:
// ["Jones", "Smith"]

// ============================================================
// PROBLEM 8 - Number Formatting (toLocaleString)
// ============================================================

const salesData = [
  { region: "North", revenue: 1250000 },
  { region: "South", revenue: 875000 },
  { region: "East", revenue: 2100000 },
  { region: "West", revenue: 950000 },
];

// Task: Format each region's revenue as a US dollar string with commas and $ prefix.
// Return an array with region and formattedRevenue.
//
// Expected output:
// [
//   { region: "North", formattedRevenue: "$1,250,000" },
//   { region: "South", formattedRevenue: "$875,000" },
//   { region: "East", formattedRevenue: "$2,100,000" },
//   { region: "West", formattedRevenue: "$950,000" }
// ]

// ============================================================
// PROBLEM 9 - Filter Before Reduce
// ============================================================

const orders = [
  { id: 1, status: "completed", total: 150, category: "electronics" },
  { id: 2, status: "pending", total: 80, category: "clothing" },
  { id: 3, status: "completed", total: 220, category: "electronics" },
  { id: 4, status: "cancelled", total: 45, category: "books" },
  { id: 5, status: "completed", total: 175, category: "electronics" },
  { id: 6, status: "completed", total: 60, category: "clothing" },
];

// Task: Calculate the total revenue from ONLY:
// - orders with status "completed" AND
// - orders in the "electronics" category
//
// Expected output:
// 545

// ============================================================
// PROBLEM 10 - Ascending vs Descending
// ============================================================

const athletes = [
  { name: "Alex", wins: 12, losses: 3 },
  { name: "Blake", wins: 8, losses: 7 },
  { name: "Casey", wins: 15, losses: 2 },
  { name: "Drew", wins: 8, losses: 5 },
  { name: "Ellis", wins: 12, losses: 4 },
];

// Task: Sort athletes by:
// 1. wins (descending - most wins first)
// 2. If wins are equal, by losses (ascending - fewer losses first)
//
// Return just the names in order.
//
// Expected output:
// ["Casey", "Alex", "Ellis", "Drew", "Blake"]
