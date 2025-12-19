// ============================================
// SESSION 8 - December 15, 2025
// Difficulty: Beginner
// Methods: filter, reduce, find
// ============================================

// ============================================
// PROBLEM 22
// ============================================

export = {};

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "Fitzgerald",
    pages: 180,
    available: true,
  },
  { id: 2, title: "1984", author: "Orwell", pages: 328, available: false },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Lee",
    pages: 281,
    available: true,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Austen",
    pages: 432,
    available: true,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "Salinger",
    pages: 234,
    available: false,
  },
];

type BooksType = {
  id: number;
  title: string;
  author: string;
  pages: number;
  available: boolean;
};

type BooksReturnType = Omit<BooksType, "id" | "pages" | "available">;

const getBooks = (books: BooksType[]): BooksReturnType[] => {
  return books
    .filter((b) => b.pages > 200)
    .map((b) => {
      return {
        title: b.title,
        author: b.author,
      };
    });
};
// Task: Get all available books that have more than 200 pages.
// Return only the title and author for each matching book.

// Expected results:
// Given the books above → should return:
// [
//   { title: "To Kill a Mockingbird", author: "Lee" },
//   { title: "Pride and Prejudice", author: "Austen" }
// ]

// Test case 2:
const books2 = [
  { id: 1, title: "Short Story", author: "Writer", pages: 50, available: true },
  {
    id: 2,
    title: "Long Novel",
    author: "Author",
    pages: 500,
    available: false,
  },
];
// → should return: [] (Short Story is under 200 pages, Long Novel is not available)

// ============================================
// PROBLEM 23
// ============================================

const invoices = [
  { invoiceId: "INV-001", client: "Acme Corp", amount: 1500, status: "paid" },
  { invoiceId: "INV-002", client: "Tech Inc", amount: 2300, status: "pending" },
  { invoiceId: "INV-003", client: "Acme Corp", amount: 800, status: "paid" },
  { invoiceId: "INV-004", client: "StartUp LLC", amount: 3200, status: "paid" },
  { invoiceId: "INV-005", client: "Tech Inc", amount: 1100, status: "paid" },
  {
    invoiceId: "INV-006",
    client: "Acme Corp",
    amount: 2000,
    status: "pending",
  },
];

type InvoicesType = {
  invoiceId: string;
  client: string;
  amount: number;
  status: string;
};

const calculateTotal = (
  invoices: InvoicesType[]
): { [key: string]: number } => {
  return invoices.reduce((acc, val) => {
    acc[val.client] = (acc[val.client] || 0) + val.amount;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Calculate the total amount of PAID invoices per client.
// Only include invoices with status "paid".
// Return an object where keys are client names and values are the total paid amount.

// Expected results:
// Given the invoices above → should return:
// {
//   "Acme Corp": 2300,
//   "StartUp LLC": 3200,
//   "Tech Inc": 1100
// }

// Test case 2:
const invoices2 = [
  { invoiceId: "INV-001", client: "Solo Co", amount: 500, status: "pending" },
];
// → should return: {} (no paid invoices)

// ============================================
// PROBLEM 24
// ============================================

const users = [
  { id: 1, username: "alice", email: "alice@example.com", role: "admin" },
  { id: 2, username: "bob", email: "bob@example.com", role: "user" },
  { id: 3, username: "carol", email: "carol@example.com", role: "user" },
  { id: 4, username: "dan", email: "dan@example.com", role: "moderator" },
];

type UsersType = {
  id: number;
  username: string;
  email: string;
  role: string;
};

const findUserName = (
  users: UsersType[]
): {
  id: number;
  username: string;
  email: string;
  role: string;
} | null => {
  return users.filter((u) => u.username === "carol")[0] || null;
};

console.log(findUserName(users))

// Task: Find the user with a specific username.
// Given a username string, return the full user object if found, or null if not found.

// Expected results:
// Given username "carol" → should return:
// { id: 3, username: "carol", email: "carol@example.com", role: "user" }

// Given username "eve" → should return: null

// Given username "alice" → should return:
// { id: 1, username: "alice", email: "alice@example.com", role: "admin" }
