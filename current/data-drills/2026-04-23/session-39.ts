// Session 39
// Time target: ~30 minutes (3 problems, ~10 min each)

export {};

// ============================================================
// PROBLEM 1
// ============================================================

type MenuItemsType = {
  name: string;
  category: string;
  price: number;
};

const menuItems = [
  { name: "Chicken Parmesan", category: "entree", price: 18.5 },
  { name: "Cheese Pizza", category: "entree", price: 14.0 },
  { name: "Chocolate Cake", category: "dessert", price: 9.0 },
  { name: "Caesar Salad", category: "appetizer", price: 11.0 },
  { name: "Churros", category: "dessert", price: 7.5 },
  { name: "Cobb Salad", category: "appetizer", price: 12.0 },
  { name: "Fish Tacos", category: "entree", price: 15.0 },
  { name: "Fries", category: "appetizer", price: 6.0 },
];

const getItems = (s: string, menuItems: MenuItemsType[]): string[] => {
  return menuItems
    .filter((m) => m.name.toLowerCase().startsWith(s.toLowerCase()))
    .map((item) => {
      return `${item.name} - ${item.price.toFixed(2)}`;
    });
};

console.log(getItems("ch", menuItems))

// Task: Given a search string, find all menu items whose name
// starts with that string (case-insensitive). Transform each
// match into a string: "name - $price"
//
// The price should always show 2 decimal places.
//
// Example: search("ch")
// Expected: ["Chicken Parmesan - $18.50", "Cheese Pizza - $14.00",
//            "Chocolate Cake - $9.00", "Churros - $7.50"]
//
// Example: search("f")
// Expected: ["Fish Tacos - $15.00", "Fries - $6.00"]
//
// Example: search("co")
// Expected: ["Cobb Salad - $12.00"]

// ============================================================
// PROBLEM 2
// ============================================================

type SalesType = {
  products: string,
  quantity: number,
  priceEach: number
}

const sales = [
  { product: "Laptop", quantity: 3, priceEach: 999 },
  { product: "Mouse", quantity: 15, priceEach: 25 },
  { product: "Keyboard", quantity: 8, priceEach: 75 },
  { product: "Monitor", quantity: 4, priceEach: 450 },
  { product: "Laptop", quantity: 2, priceEach: 999 },
  { product: "Mouse", quantity: 10, priceEach: 25 },
  { product: "Headphones", quantity: 6, priceEach: 150 },
];



// Task: Process these sales into a single summary object with:
//   - totalRevenue: sum of (quantity * priceEach) across all sales
//   - totalItemsSold: sum of all quantities
//   - bestSeller: the product name with the highest total revenue
//     (combine revenue from duplicate product names)
//
// Expected output:
// {
//   totalRevenue: 7372,
//   totalItemsSold: 48,
//   bestSeller: "Laptop"
// }
//
// Revenue breakdown:
//   Laptop: (3*999) + (2*999) = 4995
//   Mouse: (15*25) + (10*25) = 625
//   Keyboard: 8*75 = 600
//   Monitor: 4*450 = 1800
//   Headphones: 6*150 = 900

// ============================================================
// PROBLEM 3
// ============================================================

const tasks = [
  { id: "T1", name: "Setup DB", deps: [], done: true },
  { id: "T2", name: "Create API", deps: ["T1"], done: true },
  { id: "T3", name: "Build UI", deps: ["T2"], done: false },
  { id: "T4", name: "Write Tests", deps: ["T2", "T3"], done: false },
  { id: "T5", name: "Deploy", deps: ["T3", "T4"], done: false },
  { id: "T6", name: "Docs", deps: [], done: false },
];

// Task: Categorize the incomplete tasks into "ready" or "blocked".
// A task is "ready" if ALL of its dependencies are done.
// A task is "blocked" if ANY dependency is not done.
// Skip tasks that are already done.
//
// Return an object with two arrays of task names.
//
// Expected output:
// {
//   ready: ["Build UI", "Docs"],
//   blocked: ["Write Tests", "Deploy"]
// }
//
// Explanation:
//   T3 (Build UI): deps [T2] - T2 is done -> ready
//   T4 (Write Tests): deps [T2, T3] - T3 not done -> blocked
//   T5 (Deploy): deps [T3, T4] - both not done -> blocked
//   T6 (Docs): deps [] - no deps -> ready
