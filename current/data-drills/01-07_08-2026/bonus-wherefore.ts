// Bonus Problem: Wherefore Art Thou
// Source: FreeCodeCamp

export {};

// ============================================================
// PROBLEM
// ============================================================

type ObjType = {
  [key: string]: any;
};

const collection1 = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" },
];
const source1 = { last: "Capulet" };

const collection2 = [
  { apple: 1, bat: 2 },
  { bat: 2 },
  { apple: 1, bat: 2, cookie: 2 },
];
const source2 = { apple: 1, bat: 2 };

const collection3 = [
  { apple: 1, bat: 2 },
  { apple: 1 },
  { apple: 1, bat: 2, cookie: 2 },
];
const source3 = { apple: 1 };

const collection4 = [
  { apple: 1, bat: 2 },
  { apple: 1 },
  { apple: 1, bat: 2, cookie: 2 },
  { bat: 2 },
];
const source4 = { apple: 1, cookie: 2 };

const whatIsInAName = (collection1: ObjType[], source1: ObjType): ObjType[] => {
  return collection1.filter((c) => {
    // for(const [key, value] of Object.entries(source1)){
    //   if(c[key] === value){
    // so this will give me true if at least one key/value pair in source exist but i need all key/value
    // pair in source to exist before i return the full c object
    //   }
    // }

    return Object.entries(source1).every(([key, value]) => c[key] === value);
  });
};
console.log(whatIsInAName(collection3, source3));

// Task: Write a function that looks through an array of objects (collection)
// and returns an array of all objects that have ALL matching name/value pairs
// from the source object.
//
// Every key/value in source must exist in the object for it to be included.
// Objects can have extra properties beyond what's in source - that's fine.

// Expected outputs:
// whatIsInAName(collection1, source1) → [{ first: "Tybalt", last: "Capulet" }]
// whatIsInAName(collection2, source2) → [{ apple: 1, bat: 2 }, { apple: 1, bat: 2, cookie: 2 }]
// whatIsInAName(collection3, source3) → [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }]
// whatIsInAName(collection4, source4) → [{ apple: 1, bat: 2, cookie: 2 }]
