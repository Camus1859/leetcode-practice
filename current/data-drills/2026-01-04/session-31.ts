// Session 31 (Day 9, Session 1)
// Level: Beginner (Sessions 31-40: Near-intermediate patterns)
// Date: 2026-01-04
// New methods: split, join, trim, toLowerCase

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const rawTags = [
  "  JavaScript ",
  "typescript",
  "  REACT",
  "node.js  ",
  "JavaScript",
  "  TypeScript  ",
  "react",
  "EXPRESS",
  "  node.js",
  "express  ",
];

const cleanUp = (rawTags: string[]) => {
  const res: string[] = [];

  for (const st of rawTags) {
    const s = st.trim().toLowerCase();

    if (!res.includes(s)) {
      res.push(s);
    }
  }
  return res.sort((a, b) => a.localeCompare(b));
};

console.log(cleanUp(rawTags));

// Task: Clean up and deduplicate this list of tags.
// - Remove leading/trailing whitespace
// - Convert to lowercase
// - Remove duplicates
// - Return as a sorted array
//
// Expected output:
// ["express", "javascript", "node.js", "react", "typescript"]

// ============================================================
// PROBLEM 2
// ============================================================

const logEntries = [
  "2024-03-15|ERROR|Database connection failed",
  "2024-03-15|INFO|User login successful",
  "2024-03-15|ERROR|Timeout on API call",
  "2024-03-15|WARN|Memory usage high",
  "2024-03-15|INFO|Cache cleared",
  "2024-03-15|ERROR|Invalid token received",
  "2024-03-15|DEBUG|Request payload logged",
];

const parseLogs = (logEntries: string[]) => {
  return logEntries.reduce((acc, val) => {
    const key = val.split("|")[1];
    const s = val.split("|")[2];

    acc[key] = acc[key] || [];
    acc[key].push(s);
    return acc;
  }, {} as { [key: string]: string[] });
};

console.log(parseLogs(logEntries));

// Task: Parse these log entries and group them by level.
// Each entry is formatted as "date|level|message".
//
// Return an object where keys are the log levels and values are arrays
// of just the messages (not the full entry).
//
// Expected output:
// {
//   ERROR: ["Database connection failed", "Timeout on API call", "Invalid token received"],
//   INFO: ["User login successful", "Cache cleared"],
//   WARN: ["Memory usage high"],
//   DEBUG: ["Request payload logged"]
// }

// ============================================================
// PROBLEM 3
// ============================================================

const users = [
  { id: 1, name: "Alice", skills: ["js", "ts", "react"] },
  { id: 2, name: "Bob", skills: ["python", "django"] },
  { id: 3, name: "Carol", skills: ["js", "node", "express"] },
  { id: 4, name: "Dan", skills: ["java"] },
];

type UsersType = {
  id: number;
  name: string;
  skills: string[];
};

const formatSummary = (users: UsersType[]): string[] => {
  return users.map((u) => {
    const name = u.name + ": ";
    let str = u.skills.join(" & ");
    return name + str;
  });
};

console.log(formatSummary(users));

// Task: Create a formatted summary for each user.
//
// For users with 2+ skills, join their skills with " & " (space-ampersand-space).
// For users with 1 skill, just use that skill.
//
// Return an array of strings in the format: "Name: skill1 & skill2 & skill3"
//
// Expected output:
// [
//   "Alice: js & ts & react",
//   "Bob: python & django",
//   "Carol: js & node & express",
//   "Dan: java"
// ]
