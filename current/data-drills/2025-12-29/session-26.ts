// Session 26 (Day 7, Session 2)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2025-12-29

export = {};

// ============================================================
// PROBLEM 1
// ============================================================

const salesReps = [
  { repId: "R001", region: "North", deals: 12, revenue: 45000 },
  { repId: "R002", region: "South", deals: 8, revenue: 32000 },
  { repId: "R003", region: "North", deals: 15, revenue: 58000 },
  { repId: "R004", region: "South", deals: 10, revenue: 41000 },
  { repId: "R005", region: "East", deals: 6, revenue: 24000 },
  { repId: "R006", region: "East", deals: 9, revenue: 35000 },
  { repId: "R007", region: "North", deals: 7, revenue: 28000 },
];

type SalesRepsType = {
  repId: string;
  region: string;
  deals: number;
  revenue: number;
};

const groupSales = (
  salesReps: SalesRepsType[]
): { [key: string]: { [key: string]: number } } => {
  const res = salesReps.reduce((acc, val) => {
    acc[val.region] = acc[val.region] || {
      repCount: 0,
      totalDeals: 0,
      totalRevenue: 0,
      avgRevenuePerDeal: 0,
    };

    acc[val.region].repCount += 1;
    acc[val.region].totalDeals += val.deals;
    acc[val.region].totalRevenue += val.revenue;
    acc[val.region].avgRevenuePerDeal += val.revenue;
    return acc;
  }, {} as { [key: string]: { [key: string]: number } });

  const res2 = Object.entries(res).map((r) => {
    const key = r[0];
    const obj = r[1];
    const avgRevenuePerDeal = Number(
      (obj.totalRevenue / obj.totalDeals).toFixed(2)
    );

    return [key, { ...obj, avgRevenuePerDeal }];
  });

  return Object.fromEntries(res2);
};

// Task: Group sales reps by region. For each region, calculate:
// - repCount (how many reps in that region)
// - totalDeals (sum of all deals)
// - totalRevenue (sum of all revenue)
// - avgRevenuePerDeal (totalRevenue / totalDeals, rounded to 2 decimals)
//
// Return as an object keyed by region name.
//
// Expected output:
// {
//   "North": { repCount: 3, totalDeals: 34, totalRevenue: 131000, avgRevenuePerDeal: 3852.94 },
//   "South": { repCount: 2, totalDeals: 18, totalRevenue: 73000, avgRevenuePerDeal: 4055.56 },
//   "East": { repCount: 2, totalDeals: 15, totalRevenue: 59000, avgRevenuePerDeal: 3933.33 }
// }

// ============================================================
// PROBLEM 2
// ============================================================

const employees = [
  {
    id: 1,
    name: "Sarah",
    department: "Engineering",
    salary: 85000,
    yearsAtCompany: 4,
  },
  {
    id: 2,
    name: "Mike",
    department: "Sales",
    salary: 72000,
    yearsAtCompany: 2,
  },
  {
    id: 3,
    name: "Lisa",
    department: "Engineering",
    salary: 92000,
    yearsAtCompany: 6,
  },
  {
    id: 4,
    name: "Tom",
    department: "Marketing",
    salary: 68000,
    yearsAtCompany: 3,
  },
  {
    id: 5,
    name: "Anna",
    department: "Engineering",
    salary: 78000,
    yearsAtCompany: 1,
  },
  {
    id: 6,
    name: "James",
    department: "Sales",
    salary: 81000,
    yearsAtCompany: 5,
  },
];

type EmployeesType = {
  id: number;
  name: string;
  department: string;
  salary: number;
  yearsAtCompany: number;
};

type EmployeesReturnType = {
  id: number;
  name: string;
  salary: number;
  bonus: number;
  totalComp: number;
};

const findEng = (employees: EmployeesType[]): EmployeesReturnType[] => {
  return employees
    .filter((e) => e.department === "Engineering" && e.yearsAtCompany >= 3)
    .map((e) => {
      let bonus: number = 1;

      if (e.yearsAtCompany >= 3 && e.yearsAtCompany <= 5) {
        bonus = e.salary * 0.1;
      } else if (e.yearsAtCompany >= 6) {
        bonus = e.salary * 0.15;
      }

      return {
        id: e.id,
        name: e.name,
        salary: e.salary,
        bonus: Number(bonus.toFixed(2)),
        totalComp: e.salary + bonus,
      };
    });
};

// Task: Find all Engineering employees with at least 3 years at the company.
// For each qualifying employee, calculate their bonus:
// - 10% of salary if yearsAtCompany is 3-5
// - 15% of salary if yearsAtCompany is 6 or more
//
// Return an array with: id, name, salary, bonus (rounded to 2 decimals), and totalComp (salary + bonus).
//
// Expected output:
// [
//   { id: 1, name: "Sarah", salary: 85000, bonus: 8500, totalComp: 93500 },
//   { id: 3, name: "Lisa", salary: 92000, bonus: 13800, totalComp: 105800 }
// ]

// ============================================================
// PROBLEM 3
// ============================================================

const orders = [
  {
    orderId: "O001",
    customer: "Acme Corp",
    amount: 5200,
    priority: "high",
    daysOpen: 3,
  },
  {
    orderId: "O002",
    customer: "Beta Inc",
    amount: 3100,
    priority: "medium",
    daysOpen: 7,
  },
  {
    orderId: "O003",
    customer: "Gamma LLC",
    amount: 5200,
    priority: "high",
    daysOpen: 1,
  },
  {
    orderId: "O004",
    customer: "Delta Co",
    amount: 8900,
    priority: "low",
    daysOpen: 14,
  },
  {
    orderId: "O005",
    customer: "Echo Ltd",
    amount: 3100,
    priority: "high",
    daysOpen: 5,
  },
  {
    orderId: "O006",
    customer: "Foxtrot",
    amount: 8900,
    priority: "medium",
    daysOpen: 2,
  },
];

type SortType = {
  orderId: string,
  customer: string,
  amount: number,
  priority: string,
  daysOpen: number
}

const sortOrders = (orders: SortType[]): SortType[] => {

  const data: {[key:string]: number} = {}

  return orders.sort((a, b)=> {
    if(a.priority !== b.priority){
      return data[b.priority] - data[a.priority]
    }

    if(a.amount !== b.amount){
      return b.amount - a.amount
    }

    return a.daysOpen - b.daysOpen
  })

}

// Task: Sort orders by:
// 1. priority (high first, then medium, then low)
// 2. If priority is equal, by amount (descending - higher amounts first)
// 3. If both are equal, by daysOpen (ascending - fewer days first)
//
// Expected output:
// [
//   { orderId: "O003", customer: "Gamma LLC", amount: 5200, priority: "high", daysOpen: 1 },
//   { orderId: "O001", customer: "Acme Corp", amount: 5200, priority: "high", daysOpen: 3 },
//   { orderId: "O005", customer: "Echo Ltd", amount: 3100, priority: "high", daysOpen: 5 },
//   { orderId: "O006", customer: "Foxtrot", amount: 8900, priority: "medium", daysOpen: 2 },
//   { orderId: "O002", customer: "Beta Inc", amount: 3100, priority: "medium", daysOpen: 7 },
//   { orderId: "O004", customer: "Delta Co", amount: 8900, priority: "low", daysOpen: 14 }
// ]
