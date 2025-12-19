// Session 16 (Day 4, Session 4)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-18

// ============================================================
// PROBLEM 1
// ============================================================

const cartItems = [
  { productId: "P001", name: "Wireless Headphones", price: 79.99, quantity: 2 },
  { productId: "P002", name: "USB-C Cable", price: 12.99, quantity: 5 },
  { productId: "P003", name: "Phone Case", price: 24.99, quantity: 1 },
  { productId: "P004", name: "Screen Protector", price: 9.99, quantity: 3 },
];

type CartItems = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

const transform = (
  cartItems: CartItems[]
): { name: string; lineTotal: number }[] => {
  return cartItems.map((c) => {
    const lineTotal = c.price * c.quantity;

    return {
      name: c.name,
      lineTotal,
    };
  });
};

console.log(transform(cartItems));

// Task: Transform each cart item to show the name and the line total (price * quantity).
// Round the line total to 2 decimal places.
//
// Expected output:
// [
//   { name: "Wireless Headphones", lineTotal: 159.98 },
//   { name: "USB-C Cable", lineTotal: 64.95 },
//   { name: "Phone Case", lineTotal: 24.99 },
//   { name: "Screen Protector", lineTotal: 29.97 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const surveyResponses = [
  { odId: 1, rating: "excellent" },
  { odId: 2, rating: "good" },
  { odId: 3, rating: "excellent" },
  { odId: 4, rating: "poor" },
  { odId: 5, rating: "good" },
  { odId: 6, rating: "good" },
  { odId: 7, rating: "excellent" },
  { odId: 8, rating: "fair" },
  { odId: 9, rating: "good" },
  { odId: 10, rating: "poor" },
];

type SurveyResponses = {
  odId: number;
  rating: string;
};

const countResponses = (
  surveyResponses: SurveyResponses[]
): { [key: string]: number } => {
  return surveyResponses.reduce((acc, val) => {
    acc[val.rating] = (acc[val.rating] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
};

console.log(countResponses(surveyResponses));

// Task: Count how many responses there are for each rating.
//
// Expected output:
// {
//   "excellent": 3,
//   "good": 4,
//   "poor": 2,
//   "fair": 1
// }

// ============================================================
// PROBLEM 3
// ============================================================

const flights = [
  {
    flightNo: "AA100",
    origin: "JFK",
    destination: "LAX",
    seatsAvailable: 0,
    price: 299,
  },
  {
    flightNo: "UA200",
    origin: "ORD",
    destination: "LAX",
    seatsAvailable: 12,
    price: 349,
  },
  {
    flightNo: "DL300",
    origin: "JFK",
    destination: "LAX",
    seatsAvailable: 5,
    price: 275,
  },
  {
    flightNo: "AA101",
    origin: "JFK",
    destination: "SFO",
    seatsAvailable: 8,
    price: 320,
  },
  {
    flightNo: "SW400",
    origin: "JFK",
    destination: "LAX",
    seatsAvailable: 23,
    price: 199,
  },
];

type FlightsType = {
  flightNo: string,
  origin: string,
  destination: string,
  seatsAvailable: number,
  price: number
}

const getFirstFlight = (flights: FlightsType[]): FlightsType | undefined => {
  return flights.find((f)=> f.origin === "JFK" && f.destination === "LAX" && f.seatsAvailable > 0)
}

// Task: Find the first flight from JFK to LAX that has seats available (seatsAvailable > 0).
// Return the full flight object.
//
// Expected output:
// { flightNo: "DL300", origin: "JFK", destination: "LAX", seatsAvailable: 5, price: 275 }
