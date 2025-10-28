// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const col: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const subBox: { [key: string]: Set<string> } = {};

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const cell = board[r][c];
      const subBoxIndex =
        Math.floor(r / 3).toString() + Math.floor(c / 3).toString();

      if (cell === ".") continue;
      if (rows[r].has(cell)) return false;
      if (col[c].has(cell)) return false;
      if (subBox[subBoxIndex] && subBox[subBoxIndex].has(cell)) return false;

      if (!subBox[subBoxIndex]) subBox[subBoxIndex] = new Set();

      rows[r].add(cell);
      col[c].add(cell);
      subBox[subBoxIndex].add(cell);
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
