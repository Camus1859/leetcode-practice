// Session 17 (Day 5, Session 1)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-19

// ============================================================
// PROBLEM 1
// ============================================================

export = {};

const employees = [
  {
    empId: "E001",
    name: "Sarah Connor",
    department: "Engineering",
    yearsEmployed: 5,
    salary: 95000,
  },
  {
    empId: "E002",
    name: "John Smith",
    department: "Marketing",
    yearsEmployed: 2,
    salary: 62000,
  },
  {
    empId: "E003",
    name: "Maria Garcia",
    department: "Engineering",
    yearsEmployed: 8,
    salary: 115000,
  },
  {
    empId: "E004",
    name: "James Wilson",
    department: "Sales",
    yearsEmployed: 1,
    salary: 55000,
  },
  {
    empId: "E005",
    name: "Linda Chen",
    department: "Engineering",
    yearsEmployed: 3,
    salary: 82000,
  },
  {
    empId: "E006",
    name: "Robert Brown",
    department: "Marketing",
    yearsEmployed: 6,
    salary: 78000,
  },
];

type EmployeesType = {
  empId: string;
  name: string;
  department: string;
  yearsEmployed: number;
  salary: number;
};

type EmployeesReturnedType = {
  name: string;
  adjustedSalary: number;
};

const getAllEmployees = (
  employees: EmployeesType[]
): EmployeesReturnedType[] => {
  return employees
    .filter((e) => e.department === "Engineering" && e.yearsEmployed >= 3)
    .map((e) => {
      return {
        name: e.name,
        adjustedSalary: e.salary * 0.1,
      };
    });
};

// Task: Get all employees in Engineering who have been employed for 3 or more years.
// Return only their name and salary, with the salary increased by 10% (as "adjustedSalary").
// Round adjustedSalary to 2 decimal places.
//
// Expected output:
// [
//   { name: "Sarah Connor", adjustedSalary: 104500 },
//   { name: "Maria Garcia", adjustedSalary: 126500 },
//   { name: "Linda Chen", adjustedSalary: 90200 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const purchases = [
  {
    purchaseId: "P1",
    customerId: "C100",
    amount: 250.0,
    category: "Electronics",
  },
  { purchaseId: "P2", customerId: "C101", amount: 45.99, category: "Books" },
  { purchaseId: "P3", customerId: "C100", amount: 120.0, category: "Clothing" },
  {
    purchaseId: "P4",
    customerId: "C102",
    amount: 89.5,
    category: "Electronics",
  },
  { purchaseId: "P5", customerId: "C101", amount: 34.99, category: "Books" },
  {
    purchaseId: "P6",
    customerId: "C100",
    amount: 199.99,
    category: "Electronics",
  },
  { purchaseId: "P7", customerId: "C102", amount: 67.0, category: "Clothing" },
];

type PurchasesType = {
  purchaseId: string;
  customerId: string;
  amount: number;
  category: string;
};

const calculateTotal = (
  purchases: PurchasesType[]
): { [key: string]: { totalSpent: number; purchaseCount: number } } => {
  return purchases.reduce((acc, val) => {
    acc[val.customerId] = acc[val.customerId] || {
      totalSpent: 0,
      purchaseCount: 0,
    };

    acc[val.customerId].totalSpent += val.amount;
    acc[val.customerId].purchaseCount += 1;
    return acc;
  }, {} as { [key: string]: { totalSpent: number; purchaseCount: number } });
};

console.log(calculateTotal(purchases))

// Task: Calculate the total spent AND the number of purchases for each customer.
//
// Expected output:
// {
//   "C100": { totalSpent: 569.99, purchaseCount: 3 },
//   "C101": { totalSpent: 80.98, purchaseCount: 2 },
//   "C102": { totalSpent: 156.5, purchaseCount: 2 }
// }

// ============================================================
// PROBLEM 3
// ============================================================

const applicants = [
  { applicantId: 1, name: "Alex Turner", score: 72, status: "pending" },
  { applicantId: 2, name: "Beth Collins", score: 88, status: "pending" },
  { applicantId: 3, name: "Carl Davis", score: 65, status: "rejected" },
  { applicantId: 4, name: "Diana Evans", score: 91, status: "pending" },
  { applicantId: 5, name: "Eric Foster", score: 78, status: "pending" },
  { applicantId: 6, name: "Fiona Grant", score: 85, status: "approved" },
];

type ApplicantsType = {
  applicantId: number,
  name: string,
  score: number,
  status: string
}

const findIndexPos = (applicants: ApplicantsType[]): number => {
  return applicants.findIndex((a)=> a.status === "pending" && a.score >= 85)
}

// Task: Find the index (position in the array) of the first pending applicant with a score of 85 or higher.
// Return -1 if no such applicant exists.
//
// Expected output: 1
//
// (Beth Collins is at index 1, has status "pending", and score 88 >= 85)
