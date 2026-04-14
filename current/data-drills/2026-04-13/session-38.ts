// Session 38
// Time target: ~10 minutes (3 problems, ~3.5 min each)

export {};

// ============================================================
// PROBLEM 1
// ============================================================

type MembersType = {
  name: string;
  workouts: number[];
};

const members = [
  { name: "Jess", workouts: [45, 30, 60, 50] },
  { name: "Kyle", workouts: [20] },
  { name: "Mia", workouts: [35, 40, 55] },
  { name: "Noah", workouts: [] },
  { name: "Priya", workouts: [90, 75, 80, 60, 45] },
  { name: "Sam", workouts: [25, 30] },
];

const getMembers = (
  members: MembersType[],
): { name: string; avgDuration: number }[] => {
  const qualifiedMembers = members.filter(
    (member) => member.workouts.length > 2,
  );

  return qualifiedMembers.map((member) => {
    const total = member.workouts.reduce((acc, val) => acc + val, 0);

    return {
      name: member.name,
      avgDuration: Number((total / member.workouts.length).toFixed(1)),
    };
  });
};

console.log(getMembers(members));

// Task: Get members who have logged at least 3 workouts.
// For each, return their name and their average workout
// duration rounded to 1 decimal place (as a number, not string).
//
// Expected output:
// [
//   { name: "Jess", avgDuration: 46.3 },
//   { name: "Mia", avgDuration: 43.3 },
//   { name: "Priya", avgDuration: 70.0 },
// ]

// ============================================================
// PROBLEM 2
// ============================================================

type CheckoutsType = {
  member: string;
  book: string;
};

const checkouts = [
  { member: "Alice", book: "Dune" },
  { member: "Bob", book: "1984" },
  { member: "Alice", book: "Neuromancer" },
  { member: "Bob", book: "Dune" },
  { member: "Alice", book: "Dune" },
  { member: "Carol", book: "Neuromancer" },
  { member: "Bob", book: "1984" },
  { member: "Carol", book: "Dune" },
  { member: "Alice", book: "1984" },
];

const bookObj = (checkouts: CheckoutsType[]): { [key: string]: string[] } => {
  return checkouts.reduce(
    (acc, val) => {
      acc[val.member] = acc[val.member] || [];

      const hasBook = acc[val.member].includes(val.book);

      if (!hasBook) {
        acc[val.member].push(val.book);
      }
      return acc;
    },
    {} as { [key: string]: string[] },
  );
};

console.log(bookObj(checkouts));
// Task: Build an object where each member name maps to an
// array of unique book titles they've checked out (no duplicates).
// The books within each member's list should appear in the order
// they were first checked out.
//
// Expected output:
// {
//   Alice: ["Dune", "Neuromancer", "1984"],
//   Bob: ["1984", "Dune"],
//   Carol: ["Neuromancer", "Dune"],
// }

// ============================================================
// PROBLEM 3
// ============================================================

type TeamsType = {
  teamName: string;
  members: { name: string; certified: boolean }[];
};

const regTeams = (teams: TeamsType[]): string[] => {
  const res: string[] = [];
  for (const team of teams) {
    const name = team.teamName;

    const allCertified = team.members.every((m) => m.certified);

    if (allCertified) {
      res.push(name);
    }
  }

  return res;
};

const teams = [
  {
    teamName: "Alpha",
    members: [
      { name: "Lin", certified: true },
      { name: "Omar", certified: true },
      { name: "Tess", certified: true },
    ],
  },
  {
    teamName: "Bravo",
    members: [
      { name: "Kai", certified: true },
      { name: "Nia", certified: false },
      { name: "Raj", certified: true },
    ],
  },
  {
    teamName: "Charlie",
    members: [
      { name: "Zoe", certified: true },
      { name: "Eli", certified: true },
    ],
  },
  {
    teamName: "Delta",
    members: [
      { name: "Ivy", certified: false },
      { name: "Max", certified: false },
    ],
  },
];

console.log(regTeams(teams));

// Task: Find the names of teams where every single member
// is certified. Return just the team names as an array.
//
// Expected output:
// ["Alpha", "Charlie"]
//
// Test case 2: If all of Bravo's members were certified,
// expected output would be: ["Alpha", "Bravo", "Charlie"]
