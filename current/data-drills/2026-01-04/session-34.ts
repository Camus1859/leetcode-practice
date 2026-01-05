// Session 34 (Day 9, Session 4)
// Level: Beginner (Sessions 31-40: Near-intermediate patterns)
// Date: 2026-01-04
// Ramping up difficulty

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const products = [
  { id: "P001", name: "Laptop", category: "Electronics" },
  { id: "P002", name: "Desk Chair", category: "Furniture" },
  { id: "P003", name: "Monitor", category: "Electronics" },
  { id: "P004", name: "Bookshelf", category: "Furniture" },
  { id: "P005", name: "Keyboard", category: "Electronics" },
];

type ProductsType = {
  id: string,
  name: string,
  category: string
}

type ProductsReturnType = {
  [key:string]: {id: string, name: string, category: string}
}

const buildLookUpTable = (products: ProductsType[]): ProductsReturnType => {

  return products.reduce((acc, val)=> {

    acc[val.id] = acc[val.id] || {
      id: val.id,
      name: val.name,
      category: val.category
    };
    return acc

  }, {} as ProductsReturnType)

}

console.log(buildLookUpTable(products))

// Task: Build a lookup object where the key is the product id
// and the value is the full product object.
//
// Expected output:
// {
//   "P001": { id: "P001", name: "Laptop", category: "Electronics" },
//   "P002": { id: "P002", name: "Desk Chair", category: "Furniture" },
//   "P003": { id: "P003", name: "Monitor", category: "Electronics" },
//   "P004": { id: "P004", name: "Bookshelf", category: "Furniture" },
//   "P005": { id: "P005", name: "Keyboard", category: "Electronics" }
// }


// ============================================================
// PROBLEM 2
// ============================================================

const currentSubscribers = ["alice@mail.com", "bob@mail.com", "carol@mail.com", "dan@mail.com"];
const previousSubscribers = ["bob@mail.com", "carol@mail.com", "eve@mail.com", "frank@mail.com"];

// Task: Find who unsubscribed (was in previous but not in current).
// Return as an array of emails.
//
// Expected output:
// ["eve@mail.com", "frank@mail.com"]

const res: string[] = []

for(const p of previousSubscribers){

  const isFound = currentSubscribers.find((c)=> c === p)

  if(!isFound){
    res.push(p)

  }

}

console.log(res)

// ============================================================
// PROBLEM 3
// ============================================================

const employees = [
  { id: 1, name: "Alice", department: "Engineering", skills: ["javascript", "python", "sql"] },
  { id: 2, name: "Bob", department: "Marketing", skills: ["seo", "analytics"] },
  { id: 3, name: "Carol", department: "Engineering", skills: ["java", "kotlin"] },
  { id: 4, name: "Dan", department: "Engineering", skills: ["javascript", "react", "node"] },
  { id: 5, name: "Eve", department: "HR", skills: ["recruiting", "training"] },
];

type EmployeesType = {
  id: number,
  name: string,
  department: string,
  skills: string[]
}

const engEmployees = (employees: EmployeesType[]): {name: string, skills: string}[] => {

  return employees.filter(
    (e) => e.department === "Engineering" && e.skills.includes("javascript")
  ).map((e)=> {

    return {
      name: e.name,
      skills: e.skills.join(", ")
    }
  })

}

console.log(engEmployees(employees))

// Task: Get Engineering employees who know "javascript".
// Return an array of objects with just name and skills (as a comma-separated string).
//
// Expected output:
// [
//   { name: "Alice", skills: "javascript, python, sql" },
//   { name: "Dan", skills: "javascript, react, node" }
// ]
