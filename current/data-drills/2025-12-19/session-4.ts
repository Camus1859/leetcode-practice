// Session 20 (Day 5, Session 4)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-19

// ============================================================
// PROBLEM 1
// ============================================================

const members = [
  {
    memberId: "M001",
    name: "Alice Wong",
    plan: "premium",
    monthlyFee: 49.99,
    isActive: true,
  },
  {
    memberId: "M002",
    name: "Bob Lee",
    plan: "basic",
    monthlyFee: 19.99,
    isActive: false,
  },
  {
    memberId: "M003",
    name: "Carol Park",
    plan: "premium",
    monthlyFee: 49.99,
    isActive: true,
  },
  {
    memberId: "M004",
    name: "Dan Kim",
    plan: "basic",
    monthlyFee: 19.99,
    isActive: true,
  },
  {
    memberId: "M005",
    name: "Eva Chen",
    plan: "premium",
    monthlyFee: 49.99,
    isActive: false,
  },
];

type MembersType = {
  memberId: string;
  name: string;
  plan: string;
  monthlyFee: number;
  isActive: boolean;
};

const getAllActive = (
  members: MembersType[]
): { name: string; annualCost: number }[] => {
  return members
    .filter((m) => m.isActive && m.plan === "premium")
    .map((m) => {
      const annualCost = m.monthlyFee * 12;

      return {
        name: m.name,
        annualCost,
      };
    });
};

// Task: Get all active members on the premium plan.
// Return their name and their annual cost (monthlyFee * 12), labeled as "annualCost".
//
// Expected output:
// [
//   { name: "Alice Wong", annualCost: 599.88 },
//   { name: "Carol Park", annualCost: 599.88 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const timeEntries = [
  { entryId: 1, projectId: "PROJ-A", userId: "U1", hours: 4 },
  { entryId: 2, projectId: "PROJ-B", userId: "U2", hours: 6 },
  { entryId: 3, projectId: "PROJ-A", userId: "U2", hours: 3 },
  { entryId: 4, projectId: "PROJ-A", userId: "U1", hours: 5 },
  { entryId: 5, projectId: "PROJ-B", userId: "U1", hours: 2 },
  { entryId: 6, projectId: "PROJ-B", userId: "U2", hours: 4 },
];

type TimeEntriesType = {
  entryId: number;
  projectId: string;
  userId: string;
  hours: number;
};

const calculateHours = (
  timeEntries: TimeEntriesType[]
): { [key: string]: { totalHours: number; entryCount: number } } => {
  return timeEntries.reduce((acc, val) => {
    acc[val.projectId] = acc[val.projectId] || {
      totalHours: 0,
      entryCount: 0,
    };

    acc[val.projectId].totalHours += val.hours;

    acc[val.projectId].entryCount + 1;
    return acc;
  }, {} as { [key: string]: { totalHours: number; entryCount: number } });
};

console.log(calculateHours(timeEntries))

// Task: Calculate the total hours AND number of entries for each project.
//
// Expected output:
// {
//   "PROJ-A": { totalHours: 12, entryCount: 3 },
//   "PROJ-B": { totalHours: 12, entryCount: 3 }
// }

// ============================================================
// PROBLEM 3
// ============================================================

const shipments = [
  { shipmentId: "S001", destination: "NYC", weight: 45, hasInsurance: true },
  { shipmentId: "S002", destination: "LA", weight: 120, hasInsurance: true },
  { shipmentId: "S003", destination: "CHI", weight: 30, hasInsurance: true },
  { shipmentId: "S004", destination: "NYC", weight: 85, hasInsurance: true },
];

type ShipmentsType = {
  shipmentId: string,
  destination: string,
  weight: number,
  hasInsurance: boolean
}

const checkShipments = (shipments: ShipmentsType[]): boolean => {
  return shipments.filter((s)=> s.weight > 50).every((s)=> s.hasInsurance)
}

// Task: Check if ALL shipments over 50 lbs have insurance.
// Return true only if every shipment with weight > 50 has hasInsurance: true.
// (Shipments 50 lbs or under don't need to be checked)
//
// Expected output: true
//
// (S002 is 120 lbs with insurance ✓, S004 is 85 lbs with insurance ✓)
// (S001 and S003 are under 50 lbs so they don't affect the result)
