// Session 25 - QUIZ (Fresh Start)
// Level: Beginner (Sessions 21-30: Multi-field operations)
// Date: 2025-12-26
// Time limit: 75 minutes (10 problems, ~7.5 min each)
// Concepts tested: Top 10 struggles from Sessions 13-23

export = {};

// ============================================================
// PROBLEM 1 - Discount/Increase Math
// ============================================================

const subscriptions = [
  { id: "SUB001", plan: "premium", monthlyRate: 40 },
  { id: "SUB002", plan: "basic", monthlyRate: 15 },
  { id: "SUB003", plan: "premium", monthlyRate: 40 },
  { id: "SUB004", plan: "standard", monthlyRate: 25 },
  { id: "SUB005", plan: "basic", monthlyRate: 15 },
];

type SubscriptionsType = {
  id: string;
  plan: string;
  monthlyRates: number;
};

type SubscriptionsReturnType = {
  id: string;
  plan: string;
  adjustedRate: number;
};

const adjust = (
  subscriptions: SubscriptionsType[]
): SubscriptionsReturnType[] => {
  return subscriptions.map((s) => {
    let adjustedRate: number | null = null;

    if (s.plan === "premium") {
      adjustedRate = s.monthlyRates * 0.8;
    } else if (s.plan === "basic") {
      adjustedRate = s.monthlyRates * 1.05;
    } else {
      adjustedRate = s.monthlyRates;
    }

    return {
      id: s.id,
      plan: s.plan,
      adjustedRate: Number(adjustedRate.toFixed(2)),
    };
  });
};

// Task: Apply promotional adjustments:
// - Premium subscribers get a 20% discount
// - Basic subscribers get a 5% increase (price went up)
// - Standard subscribers stay the same
//
// Return an array with id, plan, and adjustedRate (rounded to 2 decimals).
//
// Expected output:
// [
//   { id: "SUB001", plan: "premium", adjustedRate: 32.00 },
//   { id: "SUB002", plan: "basic", adjustedRate: 15.75 },
//   { id: "SUB003", plan: "premium", adjustedRate: 32.00 },
//   { id: "SUB004", plan: "standard", adjustedRate: 25.00 },
//   { id: "SUB005", plan: "basic", adjustedRate: 15.75 }
// ]

// ============================================================
// PROBLEM 2 - Reading Comprehension (Multiple Conditions)
// ============================================================

const vehicles = [
  { id: 1, type: "sedan", mileage: 45000, electric: false, certified: true },
  { id: 2, type: "suv", mileage: 28000, electric: true, certified: true },
  { id: 3, type: "sedan", mileage: 82000, electric: false, certified: false },
  { id: 4, type: "truck", mileage: 35000, electric: false, certified: true },
  { id: 5, type: "suv", mileage: 15000, electric: true, certified: true },
  { id: 6, type: "sedan", mileage: 52000, electric: false, certified: true },
];

type VehiclesType = {
  id: number;
  type: string;
  mileage: number;
  electric: boolean;
  certified: boolean;
};

type VehiclesReturnType = Omit<VehiclesType, "type" | "electric" | "certified">;

const getVehicles = (vehicles: VehiclesType[]): VehiclesReturnType[] => {
  return vehicles
    .filter(
      (v) => v.type === "suv" && v.certified === true && v.mileage < 30000
    )
    .map((v) => {
      return {
        id: v.id,
        mileage: v.mileage,
      };
    });
};

// Task: Find all vehicles that are:
// - type "suv" AND
// - are certified AND
// - have mileage under 30000
//
// Return an array with just the id and mileage.
//
// Expected output:
// [
//   { id: 2, mileage: 28000 },
//   { id: 5, mileage: 15000 }
// ]

// ============================================================
// PROBLEM 3 - Multi-Criteria Sort
// ============================================================

const candidates = [
  { name: "Jordan", experience: 5, certifications: 3, salary: 85000 },
  { name: "Taylor", experience: 8, certifications: 2, salary: 95000 },
  { name: "Morgan", experience: 5, certifications: 3, salary: 80000 },
  { name: "Casey", experience: 8, certifications: 4, salary: 100000 },
  { name: "Riley", experience: 5, certifications: 1, salary: 70000 },
];

type CandidatesType = {
  name: string;
  experience: number;
  certifications: number;
  salary: number;
};

const sort = (candidates: CandidatesType[]): CandidatesType[] => {
  return candidates.sort((a, b) => {
    if (a.experience !== b.experience) {
      return b.experience - a.experience;
    } else if (a.certifications !== b.certifications) {
      return b.certifications - a.certifications;
    } else {
      return a.salary - b.salary;
    }
  });
};

console.log(sort(candidates));

// Task: Sort candidates to show the "best" ones first.
// Best = most years of experience. If tied, prefer more certifications.
// If still tied, prefer lower salary expectation.
//
// Expected output:
// [
//   { name: "Casey", experience: 8, certifications: 4, salary: 100000 },
//   { name: "Taylor", experience: 8, certifications: 2, salary: 95000 },
//   { name: "Morgan", experience: 5, certifications: 3, salary: 80000 },
//   { name: "Jordan", experience: 5, certifications: 3, salary: 85000 },
//   { name: "Riley", experience: 5, certifications: 1, salary: 70000 }
// ]

// ============================================================
// PROBLEM 4 - Object.entries + Object.fromEntries
// ============================================================

const stockPrices = {
  AAPL: { shares: 100, pricePerShare: 175.5 },
  GOOGL: { shares: 25, pricePerShare: 140.25 },
  MSFT: { shares: 80, pricePerShare: 378.0 },
  AMZN: { shares: 40, pricePerShare: 185.75 },
};

type StockPricesType = {
  [key: string]: { shares: number; pricePerShare: number };
};

const transformStockPrices = (stockPrices: StockPricesType) => {
  const x = Object.entries(stockPrices).map((s) => {
    const key = s[0];
    const obj = s[1];
    const totalValue = obj.pricePerShare * obj.shares;

    return [key, { ...obj, totalValue }];
  });

  return Object.fromEntries(x);
};

console.log(transformStockPrices(stockPrices));

// Task: Transform the stockPrices object so each stock includes its totalValue
// (shares * pricePerShare, rounded to 2 decimals).
//
// Expected output:
// {
//   AAPL: { shares: 100, pricePerShare: 175.50, totalValue: 17550.00 },
//   GOOGL: { shares: 25, pricePerShare: 140.25, totalValue: 3506.25 },
//   MSFT: { shares: 80, pricePerShare: 378.00, totalValue: 30240.00 },
//   AMZN: { shares: 40, pricePerShare: 185.75, totalValue: 7430.00 }
// }

// ============================================================
// PROBLEM 5 - Rounding with toFixed
// ============================================================

const measurements = [
  { id: "M1", value: 98.7654, unit: "kg" },
  { id: "M2", value: 156.1119, unit: "cm" },
  { id: "M3", value: 37.8888, unit: "celsius" },
  { id: "M4", value: 72.5555, unit: "bpm" },
];

type MeasurementsType = {
  id: string;
  value: number;
  unit: string;
};

const roundMes = (
  measurements: MeasurementsType[]
): { id: string; roundedValue: number; unit: string }[] => {
  return measurements.map((m) => {
    return {
      id: m.id,
      unit: m.unit,
      roundedValue: Number(m.value.toFixed(2)),
    };
  });
};

// Task: Round all measurements so the value has exactly 1 decimal place.
// Return an array with id, roundedValue (as a number, not string), and unit.
//
// Expected output:
// [
//   { id: "M1", roundedValue: 98.8, unit: "kg" },
//   { id: "M2", roundedValue: 156.1, unit: "cm" },
//   { id: "M3", roundedValue: 37.9, unit: "celsius" },
//   { id: "M4", roundedValue: 72.6, unit: "bpm" }
// ]

// ============================================================
// PROBLEM 6 - Accumulation (+= Pattern)
// ============================================================

const donations = [
  { donor: "Alice", campaign: "Education", amount: 150 },
  { donor: "Bob", campaign: "Health", amount: 200 },
  { donor: "Alice", campaign: "Health", amount: 75 },
  { donor: "Carol", campaign: "Education", amount: 300 },
  { donor: "Bob", campaign: "Education", amount: 125 },
  { donor: "Alice", campaign: "Environment", amount: 50 },
];

type DonationsType = {
  donor: string;
  campaign: string;
  amount: number;
};

const calculate = (donations: DonationsType[]): { [key: string]: number } => {
  return donations.reduce((acc, val) => {
    acc[val.campaign] = (acc[val.campaign] || 0) + val.amount;
    return acc;
  }, {} as { [key: string]: number });
};

// Task: Calculate total donations per campaign.
//
// Expected output:
// { Education: 575, Health: 275, Environment: 50 }

// ============================================================
// PROBLEM 7 - Two-Level Logic
// ============================================================

// Task: Find all managers who have at least one employee with performance above 85.
// Return an array of unique manager names, sorted alphabetically.
//
// Expected output:
// ["Kim", "Lee"]

const departments = [
  { deptId: "D1", manager: "Kim" },
  { deptId: "D2", manager: "Lee" },
  { deptId: "D3", manager: "Kim" },
  { deptId: "D4", manager: "Park" },
];

type DepartmentsType = {
  deptId: string;
  manager: string;
};

const employees = [
  { empId: "E1", deptId: "D1", performance: 92 },
  { empId: "E2", deptId: "D1", performance: 78 },
  { empId: "E3", deptId: "D2", performance: 88 },
  { empId: "E4", deptId: "D3", performance: 95 },
  { empId: "E5", deptId: "D4", performance: 70 },
];

type EmployeesType = {
  empId: string;
  deptId: string;
  performance: number;
};

const findManagers = (
  department: DepartmentsType[],
  employees: EmployeesType[]
): string[] => {
  const res: Set<string> = new Set([]);

  for (const e of employees) {
    if (e.performance > 85) {
      for (const d of department) {
        if (e.deptId === d.deptId) {
          res.add(d.manager);
        }
      }
    }
  }
  return [...res].sort((a, b)=> {
    return a.localeCompare(b)
  })
};

console.log(findManagers(departments, employees));

// ============================================================
// PROBLEM 8 - Number Formatting (toLocaleString)
// ============================================================

const budgets = [
  { department: "Marketing", amount: 450000 },
  { department: "Engineering", amount: 1200000 },
  { department: "Sales", amount: 675000 },
  { department: "HR", amount: 225000 },
];

type BudgetsType = {
  department: string;
  amount: number;
};

const formatDept = (
  budget: BudgetsType[]
): { department: string; formattedBudget: string }[] => {
  return budget.map((b) => {
    return {
      department: b.department,
      formattedBudget: b.amount.toLocaleString("en-us"),
    };
  });
};

// Task: Format each department's budget as a US dollar string with commas and $ prefix.
// Return an array with department and formattedBudget.
//
// Expected output:
// [
//   { department: "Marketing", formattedBudget: "$450,000" },
//   { department: "Engineering", formattedBudget: "$1,200,000" },
//   { department: "Sales", formattedBudget: "$675,000" },
//   { department: "HR", formattedBudget: "$225,000" }
// ]

// ============================================================
// PROBLEM 9 -
// ============================================================

const tasks = [
  { id: 1, status: "done", hours: 8, priority: "high" },
  { id: 2, status: "in-progress", hours: 4, priority: "low" },
  { id: 3, status: "done", hours: 12, priority: "high" },
  { id: 4, status: "blocked", hours: 6, priority: "medium" },
  { id: 5, status: "done", hours: 5, priority: "high" },
  { id: 6, status: "done", hours: 3, priority: "low" },
];

type TasksType = {
  id: number;
  status: string;
  hours: number;
  priority: string;
};

const totalHours = (tasks: TasksType[]) => {
  return tasks
    .filter((t) => t.status === "done" && t.priority === "high")
    .reduce((acc, val) => {
      return acc + val.hours;
    }, 0);
};

console.log(totalHours(tasks))

// Task: Calculate total hours spent on ONLY:
// - tasks with status "done" AND
// - tasks with priority "high"
//
// Expected output:
// 25

// ============================================================
// PROBLEM 10 -
// ============================================================

const players = [
  { name: "Aria", points: 2400, gamesPlayed: 50 },
  { name: "Blake", points: 1800, gamesPlayed: 45 },
  { name: "Cody", points: 2400, gamesPlayed: 48 },
  { name: "Dana", points: 1800, gamesPlayed: 40 },
  { name: "Evan", points: 2400, gamesPlayed: 52 },
];

type PlayersType = {
  name: string,
  points: number,
  gamesPlayed: number
}

const sortPlayers = (players: PlayersType[]):string[] => {


return players.sort((a,b)=> {

  if(a.points !== b.points){
    return b.points - a.points
  }
  if(a.gamesPlayed !== b.gamesPlayed){
    return a.gamesPlayed - b.gamesPlayed
  }


return 0
}).map((p)=> p.name)


}

console.log(sortPlayers(players))

// Task: Sort players by:
// 1. points (descending - highest first)
// 2. If points are equal, by gamesPlayed (ascending - fewer games = more efficient)
//
// Return just the names in order.
//
// Expected output:
// ["Cody", "Aria", "Evan", "Dana", "Blake"]
