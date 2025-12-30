// Archive Retest - December 29, 2025
// Testing patterns from Round 1 Session 13 (your last archive session)
// Same concepts, different data

export = {};

// ============================================================
// PROBLEM 1
// ============================================================

const products = [
  {
    sku: "A001",
    name: "Wireless Mouse",
    category: "Accessories",
    price: 29,
    inStock: true,
  },
  {
    sku: "A002",
    name: "USB Hub",
    category: "Accessories",
    price: 45,
    inStock: false,
  },
  {
    sku: "B001",
    name: "Gaming Keyboard",
    category: "Peripherals",
    price: 120,
    inStock: true,
  },
  {
    sku: "B002",
    name: "Webcam",
    category: "Peripherals",
    price: 85,
    inStock: true,
  },
  {
    sku: "A003",
    name: "Mouse Pad",
    category: "Accessories",
    price: 15,
    inStock: true,
  },
];

type ProductsType = {
  sku: string;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

type ProductReturnType = {
  name: string;
  price: number;
};

const getAccessories = (products: ProductsType[]): ProductReturnType[] => {
  return products
    .filter((p) => p.inStock && p.category === "Accessories")
    .map((p) => {
      return {
        name: p.name,
        price: p.price,
      };
    });
};

// Task: Get all in-stock Accessories and return just their name and price.
//
// Expected:
// [
//   { name: "Wireless Mouse", price: 29 },
//   { name: "Mouse Pad", price: 15 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const donations = [
  { id: 1, donor: "Smith", cause: "Education", amount: 500 },
  { id: 2, donor: "Jones", cause: "Healthcare", amount: 250 },
  { id: 3, donor: "Brown", cause: "Education", amount: 300 },
  { id: 4, donor: "Davis", cause: "Environment", amount: 150 },
  { id: 5, donor: "Wilson", cause: "Healthcare", amount: 400 },
  { id: 6, donor: "Taylor", cause: "Education", amount: 200 },
];

type DonationsType = {
  id: number;
  donor: string;
  cause: string;
  amount: number;
};

const totalDonations = (
  donations: DonationsType[]
): { [key: string]: number } => {
  return donations.reduce((acc, val) => {
    acc[val.cause] = (acc[val.cause] || 0) + val.amount;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Calculate the total donations per cause.
//
// Expected:
// { Education: 1000, Healthcare: 650, Environment: 150 }

// ============================================================
// PROBLEM 3
// ============================================================

const reviews = [
  { id: 1, product: "Laptop", rating: 5, reviewer: "Alice" },
  { id: 2, product: "Phone", rating: 4, reviewer: "Bob" },
  { id: 3, product: "Laptop", rating: 4, reviewer: "Carol" },
  { id: 4, product: "Tablet", rating: 3, reviewer: "Dan" },
  { id: 5, product: "Phone", rating: 5, reviewer: "Eva" },
  { id: 6, product: "Laptop", rating: 5, reviewer: "Frank" },
  { id: 7, product: "Phone", rating: 3, reviewer: "Grace" },
];

type ReviewsType = {
  id: number;
  product: string;
  rating: number;
  reviewer: string;
};

const groupReviews = (
  reviews: ReviewsType[]
): { [key: string]: { count: number; avgRating: number } } => {
  const res = reviews.reduce((acc, val) => {
    acc[val.product] = acc[val.product] || { count: 0, avgRating: 0 };
    acc[val.product].count += 1;
    acc[val.product].avgRating += val.rating;
    return acc;
  }, {} as { [key: string]: { count: number; avgRating: number } });

  const res2 = Object.entries(res).map((r) => {
    const key = r[0];
    const obj = r[1];
    const avgRating = Number((obj.avgRating / obj.count).toFixed(1))

    return [key, { ...obj, avgRating }];
  });

  return Object.fromEntries(res2);
};

console.log(groupReviews(reviews))
// Task: Group reviews by product. For each product, return the count of reviews
// and the average rating (rounded to 1 decimal place).
//
// Expected:
// {
//   Laptop: { count: 3, avgRating: 4.7 },
//   Phone: { count: 3, avgRating: 4.0 },
//   Tablet: { count: 1, avgRating: 3.0 }
// }
