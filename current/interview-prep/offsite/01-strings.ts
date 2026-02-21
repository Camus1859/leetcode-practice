// 01 — Strings
// 5 problems: easy → medium
// Topics: split, join, trim, toLowerCase, toUpperCase, includes, startsWith, template literals

export {};

// ============================================================
// PROBLEM 1 (easy — confirm basics)
// ============================================================

// Given a sentence, return the number of words in it.
// Words are separated by spaces. Ignore extra whitespace.
//
// Examples:
//   countWords("hello world")        → 2
//   countWords("  one  two  three ") → 3
//   countWords("")                   → 0
//   countWords("   ")                → 0

const countWords = (str: string): number => {
  const res = [];

  str.split(" ").forEach((s) => {
    if (s.length > 0) {
      res.push(s);
    }
  });

  return res.length;
};

console.log(countWords("hello world"));
console.log(countWords("  one  two  three "));
console.log(countWords(""));
console.log(countWords("         "));
// ============================================================
// PROBLEM 2 (easy — confirm basics)
// ============================================================

// Given a string, capitalize the first letter of every word
// and lowercase the rest. Words are separated by single spaces.
//
// Examples:
//   titleCase("hello world")       → "Hello World"
//   titleCase("javaScript is FUN") → "Javascript Is Fun"
//   titleCase("a")                 → "A"

const capitilizeFirstLetter = (str: string) => {
  const wordsInArr = str.split(" ");
  const res = [];

  for (const word of wordsInArr) {
    if (word === "") continue;

    const capitalized =
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    res.push(capitalized);
  }

  return res.join(" ");
};

console.log(capitilizeFirstLetter("hello world"));
// console.log(capitilizeFirstLetter("javaScript is FUN"));
// console.log(capitilizeFirstLetter("a"));

// ============================================================
// PROBLEM 3 (medium — string parsing)
// ============================================================

// You receive configuration strings in "key=value" format,
// separated by semicolons. Parse them into an object.
// Trim whitespace from both keys and values.
// Keys should be lowercase.
//
// Example:
//   parseConfig("theme=dark ; fontSize=14 ; Language = EN")
//   → { theme: "dark", fontsize: "14", language: "EN" }
//
//   parseConfig("")
//   → {}

const parseConfig = (str: string) => {
  if (str === "") return {};

  const arrOfKeyValue = str.split(";");
  const res: { [key: string]: string } = {};

  for (const keyValue of arrOfKeyValue) {
    const key = keyValue.split("=")[0].toLowerCase().trim();
    const value = keyValue.split("=")[1].trim();
    res[key] = value;
  }
  return res;
};

console.log(parseConfig("theme=dark ; fontSize=14 ; Language = EN"));

// ============================================================
// PROBLEM 4 (medium — build a string)
// ============================================================

// Given a product name, create a URL-friendly slug:
//   - Convert to lowercase
//   - Replace spaces with hyphens
//   - Remove any character that isn't a letter, number, or hyphen
//   - Collapse multiple hyphens into one
//   - Remove leading/trailing hyphens
//
// Examples:
//   slugify("Skyline Loft — NYC")    → "skyline-loft-nyc"
//   slugify("  Team   Building!! ")  → "team-building"
//   slugify("Event #42: The Finale") → "event-42-the-finale"

const slugify = (str: string) => {
  if (str === "") return;

  const cleanStr = str
    .replace(/[^a-zA-Z0-9-]/g, " ")
    .trim()
    .toLowerCase();

  const arrStr = cleanStr.split(" ");

  const cleanedArrStr = arrStr.filter((c) => c !== "");

  return cleanedArrStr.join("-");
};

console.log(slugify("Skyline Loft — NYC"));
console.log(slugify("  Team   Building!! "));
console.log(slugify("Event #42: The Finale"));

// ============================================================
// PROBLEM 5 (medium — combine string methods)
// ============================================================

// You get an array of email addresses, some messy. Return only
// the valid-looking ones (contain exactly one "@" and at least
// one "." after the "@"), normalized to lowercase and trimmed.
// Remove duplicates (after normalizing).
//
// Examples:
//   cleanEmails([
//     "  Alice@Gmail.COM ",
//     "bob@company.co",
//     "invalid-email",
//     "alice@gmail.com",
//     "  NO-AT-SIGN.com  ",
//     "double@@at.com",
//     "carol@site.org",
//   ])
//   → ["alice@gmail.com", "bob@company.co", "carol@site.org"]

const cleanEmails = (emails: string[]) => {
  let countForAt = 0;
  let countForDot = 0;
  let isDotAfterAt = false;
  const res = [];

  for (const email of emails) {
    countForAt = 0;
    countForDot = 0;
    isDotAfterAt = false;
    for (const char of email) {
      if (char === "@") {
        countForAt++;
      }

      if (char === ".") {
        countForDot++;
      }
    }

    const indexOfAt = email.indexOf("@");
    const indexOfDot = email.indexOf(".");

    isDotAfterAt = indexOfAt < indexOfDot;

    if (countForAt === 1 && countForDot > 0 && isDotAfterAt) {
      res.push(email.toLowerCase().trim());
    }
  }

  return [...new Set(res)];
};

// Main test case
console.log(
  cleanEmails([
    "  Alice@Gmail.COM ",
    "bob@company.co",
    "invalid-email",
    "alice@gmail.com",
    "  NO-AT-SIGN.com  ",
    "double@@at.com",
    "carol@site.org",
  ]),
);
// → ["alice@gmail.com", "bob@company.co", "carol@site.org"]

// // Edge cases
// console.log(cleanEmails([]));
// // → []

// console.log(cleanEmails(["@missing-local.com", "no-dot@domaincom"]));
// // → [] (first has no local part, second has no "." after @)

// console.log(cleanEmails(["  TEST@Test.COM  ", "test@test.com"]));
// // → ["test@test.com"] (duplicates after normalizing)
