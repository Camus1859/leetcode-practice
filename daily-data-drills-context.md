# Daily Data Manipulation Practice - Context File

## Current Progress
```yaml
current_week: 1
current_difficulty: "beginner"  # beginner -> intermediate -> advanced
last_session_date: "2025-10-13"
total_sessions_completed: 1
consecutive_successful_days: 1
```

## Session History
```yaml
sessions:
  - date: "2025-10-13"
    problems_completed: 3/3
    time_taken_minutes: 28
    problem_times: [15, 7, 6]
    struggled_with: ["filter vs map distinction", "accumulation direction", "comparison operators"]
    strengths: ["quick learning curve", "type definitions", "map with spread operator"]
    ready_for_harder: false
```

## System Overview

### What We're Practicing
Pure data manipulation problems:
- Given data (objects, arrays, nested structures)
- Write TypeScript types
- Write functions that transform/validate/manipulate the data
- Return specific output shapes

**NO**: Dates, APIs, external libraries, or domain-specific knowledge
**YES**: Arrays, objects, filtering, mapping, reducing, grouping, transforming

### Daily Structure
- **3 problems per day** (30 minutes total)
- **10 minutes per problem**
- Each problem includes:
  - Input data structure
  - Clear requirements
  - Expected output format
  - 2-3 test cases

### Difficulty Progression (Weekly)
- **Week 1-2 (Beginner):** Simple operations on flat structures
- **Week 3-4 (Intermediate):** Nested objects, multiple conditions
- **Week 5+ (Advanced):** Complex transformations, performance considerations

### Problem Types to Rotate Through

**Type 1: Object Manipulation**
```typescript
// Given users array, add/remove/modify properties based on conditions
// Example: If user.age > 18, add isAdult: true, else remove access property
```

**Type 2: Data Filtering & Grouping**
```typescript
// Filter data by multiple conditions and group by property
// Example: Group products by category where price > 50
```

**Type 3: Data Transformation**
```typescript
// Reshape data from one structure to another
// Example: Flatten nested structure or create nested from flat
```

**Type 4: Data Validation & Cleaning**
```typescript
// Check data integrity and clean/fix issues
// Example: Remove duplicates, fill missing values, validate required fields
```

**Type 5: Aggregation & Calculation**
```typescript
// Calculate totals, averages, or other metrics
// Example: Calculate total by category with discounts applied
```

## How to Use This System

### Starting a New Session
1. Say: "Read daily-data-drills-context.md"
2. Say: "Generate today's 3 problems"
3. Claude will:
   - Check your current week/difficulty
   - Generate 3 problems appropriate to your level
   - Create test cases
   - Start informal timer reminder

### Continuing Previous Session
1. Say: "Read daily-data-drills-context.md"
2. Say: "Show me yesterday's problems"
3. Claude will retrieve and display them

### After Each Session
Claude will:
1. **Create a detailed review file**: `YYYY-MM-DD-review.md` containing:
   - Time spent on each problem
   - Original code attempt (with issues highlighted)
   - Final working solution
   - Specific struggles/confusion for each problem
   - Patterns learned
   - General session summary
   - Comparison to previous sessions (when available)
   - Strengths demonstrated
   - Recommendations for next session

2. **Update this context file's Session History** with:
```yaml
- date: "2025-10-13"
  problems_completed: 3/3
  time_taken_minutes: 28
  problem_times: [15, 7, 6]
  struggled_with: ["filter vs map distinction", "accumulation direction"]
  strengths: ["quick learning curve", "type definitions"]
  ready_for_harder: false
```

## Problem Template

```typescript
// Problem 1: [Descriptive Name]
// Difficulty: ⭐⭐ (2/5)

// Given this data:
const data = [
  { id: 1, name: "Alice", score: 85, active: true },
  { id: 2, name: "Bob", score: 92, active: false },
  // ... more items
];

// Task: [Clear description of what to do]
// Example: "Filter active users with score > 80 and add a 'grade' property"

// Define the types:
type InputItem = // TODO: Define this
type OutputItem = // TODO: Define this

// Write the function:
function processData(items: InputItem[]): OutputItem[] {
  // TODO: Implement
}

// Test cases:
console.log(processData([...])) // Expected: [...]
console.log(processData([...])) // Expected: [...]
```

## Rules for Claude

### Problem Generation Rules:
1. **Never include dates/timestamps in data** - Use simple numbers, strings, booleans
2. **Keep data realistic but simple** - Use names, products, orders, users
3. **Focus on manipulation patterns** - Not domain knowledge
4. **Increase complexity gradually** - Add one new concept per week max
5. **DO NOT provide function signatures** - User must figure out everything
6. **DO NOT provide type names** - User must name their own types
7. **DO NOT hint at function structure** - Just give the task and expected output
8. **Test cases must be comprehensive** - Include edge cases
9. **Track what patterns were used** - To ensure variety

### Session Review Rules:
1. **Always create TWO files per session**:
   - `YYYY-MM-DD.ts` - The problems file
   - `YYYY-MM-DD-review.md` - Detailed analysis and review

2. **Track for each problem**:
   - Exact time taken (in minutes)
   - Original code that had issues (copy verbatim from their attempts)
   - Issues identified in original code
   - Final working solution
   - Key learning/pattern from that problem

3. **Session summary must include**:
   - Total time for all 3 problems
   - What patterns were practiced
   - Specific struggles with technical concepts
   - Strengths demonstrated
   - Comparison to previous day's performance (when available)
   - Comparison to week's average (when available)
   - Clear recommendation: continue current difficulty or move up

4. **Update context file** with condensed session entry in Session History

5. **Progress tracking philosophy**:
   - Focus on learning patterns, not just "getting it right"
   - Celebrate improvements in speed and understanding
   - Track recurring struggles to identify learning gaps
   - Note when ready to increase difficulty (typically after 1-2 weeks)

## CRITICAL: Problem Presentation Rules

When generating problems, Claude must:
- **ONLY provide**: The input data, a high-level task description, and expected outputs
- **NEVER provide**: Function names, type names, function signatures, or implementation hints
- **NEVER use**: "Define the types:", "Write the function:", or similar prompts
- **Format like this**:
  ```
  // Here's your data:
  const data = [...]
  
  // Task: [What they want done in plain English]
  
  // Expected results:
  // When given [...] → should return [...]
  // When given [...] → should return [...]
  ```

## Weekly Difficulty Examples

### Week 1-2 (Beginner)
- Filter array by single condition
- Map to add/remove properties
- Find/some/every operations
- Simple reduce for counting/summing

### Week 3-4 (Intermediate)  
- Filter by multiple conditions
- Group by property using reduce
- Nested object navigation
- Combine multiple operations

### Week 5+ (Advanced)
- Recursive operations on nested structures
- Performance optimization (mentioning O(n) vs O(n²))
- Complex state transformations
- Multiple data source joins

## Important Notes

- **This file is the single source of truth** - Always read this first
- **Claude updates this file after each session** - Progress is tracked here
- **Problems focus purely on data manipulation** - No external concerns
- **Difficulty increases weekly, not daily** - Build confidence gradually

---

Ready to start? Say "Read daily-data-drills-context.md" then "Generate today's 3 problems".