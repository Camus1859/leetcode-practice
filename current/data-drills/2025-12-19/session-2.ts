// Session 18 (Day 5, Session 2)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-19

// ============================================================
// PROBLEM 1
// ============================================================

const books = [
  {
    isbn: "978-0-13-468599-1",
    title: "Clean Code",
    author: "Robert Martin",
    price: 39.99,
    inStock: true,
  },
  {
    isbn: "978-0-59-651798-1",
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 29.99,
    inStock: false,
  },
  {
    isbn: "978-1-49-195017-1",
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    price: 34.99,
    inStock: true,
  },
  {
    isbn: "978-0-20-161622-4",
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    price: 49.99,
    inStock: true,
  },
  {
    isbn: "978-1-59-327584-6",
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 27.99,
    inStock: false,
  },
];

type BooksType = {
  isbn: string;
  title: string;
  author: string;
  price: number;
  inStock: boolean;
};

const getAllBooks = (
  books: BooksType[]
): { title: string; salePrice: number }[] => {
  return books
    .filter((b) => b.inStock)
    .map((b) => {
      return {
        title: b.title,
        salePrice: b.price * 1.15,
      };
    });
};

// Task: Get all books that are in stock and apply a 15% discount to their price.
// Return the title and the discounted price (as "salePrice"), rounded to 2 decimal places.
//
// Expected output:
// [
//   { title: "Clean Code", salePrice: 33.99 },
//   { title: "You Don't Know JS", salePrice: 29.74 },
//   { title: "The Pragmatic Programmer", salePrice: 42.49 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const logs = [
  { logId: 1, level: "error", service: "auth" },
  { logId: 2, level: "warn", service: "payment" },
  { logId: 3, level: "error", service: "auth" },
  { logId: 4, level: "info", service: "auth" },
  { logId: 5, level: "error", service: "payment" },
  { logId: 6, level: "warn", service: "auth" },
  { logId: 7, level: "error", service: "shipping" },
  { logId: 8, level: "info", service: "payment" },
];

type LogsType = {
  logId: number;
  level: string;
  service: string;
};

const countLogs = (logs: LogsType[]): { [key: string]: number } => {
  return logs.reduce((acc, val) => {
    acc[val.level] = (acc[val.level] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Count how many logs of each level exist, but only for error and warn levels.
// Ignore info level logs entirely.
//
// Expected output:
// {
//   "error": 4,
//   "warn": 2
// }

// ============================================================
// PROBLEM 3
// ============================================================

const candidates = [
  { id: 1, name: "Anna Lee", experienceYears: 5, interviewScore: 82 },
  { id: 2, name: "Ben Carter", experienceYears: 3, interviewScore: 91 },
  { id: 3, name: "Cara Jones", experienceYears: 7, interviewScore: 78 },
  { id: 4, name: "Dan Smith", experienceYears: 5, interviewScore: 88 },
  { id: 5, name: "Eva Park", experienceYears: 2, interviewScore: 95 },
  { id: 6, name: "Frank Wu", experienceYears: 5, interviewScore: 82 },
];

type CandidateType = {
  id: number;
  name: string;
  experienceYears: number;
  interviewScore: number;
};

const sortCandidates = (candidates: CandidateType[]): CandidateType[] => {
  return candidates.sort((a, b) => {
    if (a.experienceYears === b.experienceYears) {
      return a.name.localeCompare(b.name)
    } else {
      return b.experienceYears - a.experienceYears;
    }
  });
};

// Task: Sort candidates by experienceYears (highest first).
// If two candidates have the same experience, sort by interviewScore (highest first).
// If both are equal, sort by name alphabetically (A-Z).
//
// Expected output:
// [
//   { id: 3, name: "Cara Jones", experienceYears: 7, interviewScore: 78 },
//   { id: 4, name: "Dan Smith", experienceYears: 5, interviewScore: 88 },
//   { id: 1, name: "Anna Lee", experienceYears: 5, interviewScore: 82 },
//   { id: 6, name: "Frank Wu", experienceYears: 5, interviewScore: 82 },
//   { id: 2, name: "Ben Carter", experienceYears: 3, interviewScore: 91 },
//   { id: 5, name: "Eva Park", experienceYears: 2, interviewScore: 95 }
// ]
