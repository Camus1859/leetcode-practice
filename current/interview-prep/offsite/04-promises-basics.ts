// 04 — Promises (Learn from scratch)
// 6 problems: building up from zero
//
// READ THIS FIRST:
// ==================
// A Promise represents a value that doesn't exist yet — like ordering
// food at a restaurant. You place the order (call the function) and
// get a ticket (the Promise). Later, the food either arrives (resolves)
// or they tell you it's unavailable (rejects).
//
// Key syntax:
//   async function name() { }    — marks a function as async
//   const result = await thing   — waits for a Promise to finish
//   try { } catch (error) { }    — handles errors from rejected Promises
//
// You CANNOT use "await" unless you're inside an "async" function.

export {};

// ============================================================
// Here are some helper functions that simulate API calls.
// Don't modify these — just use them in the problems below.
// ============================================================

// Simulates fetching a user — always succeeds (after a short delay)
const getUser = (userId: string): Promise<{ id: string; name: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users: Record<string, string> = {
        U1: "Alice",
        U2: "Bob",
        U3: "Carol",
      };
      resolve({ id: userId, name: users[userId] || "Unknown" });
    }, 100);
  });
};

// Simulates fetching a score — fails for certain users
const getScore = (
  userId: string,
): Promise<{ userId: string; score: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === "U3") {
        reject("Score not available for " + userId);
      } else {
        const scores: Record<string, number> = { U1: 95, U2: 82 };
        resolve({ userId, score: scores[userId] || 0 });
      }
    }, 100);
  });
};

// Simulates fetching an order — fails for certain IDs
const getOrder = (
  orderId: string,
): Promise<{ orderId: string; total: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId === "O3" || orderId === "O5") {
        reject(`Order ${orderId} not found`);
      } else {
        const totals: Record<string, number> = { O1: 50, O2: 120, O4: 75 };
        resolve({ orderId, total: totals[orderId] || 0 });
      }
    }, 100);
  });
};

// ============================================================
// PROBLEM 1 (easy — your first async/await)
// ============================================================

// Call getUser("U1") and log the result.
// That's it. Just call it and print what comes back.
//
// Expected output: { id: "U1", name: "Alice" }
//
// Hint: You need an async function to use await.
// Then call that function.

// const callUser = async () => {
//   const user = await getUser("U1");

//   console.log(user);
// };

// callUser();

// ============================================================
// PROBLEM 2 (easy — call two things in sequence)
// ============================================================

// First get user U1, then get user U2 (one after the other).
// Return an array with both user objects.
//
// Expected output: [
//   { id: "U1", name: "Alice" },
//   { id: "U2", name: "Bob" }
// ]

const callUsers = async (): Promise<{ id: string; name: string }[]> => {
  try {
    const user1 = await getUser("U1");
    const user2 = await getUser("U2");
    return [user1, user2];
  } catch (e) {
    console.error(e);
    return [];
  }
};

console.log(await callUsers());

// ============================================================
// PROBLEM 3 (medium — try/catch)
// ============================================================

// Call getScore("U3") — this will FAIL (reject).
// Use try/catch to handle the error.
// If it succeeds, return the score object.
// If it fails, return { userId: "U3", score: -1, error: "failed" }
//
// Expected output (since U3 fails):
// { userId: "U3", score: -1, error: "failed" }

const callUser3 = async (): Promise<{
  userId: string;
  score: number;
  error?: string;
}> => {
  try {
    const score3 = await getScore("U3");
    return score3;
  } catch (e) {
    console.error(e);
    return { userId: "U3", score: -1, error: "failed" };
  }
};

// ============================================================
// PROBLEM 4 (medium — try/catch in a loop)
// ============================================================

// Given an array of user IDs: ["U1", "U2", "U3"]
// For each one, call getScore(). Some will succeed, some will fail.
// Collect the results: successes go in one array, failures in another.
// Do them ONE AT A TIME (sequentially, using a for loop).
//
// Expected output:
// {
//   successes: [
//     { userId: "U1", score: 95 },
//     { userId: "U2", score: 82 },
//   ],
//   failures: ["U3"]
// }

const callUser4 = async (): Promise<{
  successes: { userId: string; score: number }[];
  failures: string[];
}> => {
  const ids = ["U1", "U2", "U3"];
  const res: {
    successes: { userId: string; score: number }[];
    failures: string[];
  } = { successes: [], failures: [] };

  for (const id of ids) {
    try {
      const score = await getScore(id);
      res.successes.push(score);
    } catch (e) {
      res.failures.push(id);
    }
  }
  return res;
};

// ============================================================
// PROBLEM 5 (medium — Promise.all)
// ============================================================

// Promise.all takes an array of Promises and runs them ALL at the
// same time (in parallel). It waits for all of them to finish.
// If ANY one fails, the whole thing fails.
//
// Use Promise.all to fetch users U1, U2, and U3 simultaneously
// using getUser (which always succeeds).
// Return the array of all 3 user objects.
//
// Expected output: [
//   { id: "U1", name: "Alice" },
//   { id: "U2", name: "Bob" },
//   { id: "U3", name: "Carol" }
// ]
//
// Hint: Promise.all([promise1, promise2, promise3])

const callUser5 = async (): Promise<{ id: string; name: string }[]> => {
  const data: string[] = ["U1", "U2", "U3"];

  const ans = await Promise.all(data.map((id) => getUser(id)));

  return ans;
};

// ============================================================
// PROBLEM 6 (hard — Promise.allSettled)
// ============================================================

const callUser6 = async () => {
  const res: { passed: { userId: string; score: number }[]; failed: string[] } =
    { passed: [], failed: [] };

  const data: string[] = ["U1", "U2", "U3"];

  const ans = await Promise.allSettled(data.map((id) => getScore(id)));

  ans.forEach((r, i) => {
    if (r.status === "fulfilled") {
      res.passed.push(r.value);
    } else {
      res.failed.push(data[i]);
    }
  });

  return res;
};

console.log(await callUser6());

// Promise.allSettled is like Promise.all BUT it never fails.
// It runs all Promises in parallel and tells you which ones
// succeeded and which ones failed.
//
// Each result looks like:
//   { status: "fulfilled", value: ... }   — for successes
//   { status: "rejected", reason: ... }   — for failures
//
// Use Promise.allSettled to call getScore for ["U1", "U2", "U3"].
// Return an object with two arrays:
//   - passed: the score objects for users that succeeded
//   - failed: the userIds for users that failed
//
// Expected output:
// {
//   passed: [
//     { userId: "U1", score: 95 },
//     { userId: "U2", score: 82 },
//   ],
//   failed: ["U3"]
// }
