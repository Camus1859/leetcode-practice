// 03 — Arrays (Combining Patterns)
// 4 problems: medium → hard
// Topics: cross-referencing, chaining, nested data, early return

export {};

// ============================================================
// PROBLEM 1 (medium — cross-reference 2 datasets)
// ============================================================

const authors = [
  { authorId: "A1", name: "Toni Morrison" },
  { authorId: "A2", name: "James Baldwin" },
  { authorId: "A3", name: "Maya Angelou" },
];

type Authors = {
  authorId: string;
  name: string;
};

const books = [
  { title: "Beloved", authorId: "A1", year: 1987 },
  { title: "Song of Solomon", authorId: "A1", year: 1977 },
  { title: "Go Tell It on the Mountain", authorId: "A2", year: 1953 },
  { title: "Giovanni's Room", authorId: "A2", year: 1956 },
  { title: "I Know Why the Caged Bird Sings", authorId: "A3", year: 1969 },
];

type Books = {
  title: string;
  authorId: string;
  year: number;
};

const getBooks = (authors: Authors[], books: Books[]) => {
  return authors
    .map((a) => {
      const authorsBooksTitle = books
        .filter((b) => a.authorId === b.authorId)
        .map((b) => b.title);

      return {
        name: a.name,
        books: authorsBooksTitle,
      };
    })
    .filter((a) => a.books.length > 1)
    .sort((a, b) => a.name.localeCompare(b.name));
};

console.log(getBooks(authors, books));

// Task: For each author, return their name and an array of their
// book titles. Only include authors who have more than 1 book.
// Sort the result by author name alphabetically.
//
// Expected:
// [
//   { name: "James Baldwin", books: ["Go Tell It on the Mountain", "Giovanni's Room"] },
//   { name: "Toni Morrison", books: ["Beloved", "Song of Solomon"] },
// ]

// ============================================================
// PROBLEM 2 (medium — cross-reference + aggregate + sort)
// ============================================================

type Teams = {
  teamId: string;
  name: string;
  region: string;
};

const teams = [
  { teamId: "T1", name: "Alpha", region: "East" },
  { teamId: "T2", name: "Bravo", region: "West" },
  { teamId: "T3", name: "Charlie", region: "East" },
  { teamId: "T4", name: "Delta", region: "West" },
];

type Scores = {
  teamId: string;
  points: number;
};

const scores = [
  { teamId: "T1", points: 45 },
  { teamId: "T1", points: 32 },
  { teamId: "T1", points: 28 },
  { teamId: "T2", points: 50 },
  { teamId: "T2", points: 41 },
  { teamId: "T3", points: 38 },
  { teamId: "T3", points: 35 },
  { teamId: "T3", points: 42 },
  { teamId: "T3", points: 29 },
  { teamId: "T4", points: 22 },
];

const getTeamEast = (
  teams: Teams[],
  scores: Scores[],
): { name: string; gamesPlayed: number; avgScore: number }[] => {
  const eastTeams = teams.filter((t) => t.region === "East");

  return eastTeams
    .map((et) => {
      const eastTeamScores = scores.filter((s) => s.teamId === et.teamId);
      const totalScore = eastTeamScores.reduce(
        (acc, val) => acc + val.points,
        0,
      );

      return {
        name: et.name,
        gamesPlayed: eastTeamScores.length,
        avgScore: Number((totalScore / eastTeamScores.length).toFixed(1)),
      };
    })
    .sort((a, b) => b.avgScore - a.avgScore);
};

console.log(getTeamEast(teams, scores))

// Task: For teams in the "East" region only, return each team's name,
// number of games played, and average score (rounded to 1 decimal).
// Sort by average score descending (highest first).
//
// Expected:
// [
//   { name: "Charlie", gamesPlayed: 4, avgScore: 36.0 },
//   { name: "Alpha", gamesPlayed: 3, avgScore: 35.0 },
// ]

// ============================================================
// PROBLEM 3 (hard — flatten + transform nested data)
// ============================================================

const company = [
  {
    department: "Engineering",
    teams: [
      {
        teamName: "Frontend",
        projects: [
          { name: "Dashboard", status: "active" },
          { name: "Mobile App", status: "planning" },
        ],
      },
      {
        teamName: "Backend",
        projects: [
          { name: "API v2", status: "active" },
          { name: "Auth Service", status: "complete" },
          { name: "Data Pipeline", status: "active" },
        ],
      },
    ],
  },
  {
    department: "Design",
    teams: [
      {
        teamName: "UX",
        projects: [
          { name: "User Research", status: "active" },
          { name: "Prototypes", status: "complete" },
        ],
      },
    ],
  },
];

// Task: Find all "active" projects across the entire company.
// Return a flat array where each entry has the project name,
// the team it belongs to, and the department.
// Sort alphabetically by project name.
//
// Expected:
// [
//   { project: "API v2", team: "Backend", department: "Engineering" },
//   { project: "Dashboard", team: "Frontend", department: "Engineering" },
//   { project: "Data Pipeline", team: "Backend", department: "Engineering" },
//   { project: "User Research", team: "UX", department: "Design" },
// ]

// ============================================================
// PROBLEM 4 (hard — cross-reference + early return + build result)
// ============================================================

const shifts = [
  {
    shiftId: "S1",
    date: "2026-03-01",
    roles: [
      { role: "Manager", required: 1 },
      { role: "Cashier", required: 3 },
      { role: "Stocker", required: 2 },
    ],
  },
  {
    shiftId: "S2",
    date: "2026-03-02",
    roles: [
      { role: "Manager", required: 2 },
      { role: "Cashier", required: 2 },
    ],
  },
  {
    shiftId: "S3",
    date: "2026-03-03",
    roles: [
      { role: "Manager", required: 1 },
      { role: "Cashier", required: 4 },
      { role: "Stocker", required: 1 },
    ],
  },
];

const staff = [
  { role: "Manager", available: 2 },
  { role: "Cashier", available: 3 },
  { role: "Stocker", available: 2 },
];

// Task: Find the first shift that is understaffed — meaning at
// least one role requires more people than are available in staff.
// Return the shiftId, date, and an array of only the short roles
// showing the role name, how many are required, and how many
// are available.
//
// If all shifts can be covered, return null.
//
// Expected:
// {
//   shiftId: "S3",
//   date: "2026-03-03",
//   shortRoles: [
//     { role: "Cashier", required: 4, available: 3 },
//   ]
// }
