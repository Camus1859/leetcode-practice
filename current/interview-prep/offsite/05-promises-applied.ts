// 05 — Promises (Applied / Interview-style)
// 4 problems: medium → hard
// These combine async patterns with the array skills you already have.

export {};

// ============================================================
// Helper functions — don't modify
// ============================================================

type Venue = { venueId: string; name: string; city: string };
type Review = { venueId: string; rating: number; comment: string };

const fetchVenue = (venueId: string): Promise<Venue> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const venues: Record<string, Venue> = {
        V1: { venueId: "V1", name: "Skyline Loft", city: "NYC" },
        V2: { venueId: "V2", name: "Harbor Hall", city: "Boston" },
        V3: { venueId: "V3", name: "Pine Lodge", city: "Denver" },
      };
      if (venues[venueId]) {
        resolve(venues[venueId]);
      } else {
        reject(`Venue ${venueId} not found`);
      }
    }, 100);
  });
};

const fetchReviews = (venueId: string): Promise<Review[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const reviews: Record<string, Review[]> = {
        V1: [
          { venueId: "V1", rating: 5, comment: "Amazing space" },
          { venueId: "V1", rating: 4, comment: "Great views" },
          { venueId: "V1", rating: 5, comment: "Perfect event" },
        ],
        V2: [
          { venueId: "V2", rating: 3, comment: "Decent" },
          { venueId: "V2", rating: 2, comment: "Too small" },
        ],
        V3: [
          { venueId: "V3", rating: 4, comment: "Beautiful setting" },
          { venueId: "V3", rating: 5, comment: "Loved it" },
          { venueId: "V3", rating: 4, comment: "Great food" },
          { venueId: "V3", rating: 5, comment: "Will return" },
        ],
      };
      resolve(reviews[venueId] || []);
    }, 100);
  });
};

const fetchPrice = (venueId: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const prices: Record<string, number> = { V1: 5000, V2: 3000, V3: 4500 };
      if (prices[venueId]) {
        resolve(prices[venueId]);
      } else {
        reject(`Price not available for ${venueId}`);
      }
    }, 100);
  });
};

// ============================================================
// PROBLEM 1 (medium — fetch + transform)
// ============================================================

// Fetch venue V1, then fetch its reviews.
// Return an object with the venue name and the average rating
// rounded to 1 decimal place.
//
// Expected output:
// { name: "Skyline Loft", avgRating: 4.7 }

const fetchVenue1 = async (v1: string) => {
  const venue = await fetchVenue(v1);
  const reviews = await fetchReviews(v1);

  const obj = reviews.reduce(
    (acc, val) => {
      acc["name"] = venue.name;
      acc["avgRate"] = (acc["avgRate"] || 0) + val.rating;
      return acc;
    },
    {} as { name: string; avgRate: number },
  );

  obj.avgRate = Number((obj.avgRate / reviews.length).toFixed(1));

  return obj;
};

console.log(await fetchVenue1("V1"));
// ============================================================
// PROBLEM 2 (medium — parallel fetch + combine)
// ============================================================

// Fetch all 3 venues (V1, V2, V3) in parallel.
// For each venue, also fetch its reviews in parallel.
// Return an array of objects with each venue's name and
// review count, sorted by review count descending.
//
// Expected output:
// [
//   { name: "Pine Lodge", reviewCount: 4 },
//   { name: "Skyline Loft", reviewCount: 3 },
//   { name: "Harbor Hall", reviewCount: 2 },
// ]

const fetch3Venues = async (): Promise<
  {
    name: string;
    reviewCount: number;
  }[]
> => {
  const venues3 = ["V1", "V2", "V3"];
  let allThreeVenues;
  let allThreeReviews;

  try {
    allThreeVenues = await Promise.all(venues3.map((id) => fetchVenue(id)));
    allThreeReviews = await Promise.all(venues3.map((id) => fetchReviews(id)));
  } catch (e) {
    console.error(e);
    return [];
  }

  return allThreeVenues.map((atv, i) => {
    const reviewsAtVenue = allThreeReviews[i];

    return {
      name: atv.name,
      reviewCount: reviewsAtVenue.length,
    };
  });
};

console.log(await fetch3Venues());

// ============================================================
// PROBLEM 3 (hard — parallel with mixed success/failure)
// ============================================================

// Given venue IDs: ["V1", "V2", "V3", "V4", "V5"]
// Fetch each venue in parallel. V4 and V5 don't exist (will fail).
//
// For venues that loaded successfully, also fetch their reviews.
// Return:
//   - loaded: array of { name, city, reviewCount } for successes
//   - notFound: array of venueIds that failed
//
// Expected output:
// {
//   loaded: [
//     { name: "Skyline Loft", city: "NYC", reviewCount: 3 },
//     { name: "Harbor Hall", city: "Boston", reviewCount: 2 },
//     { name: "Pine Lodge", city: "Denver", reviewCount: 4 },
//   ],
//   notFound: ["V4", "V5"]
// }

const fetch5Venues = async (): Promise<{
  loaded: { name: string; city: string; reviewCount: number }[];
  notFound: string[];
}> => {
  const res: {
    loaded: { name: string; city: string; reviewCount: number }[];
    notFound: string[];
  } = { loaded: [], notFound: [] };

  const venueIds = ["V1", "V2", "V3", "V4", "V5"];

  const fetchedVenueIds = await Promise.allSettled(
    venueIds.map((id) => fetchVenue(id)),
  );

  for (let i = 0; i < fetchedVenueIds.length; i++) {
    const fetchedVenueId = fetchedVenueIds[i];

    if (fetchedVenueId.status === "fulfilled") {
      const reviews = await fetchReviews(fetchedVenueId.value.venueId);

      res.loaded.push({
        name: fetchedVenueId.value.name,
        city: fetchedVenueId.value.city,
        reviewCount: reviews.length,
      });
    } else {
      res.notFound.push(venueIds[i]);
    }
  }

  return res;
};

// ============================================================
// PROBLEM 4 (hard — multiple data sources + business logic)
// ============================================================

const get3Venues = async (): Promise<{name: string, city: string, avgRating: string, price: number}[]> => {
  const venueIds = ["V1", "V2", "V3"];
  const res = [];

  const venueInfo = await Promise.all(venueIds.map((id) => fetchVenue(id)));
  const reviewsInfo = await Promise.all(venueIds.map((id) => fetchReviews(id)));
  const priceInfo = await Promise.all(venueIds.map((id) => fetchPrice(id)));

  venueIds.forEach((venueId, i) => {
    const venue = venueInfo[i];
    const reviews = reviewsInfo[i];
    const price = priceInfo[i];

    const total = reviews.reduce((acc, val) => acc + val.rating, 0);
    const avgPrice = total / reviews.length;

    if (avgPrice > 4 && price < 5000) {
      res.push({
        name: venue.name,
        city: venue.city,
        avgRating: avgPrice,
        price,
      });
    }
  });

  return res
};

console.log(await get3Venues());

// For venue IDs ["V1", "V2", "V3"], fetch three things in parallel
// for each venue:
//   1. The venue info (fetchVenue)
//   2. The reviews (fetchReviews)
//   3. The price (fetchPrice)
//
// Then return only venues where:
//   - Average rating is 4.0 or higher
//   - Price is under 5000
//
// For each qualifying venue, return: name, city, avgRating
// (rounded to 1 decimal), and price.
//
// Expected output:
// [
//   { name: "Pine Lodge", city: "Denver", avgRating: 4.5, price: 4500 },
// ]
//
// (Skyline Loft has avgRating 4.7 but price 5000 — not under 5000)
// (Harbor Hall has price 3000 but avgRating 2.5 — too low)
