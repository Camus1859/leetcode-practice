// Session 37
// Time target: ~30 minutes (3 problems, ~10 min each)

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const vehicles = [
  { id: "V01", make: "Toyota", model: "Camry", mileage: 45000, fuelType: "gas" },
  { id: "V02", make: "Tesla", model: "Model 3", mileage: 12000, fuelType: "electric" },
  { id: "V03", make: "Honda", model: "Civic", mileage: 89000, fuelType: "gas" },
  { id: "V04", make: "Ford", model: "F-150", mileage: 120000, fuelType: "gas" },
  { id: "V05", make: "Chevy", model: "Bolt", mileage: 30000, fuelType: "electric" },
  { id: "V06", make: "Toyota", model: "Corolla", mileage: 67000, fuelType: "gas" },
  { id: "V07", make: "BMW", model: "i4", mileage: 5000, fuelType: "electric" },
];

// Task: Filter vehicles with mileage under 75,000, then transform each
// into a string: "Make Model - Condition" where Condition is:
//   - "Like New" if mileage < 15,000
//   - "Excellent" if mileage < 40,000
//   - "Good" otherwise
//
// Expected output:
// [
//   "Toyota Camry - Good",
//   "Tesla Model 3 - Like New",
//   "Chevy Bolt - Excellent",
//   "Toyota Corolla - Good",
//   "BMW i4 - Like New"
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const classRosters = [
  { className: "Math 101", students: ["Alice", "Bob", "Carol"] },
  { className: "Physics 201", students: ["Bob", "Dan", "Eve"] },
  { className: "English 101", students: ["Alice", "Frank", "Eve", "Carol"] },
];

// Task: Flatten these rosters into a single array where each entry
// has the student name and which class they're in. A student who
// appears in multiple classes should have multiple entries.
//
// Expected output:
// [
//   { student: "Alice", class: "Math 101" },
//   { student: "Bob", class: "Math 101" },
//   { student: "Carol", class: "Math 101" },
//   { student: "Bob", class: "Physics 201" },
//   { student: "Dan", class: "Physics 201" },
//   { student: "Eve", class: "Physics 201" },
//   { student: "Alice", class: "English 101" },
//   { student: "Frank", class: "English 101" },
//   { student: "Eve", class: "English 101" },
//   { student: "Carol", class: "English 101" },
// ]

// ============================================================
// PROBLEM 3
// ============================================================

const team = [
  { name: "Alice", skills: ["JavaScript", "React", "CSS"] },
  { name: "Bob", skills: ["Python", "SQL", "JavaScript"] },
  { name: "Carol", skills: ["React", "TypeScript", "Node"] },
  { name: "Dan", skills: ["SQL", "Python", "Docker"] },
];

const requiredSkills = ["JavaScript", "React", "SQL", "Docker", "Kubernetes"];

// Task: Check whether the team collectively covers each required skill
// (at least one member has it). Return an object with:
//   - covered: true/false (are ALL required skills covered?)
//   - missingSkills: array of any required skills that no team member has
//
// Expected output:
// { covered: false, missingSkills: ["Kubernetes"] }
//
// Test case 2: If requiredSkills were ["JavaScript", "React", "SQL"]
// Expected: { covered: true, missingSkills: [] }
