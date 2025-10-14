You are my “Object Manipulation Drill Generator + Coach” for JavaScript/TypeScript.

# File Management
- Maintain a single markdown file called **Object-Drills.md**.
- If the file does not exist, create it with the heading: `# Object & JSON Manipulation Drills`.
- Each new problem gets appended as a new dated section.
- Each section contains:
  1. **Problem** description
  2. **Constraints**
  3. **Function Signature**
  4. **Examples**
  5. **Hidden Edge Cases** (described, not revealed)
  6. **Scaffold** (solution.ts + tests.ts code ready to copy into my debugger)
  7. **After-Action Review (AAR)** template at the end

# Daily Flow
- When I say: `read Object-Drills.md and give me today’s problem`
  1. Read Object-Drills.md and find my latest entry.
  2. If it’s Day 1, start with an easy shallow object filter problem.
  3. If I completed the last one, generate the next harder problem in the difficulty ladder (shallow → arrays → nested → transforms → grouping → joins → validation).
  4. Append it as a new dated section in Object-Drills.md.
  5. Include a ready-to-run scaffold (solution.ts + tests.ts) at the bottom of that section.
- When I say: `completed the problem please read .md`
  1. Read Object-Drills.md.
  2. Find the latest section’s AAR template.
  3. Summarize my performance and log it under that day’s AAR.
  4. Mark that day as “completed”.
  5. Wait until I request the next problem.

# Scaffold Rules
- `solution.ts` should contain only the exported empty function with proper types.
- `tests.ts` should contain visible test cases using `assert.deepEqual` or `assert.equal` and a test runner I can run with `npx tsx tests.ts`.
- Keep scaffold minimal but runnable.

# Difficulty Ladder
1. Shallow key/value filters.
2. Objects with arrays of primitives (subset).
3. Two-level nesting.
4. Transformations/normalization.
5. Grouping & aggregation.
6. Multi-criteria queries.
7. Deep merges with conflict resolution.
8. Joins across object arrays.
9. Sorting complex keys.
10. Schema validation.

Always climb one step when I complete a problem; repeat the same step if I struggled.

# Starting Today
Append **Day 1 (today's date)** problem immediately into Object-Drills.md with everything I need.
Stop after that — I'll solve it and then tell you when I'm done.

# Object & JSON Manipulation Drills

## Day 1 - 2025-09-20 - Shallow Property Filter

### Problem
Create a function that filters an object's properties based on value conditions. Given an object and a filter criteria, return a new object containing only properties whose values match the specified conditions.

### Constraints
- Language: TypeScript (no libraries)
- Don't mutate the input object
- Time: O(n) where n is number of properties
- Handle primitive values only (string, number, boolean, null, undefined)

### Function Signature
```typescript
export function filterProperties(
  obj: Record<string, any>,
  criteria: {
    type?: 'string' | 'number' | 'boolean' | 'null' | 'undefined';
    min?: number;  // for numbers only
    max?: number;  // for numbers only
    includes?: string;  // for strings only
  }
): Record<string, any>
```

### Examples
```typescript
// Example 1: Filter by type
filterProperties({ a: 1, b: "hello", c: true }, { type: 'number' })
// Returns: { a: 1 }

// Example 2: Filter numbers in range
filterProperties({ x: 5, y: 15, z: 25 }, { type: 'number', min: 10, max: 20 })
// Returns: { y: 15 }

// Example 3: Filter strings containing substring
filterProperties({ name: "John", city: "New York", id: "user123" }, { type: 'string', includes: "user" })
// Returns: { id: "user123" }
```

### Hidden Edge Cases (not in tests)
1. Empty criteria object should return a copy of all properties
2. Properties with `NaN` values should be type 'number' but fail min/max checks
3. String comparison with `includes` should be case-sensitive

### Scaffold

**solution.ts:**
```typescript
export function filterProperties(
  obj: Record<string, any>,
  criteria: {
    type?: 'string' | 'number' | 'boolean' | 'null' | 'undefined';
    min?: number;
    max?: number;
    includes?: string;
  }
): Record<string, any> {
  // Your implementation here
  return {};
}
```

**tests.ts:**
```typescript
import assert from 'assert';
import { filterProperties } from './solution';

// Test 1: Filter by type
const test1 = filterProperties({ a: 1, b: "hello", c: true }, { type: 'number' });
assert.deepEqual(test1, { a: 1 }, 'Test 1 failed: Filter by type');

// Test 2: Filter numbers in range
const test2 = filterProperties({ x: 5, y: 15, z: 25 }, { type: 'number', min: 10, max: 20 });
assert.deepEqual(test2, { y: 15 }, 'Test 2 failed: Filter numbers in range');

// Test 3: Filter strings containing substring
const test3 = filterProperties({ name: "John", city: "New York", id: "user123" }, { type: 'string', includes: "user" });
assert.deepEqual(test3, { id: "user123" }, 'Test 3 failed: Filter strings with substring');

// Test 4: Mixed types with number filter
const test4 = filterProperties({ a: 10, b: null, c: "test", d: 30 }, { type: 'number', min: 20 });
assert.deepEqual(test4, { d: 30 }, 'Test 4 failed: Mixed types with min filter');

// Test 5: Handle null and undefined types
const test5 = filterProperties({ a: null, b: undefined, c: 0 }, { type: 'null' });
assert.deepEqual(test5, { a: null }, 'Test 5 failed: Handle null type');

// Test 6: Empty result when no matches
const test6 = filterProperties({ x: "a", y: "b" }, { type: 'number' });
assert.deepEqual(test6, {}, 'Test 6 failed: Empty result');

console.log('All tests passed!');
```

### After-Action Review (AAR)
**Status:** Not Started
**Date Completed:** ___
**Time Taken:** ___
**What went well:**
-

**What was challenging:**
-

**Key insight learned:**
-
