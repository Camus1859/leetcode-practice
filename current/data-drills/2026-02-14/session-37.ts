// Session 37 - Warm-up (returning after 5-week break)
// Date: 2026-02-14

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    genre: "Fiction",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    pages: 443,
    genre: "Nonfiction",
  },
  { title: "Dune", author: "Frank Herbert", pages: 412, genre: "Fiction" },
  {
    title: "Educated",
    author: "Tara Westover",
    pages: 334,
    genre: "Nonfiction",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    pages: 662,
    genre: "Fiction",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    pages: 320,
    genre: "Nonfiction",
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    pages: 476,
    genre: "Fiction",
  },
];

type Book = {
  title: string;
  author: string;
  pages: number;
  genre: string;
};

// Task: Find all Fiction books with more than 300 pages.
// Return an array of strings formatted as: "Title by Author"
//
// Expected output:
// [
//   "Dune by Frank Herbert",
//   "The Name of the Wind by Patrick Rothfuss",
//   "Project Hail Mary by Andy Weir"
// ]

const findBooks = (books: Book[]): string[] => {
  return books
    .filter((book) => book.pages > 300 && book.genre === "Fiction")
    .map((book) => {
      const title = book.title;
      const auther = book.author;

      return title + " by " + auther;
    });
};

console.log(findBooks(books));
// ============================================================
// PROBLEM 2
// ============================================================

type Sales = {
  salesperson: string;
  region: string;
  amount: number;
};

const sales = [
  { salesperson: "Lena", region: "West", amount: 4200 },
  { salesperson: "Marco", region: "East", amount: 3100 },
  { salesperson: "Lena", region: "East", amount: 2800 },
  { salesperson: "Priya", region: "West", amount: 5500 },
  { salesperson: "Marco", region: "West", amount: 1900 },
  { salesperson: "Lena", region: "West", amount: 3600 },
  { salesperson: "Priya", region: "East", amount: 4100 },
  { salesperson: "Marco", region: "East", amount: 2200 },
];

// Task: Build a summary object where each salesperson maps to:
//   - totalSales: their combined sales amount
//   - dealCount: how many sales they made
//   - regions: an array of UNIQUE regions they've sold in (no duplicates)
//
// Expected output:
// {
//   Lena:  { totalSales: 10600, dealCount: 3, regions: ["West", "East"] },
//   Marco: { totalSales: 7200,  dealCount: 3, regions: ["East", "West"] },
//   Priya: { totalSales: 9600,  dealCount: 2, regions: ["West", "East"] }
// }

const buildSummary = (
  sales: Sales[],
): {
  [key: string]: { totalSales: number; dealCount: number; regions: string[] };
} => {
  return sales.reduce((acc, val) => {
    acc[val.salesperson] = acc[val.salesperson] || {
      totalSales: 0,
      dealCount: 0,
      regions: [],
    };

    acc[val.salesperson].totalSales += val.amount;
    acc[val.salesperson].dealCount += 1;

    const hasRegion = acc[val.salesperson].regions.includes(val.region);

    if (!hasRegion) {
      acc[val.salesperson].regions.push(val.region);
    }
    return acc;
  }, {});
};

console.log(buildSummary(sales));

// ============================================================
// PROBLEM 3
// ============================================================

type Students = {
  id: string;
  name: string;
};

const students = [
  { id: "S1", name: "Amy" },
  { id: "S2", name: "Brian" },
  { id: "S3", name: "Carla" },
  { id: "S4", name: "Derek" },
  { id: "S5", name: "Elena" },
];

type Enrollments = {
  studentId: string;
  courseId: string;
};

const enrollments = [
  { studentId: "S1", courseId: "CS101" },
  { studentId: "S1", courseId: "CS102" },
  { studentId: "S1", courseId: "CS103" },
  { studentId: "S2", courseId: "CS101" },
  { studentId: "S2", courseId: "CS103" },
  { studentId: "S3", courseId: "CS101" },
  { studentId: "S3", courseId: "CS102" },
  { studentId: "S3", courseId: "CS103" },
  { studentId: "S4", courseId: "CS102" },
  { studentId: "S5", courseId: "CS101" },
  { studentId: "S5", courseId: "CS102" },
  { studentId: "S5", courseId: "CS103" },
];

type RequiredCourses = string[];

const requiredCourses = ["CS101", "CS102", "CS103"];

const getStudents = (
  students: Students[],
  enrollments: Enrollments[],
  requiredCourses: string[],
): string[] => {
  const results: string[] = [];

  for (const student of students) {
    const studentsCourses = enrollments.filter((e) => student.id === e.studentId);

    const hasAll = requiredCourses.every((rc) =>
      studentsCourses.some((sc) => sc.courseId === rc)
    );

    if (hasAll) {
      results.push(student.name);
    }
  }

  return results;
};

// Task: Find the names of students who are enrolled in ALL of the required courses.
// A student must have an enrollment entry for every course in requiredCourses to qualify.
//
// Expected output:
// ["Amy", "Carla", "Elena"]
