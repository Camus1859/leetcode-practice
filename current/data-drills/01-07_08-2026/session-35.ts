// Session 35 (Day 10, Session 1)
// Level: Beginner (Sessions 31-40: Near-intermediate patterns)
// Date: 2026-01-07
// Focus: Partition by computed keys, merge with conflict resolution, filter+every with cross-reference

export {};

// ============================================================
// PROBLEM 1
// ============================================================

const reviews = [
  { id: 1, product: "Laptop", rating: 4.8 },
  { id: 2, product: "Mouse", rating: 3.2 },
  { id: 3, product: "Monitor", rating: 4.5 },
  { id: 4, product: "Keyboard", rating: 2.1 },
  { id: 5, product: "Headphones", rating: 3.9 },
  { id: 6, product: "Webcam", rating: 4.2 },
  { id: 7, product: "Speakers", rating: 1.5 },
];

type ReviewsType = {
  id: number;
  product: string;
  rating: number;
};

// Task: Partition reviews into three arrays based on rating:
// - "poor": rating < 3
// - "average": rating >= 3 AND rating <= 4
// - "excellent": rating > 4
//
// Return an object with those three keys, each containing
// an array of product names (strings, not full objects).
//
// Expected output:
// {
//   poor: ["Keyboard", "Speakers"],
//   average: ["Mouse", "Headphones"],
//   excellent: ["Laptop", "Monitor", "Webcam"]
// }

const partitionReviews = (
  reviews: ReviewsType[]
): { [key: string]: string[] } => {
  return reviews.reduce(
    (acc, val) => {
      if (val.rating < 3) {
        acc["poor"].push(val.product);
      } else if (val.rating >= 3 && val.rating <= 4) {
        acc["average"].push(val.product);
      } else {
        acc["excellent"].push(val.product);
      }
      return acc;
    },

    { poor: [], average: [], excellent: [] } as { [key: string]: string[] }
  );
};

const partitionReviews2 = (
  reviews: ReviewsType[]
): { [key: string]: string[] } => {
  const obj: { poor: string[]; average: string[]; excellent: string[] } = {
    poor: [],
    average: [],
    excellent: [],
  };

  for (const r of reviews) {
    if (r.rating < 3) {
      obj.poor.push(r.product);
    } else if (r.rating >= 3 && r.rating <= 4) {
      obj.average.push(r.product);
    } else {
      obj.excellent.push(r.product);
    }
  }
  return obj;
};

// ============================================================
// PROBLEM 2
// ============================================================

const systemA = [
  { odId: "C001", name: "Alice Smith", email: "alice@old.com", lastUpdated: 1 },
  { odId: "C002", name: "Bob Jones", email: "bob@a.com", lastUpdated: 3 },
  { odId: "C003", name: "Carol White", email: "carol@a.com", lastUpdated: 2 },
];

const systemB = [
  { odId: "C001", name: "Alice S.", email: "alice@new.com", lastUpdated: 5 },
  { odId: "C002", name: "Robert Jones", email: "bob@b.com", lastUpdated: 2 },
  { odId: "C004", name: "Dan Brown", email: "dan@b.com", lastUpdated: 4 },
];

// Task: Merge customer records from two systems into one array.
// When the sameB odId appears in both systems, keep ONLY the record
// with the higher lastUpdated value (discard the older one).
// Records that only exist in one system should be included as-is.
//
// Expected output (order doesn't matter):
// [
//   { odId: "C001", name: "Alice S.", email: "alice@new.com", lastUpdated: 5 },
//   { odId: "C002", name: "Bob Jones", email: "bob@a.com", lastUpdated: 3 },
//   { odId: "C003", name: "Carol White", email: "carol@a.com", lastUpdated: 2 },
//   { odId: "C004", name: "Dan Brown", email: "dan@b.com", lastUpdated: 4 }
// ]

type SystemType = {
  odId: string;
  name: string;
  email: string;
  lastUpdated: number;
};

const mergeCus = (systemA: SystemType[], systemB: SystemType[]) => {
  const res: SystemType[] = [];

  for (const a of systemA) {
    const sameB = systemB.find((b) => b.odId === a.odId);

    if (sameB && sameB?.lastUpdated > a.lastUpdated) {
      res.push(sameB);
    } else if (sameB && sameB?.lastUpdated < a.lastUpdated) {
      res.push(a);
    } else {
      res.push(a);
    }
  }

  for (const b of systemB) {
    const r = res.find((r) => r.odId === b.odId);

    if (!r) {
      res.push(b);
    }
  }

  return res;
};
// console.log(mergeCus(systemA, systemB));

// ============================================================
// PROBLEM 3
// ============================================================

const teams = [
  { teamId: "T1", name: "Alpha", members: ["Alice", "Bob", "Carol"] },
  { teamId: "T2", name: "Beta", members: ["Dan"] },
  { teamId: "T3", name: "Gamma", members: ["Eve", "Frank", "Grace", "Hank"] },
  { teamId: "T4", name: "Delta", members: ["Ivy", "Jack"] },
];

type TeamsType = {
  teamId: string;
  name: string;
  members: string[];
};

const requiredSkills = ["javascript", "python"];

type RequiredSkillsType = string;

const certifications = [
  { person: "Alice", skills: ["javascript", "python", "sql"] },
  { person: "Bob", skills: ["javascript"] },
  { person: "Carol", skills: ["python", "java"] },
  { person: "Dan", skills: ["javascript", "python", "go"] },
  { person: "Eve", skills: ["rust", "c++"] },
  { person: "Frank", skills: ["javascript"] },
  { person: "Grace", skills: ["python"] },
  { person: "Hank", skills: ["javascript", "python"] },
  { person: "Ivy", skills: ["sql", "python"] },
  { person: "Jack", skills: ["javascript", "react"] },
];

type CertificationsType = {
  person: string;
  skills: string[];
};

const everyMemberHasOneSkill = (
  member: string,
  certifications: CertificationsType[]
): Boolean | undefined => {
  const skills = certifications.find((cert) => cert.person === member)?.skills;
  return skills && skills.some((skill) => requiredSkills.includes(skill));
};

const checkSkills = (
  teams: TeamsType[],
  certifications: CertificationsType[]
): string[] => {
  return teams.filter((team)=> {
    return team.members.every((member)=> {
      return everyMemberHasOneSkill(member, certifications);
    })
  }).map((team)=> team.name)
};

console.log(checkSkills(teams, certifications));

// Task: Find teams where EVERY member has at least ONE of the required skills.
// A person qualifies if their skills array includes "javascript" OR "python".
//
// Return an array of team names (strings) that meet this criteria.
//
// Expected output:
// ["Alpha", "Beta", "Delta"]
//
// Explanation:
// - Alpha: Alice (js+py), Bob (js), Carol (py) - all qualify
// - Beta: Dan (js+py) - qualifies
// - Gamma: Eve has neither js nor py - team fails
// - Delta: Ivy (py), Jack (js) - all qualify
