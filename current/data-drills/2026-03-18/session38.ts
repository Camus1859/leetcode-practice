type Employee = {
  id: string;
  name: string;
  department: string;
  role: string;
  isRemote: boolean;
};

let employees: Employee[] = [
  {
    id: "1",
    name: "Alice Chen",
    department: "Engineering",
    role: "Senior Developer",
    isRemote: true,
  },
  {
    id: "2",
    name: "Bob Martinez",
    department: "Engineering",
    role: "Junior Developer",
    isRemote: false,
  },
  {
    id: "3",
    name: "Charlie Kim",
    department: "Design",
    role: "UI Designer",
    isRemote: true,
  },
  {
    id: "4",
    name: "Dana Wilson",
    department: "Marketing",
    role: "Content Lead",
    isRemote: false,
  },
  {
    id: "5",
    name: "Eve Patel",
    department: "Design",
    role: "UX Researcher",
    isRemote: true,
  },
  {
    id: "6",
    name: "Frank Lopez",
    department: "Marketing",
    role: "SEO Specialist",
    isRemote: false,
  },
];

// {
//   "total": 6,
//   "byDepartment": {
//     "Engineering": 2,
//     "Design": 2,
//     "Marketing": 2
//   },
//   "remoteCount": 3
// }

const ans = employees.reduce(
  (acc, val) => {
    acc["total"] = (acc["total"] || 0) + 1;
    acc["byDepartment"] = acc["byDepartment"] || {};
    acc["byDepartment"][val.department] = (acc["byDepartment"][val.department] || 0) + 1;
    acc["remoteCount"] = (acc["remoteCount"] || 0) + (val.isRemote ? 1 : 0);
    return acc;
  },
  {} as {
    total: number;
    byDepartment: { [key: string]: number };
    remoteCount: number;
  },
);

console.log(ans);
