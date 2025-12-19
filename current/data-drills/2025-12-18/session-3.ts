// Session 15 (Day 4, Session 3)
// Level: Beginner (Sessions 11-20: Two operations chained)
// Date: 2025-12-18

// ============================================================
// PROBLEM 1
// ============================================================

export = {};

const transactions = [
  { id: "TXN-001", amount: 250.0, type: "credit", account: "checking" },
  { id: "TXN-002", amount: 89.99, type: "debit", account: "checking" },
  { id: "TXN-003", amount: 1200.0, type: "credit", account: "savings" },
  { id: "TXN-004", amount: 45.0, type: "debit", account: "checking" },
  { id: "TXN-005", amount: 500.0, type: "debit", account: "savings" },
  { id: "TXN-006", amount: 75.5, type: "credit", account: "checking" },
];

type TransactionsType = {
  id: string;
  amount: number;
  type: string;
  account: string;
};

const getTransactions = (
  transactions: TransactionsType[]
): { id: string; amount: number }[] => {
  return transactions
    .filter((t) => t.type === "debit")
    .map((t) => {
      return {
        id: t.id,
        amount: -t.amount,
      };
    });
};

console.log(getTransactions(transactions));

// Task: Get all debit transactions and return them with the amount shown as negative.
// Include only the id and the negated amount (as "amount").
//
// Expected output:
// [
//   { id: "TXN-002", amount: -89.99 },
//   { id: "TXN-004", amount: -45 },
//   { id: "TXN-005", amount: -500 }
// ]

// ============================================================
// PROBLEM 2
// ============================================================

const messages = [
  { msgId: 1, channel: "general", author: "alice", text: "Hello everyone!" },
  { msgId: 2, channel: "random", author: "bob", text: "Check this out" },
  { msgId: 3, channel: "general", author: "charlie", text: "Good morning" },
  { msgId: 4, channel: "dev", author: "alice", text: "PR is ready" },
  { msgId: 5, channel: "general", author: "bob", text: "Anyone here?" },
  { msgId: 6, channel: "dev", author: "charlie", text: "LGTM" },
  { msgId: 7, channel: "random", author: "alice", text: "Fun fact..." },
];

type MessageType = {
  msgId: number;
  channel: string;
  author: string;
  text: string;
};

const groupMessages = (
  messages: MessageType[]
): { [key: string]: string[] } => {
  return messages.reduce((acc, val) => {
    acc[val.channel] = acc[val.channel] || [];
    acc[val.channel].push(val.text);
    return acc;
  }, {} as { [key: string]: string[] });
};

console.log(groupMessages(messages))

// Task: Group messages by channel. Each channel should have an array of message texts.
//
// Expected output:
// {
//   "general": ["Hello everyone!", "Good morning", "Anyone here?"],
//   "random": ["Check this out", "Fun fact..."],
//   "dev": ["PR is ready", "LGTM"]
// }

// ============================================================
// PROBLEM 3
// ============================================================

const servers = [
  {
    serverId: "srv-1",
    name: "web-prod-1",
    status: "running",
    healthCheck: true,
  },
  {
    serverId: "srv-2",
    name: "web-prod-2",
    status: "running",
    healthCheck: true,
  },
  {
    serverId: "srv-3",
    name: "db-prod-1",
    status: "running",
    healthCheck: true,
  },
  {
    serverId: "srv-4",
    name: "cache-prod",
    status: "running",
    healthCheck: true,
  },
  { serverId: "srv-5", name: "worker-1", status: "running", healthCheck: true },
];

type ServersType = {
  serverId: string,
  name: string,
  status: string,
  healthCheck: boolean
}

const checkServers = (servers: ServersType[]): boolean => {
  return servers.every((s)=> s.status === "running" && s.healthCheck === true)
}

// Task: Check if ALL servers are both running AND passing their health check.
// Return true only if every server meets both conditions.
//
// Expected output: true
//
// Additional test case:
// If srv-3 had status: "stopped", the result would be: false
// If srv-5 had healthCheck: false, the result would be: false
