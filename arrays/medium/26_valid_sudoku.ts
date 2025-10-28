// https://leetcode.com/problems/valid-sudoku/description/

function isValidSudoku(board: string[][]): boolean {
  let rowsSet: { [key: number]: Set<string> } = {};
  let colsSet: { [key: number]: Set<string> } = {};
  let boxSet: { [key: string]: Set<string> } = {};

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === ".") {
        continue;
      }
      const valToCheck = board[r][c];

      const boxKey =
        Math.floor(r / 3).toString() + Math.floor(c / 3).toString();

      if (
        rowsSet[r]?.has(valToCheck) ||
        colsSet[c]?.has(valToCheck) ||
        boxSet[boxKey]?.has(valToCheck)
      ) {
        return false;
      }


      rowsSet[r].add(valToCheck);
      colsSet[c].add(valToCheck);
      boxSet[boxKey].add(valToCheck);
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
