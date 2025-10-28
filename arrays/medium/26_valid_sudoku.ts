// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    const rowSet: Set<string> = new Set();

    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell === ".") continue;
      if (rowSet.has(cell)) return false;
      rowSet.add(cell);
    }
  }

  for (let col = 0; col < 9; col++) {
    const colSet: Set<string> = new Set();
    for (let row = 0; row < 9; row++) {
      const cell = board[row][col];
      if (cell === ".") continue;
      if (colSet.has(cell)) return false;
      colSet.add(cell);
    }
  }

  const boxSet: Set<string>[] = [];
  for (let i = 0; i < 9; i++) {
    boxSet.push(new Set());
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const cell = board[row][col];
      if (cell === ".") continue;

      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (boxSet[boxIndex].has(cell)) return false;
      boxSet[boxIndex].add(cell);
    }
  }
  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// true

// const board2 =
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]

// false

console.log(isValidSudoku(board));
