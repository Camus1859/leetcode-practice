// Simulated 45-minute live coding session
// 3 problems: ~10 min, ~15 min, ~20 min

export {};

// ============================================================
// PROBLEM 1 (~10 min) — String + Array manipulation
// ============================================================

// You're building a search feature for a marketplace. Users type
// messy search queries and you need to normalize them.
//
// Given a search string, return an array of unique, lowercase
// keywords (no duplicates, no extra whitespace, no empty strings).
// The keywords should be in the order they first appeared.
//
// Example:
//   normalizeSearch("  Venue  venue   Outdoor   Catering  outdoor ")
//   → ["venue", "outdoor", "catering"]
//
//   normalizeSearch("  ")
//   → []
//
//   normalizeSearch("Team Building  team   BUILDING  retreat")
//   → ["team", "building", "retreat"]

const normalizeSearch = (query: string): string[] => {
  const res: string[] = [];

  const words = query.split(" ");

  for (const word of words) {
    if (word === "") continue;

    if (res.includes(word.toLowerCase())) continue;
    res.push(word.toLowerCase());
  }
  return res;
};

console.log(normalizeSearch("  Venue  venue   Outdoor   Catering  outdoor "));

// ============================================================
// PROBLEM 2 (~15 min) — Array cross-reference + data shaping
// ============================================================

// You have a list of event bookings and a list of venues. Each
// booking references a venueId. Some venues may have multiple
// bookings, some may have none.
//
// Return a summary for each venue that has at least one booking,
// showing the venue name, total number of bookings, and total
// revenue (sum of all booking amounts). Sort by total revenue
// descending (highest first).

type Venue = {
  venueId: string;
  name: string;
  city: string;
};

type Booking = {
  bookingId: string;
  venueId: string;
  amount: number;
  date: string;
};

const venues: Venue[] = [
  { venueId: "V1", name: "Skyline Loft", city: "New York" },
  { venueId: "V2", name: "Harbor Hall", city: "Boston" },
  { venueId: "V3", name: "Pine Lodge", city: "Denver" },
  { venueId: "V4", name: "The Greenhouse", city: "Austin" },
];

const bookings: Booking[] = [
  { bookingId: "B1", venueId: "V1", amount: 5000, date: "2026-01-15" },
  { bookingId: "B2", venueId: "V1", amount: 7500, date: "2026-02-10" },
  { bookingId: "B3", venueId: "V2", amount: 3000, date: "2026-01-20" },
  { bookingId: "B4", venueId: "V3", amount: 4500, date: "2026-03-01" },
  { bookingId: "B5", venueId: "V1", amount: 6000, date: "2026-03-15" },
  { bookingId: "B6", venueId: "V3", amount: 4000, date: "2026-02-28" },
];

// Expected output:
// [
//   { name: "Skyline Loft", bookingCount: 3, totalRevenue: 18500 },
//   { name: "Pine Lodge", bookingCount: 2, totalRevenue: 8500 },
//   { name: "Harbor Hall", bookingCount: 1, totalRevenue: 3000 },
// ]
// (Note: "The Greenhouse" has 0 bookings, so it's excluded)

const venueSummary = (venues: Venue[], bookings: Booking[]) => {
  venues
    .map((venue) => {
      const bookingCount = bookings.filter((b) => b.venueId === venue.venueId);
      const total = bookingCount.reduce((acc, val) => acc + val.amount, 0);

      return {
        name: venue.name,
        count: bookingCount.length,
        total,
      };
    })
    .filter((r) => r.total > 0)
    .sort((a, b) => b.total - a.total);
};

console.log(venueSummary(venues, bookings));

// ============================================================
// PROBLEM 3 (~20 min) — Promises / Async
// ============================================================

// You're fetching event details from multiple APIs. Each fetch
// might succeed or fail independently. You need to collect all
// results — both successes and failures — and return a summary.
//
// Given an array of event IDs, "fetch" each one using the
// provided fetchEvent function. It returns a Promise that either
// resolves with event data or rejects with an error message.
//
// Return an object with:
//   - successful: array of event objects that loaded
//   - failed: array of { eventId, error } for ones that failed
//
// IMPORTANT: Fetch all events in parallel (not one at a time).
// Do NOT let one failure stop the others from loading.

type Event = {
  eventId: string;
  title: string;
};

// Simulated API — don't modify this
const fetchEvent = (eventId: string): Promise<Event> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (eventId === "E2" || eventId === "E5") {
        reject(`Event ${eventId} not found`);
      } else {
        resolve({ eventId, title: `Event ${eventId} Details` });
      }
    }, 100);
  });
};

// Your function:
const loadEvents = async (
  eventIds: string[],
): Promise<{
  successful: Event[];
  failed: { eventId: string; error: string }[];
}> => {
  // your code here
};

// Test it:
// loadEvents(["E1", "E2", "E3", "E4", "E5"]).then(console.log);
//
// Expected output:
// {
//   successful: [
//     { eventId: "E1", title: "Event E1 Details" },
//     { eventId: "E3", title: "Event E3 Details" },
//     { eventId: "E4", title: "Event E4 Details" },
//   ],
//   failed: [
//     { eventId: "E2", error: "Event E2 not found" },
//     { eventId: "E5", error: "Event E5 not found" },
//   ]
// }
