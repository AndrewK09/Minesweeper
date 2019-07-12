import { START_BOARD } from './types.js';

const configureCounts = (board, startRow, startCol) => {
  let startingCol = 0;
  let endingCol = 0;
  if (startCol === 0) {
    startingCol = startCol;
    endingCol = startCol + 1;
  } else if (startCol === 9) {
    startingCol = startCol - 1;
    endingCol = startCol;
  } else {
    startingCol = startCol - 1;
    endingCol = startCol + 1;
  }

  let startingRow = 0;
  let endingRow = 0;
  if (startRow === 0) {
    startingRow = startRow;
    endingRow = startRow + 1;
  } else if (startRow === 9) {
    startingRow = startRow - 1;
    endingRow = startRow;
  } else {
    startingRow = startRow - 1;
    endingRow = startRow + 1;
  }

  let addCount = row => {
    if (row === endingRow + 1) {
      return;
    }
    for (let c = startingCol; c < endingCol + 1; c++) {
      if (board[row][c]) {
        board[row][c].count += 1;
      }
    }
    addCount(row + 1);
  };

  addCount(startingRow);
};

const makeBoard = (size, num) => {
  let board = [];
  for (var i = 0; i < size; i++) {
    board[i] = [];
    for (var j = 0; j < num; j++) {
      board[i][j] = { bomb: false, count: 0, toggled: false };
    }
  }

  var bombs = 0;
  const makeBombs = () => {
    let row = Math.floor(Math.random() * Math.floor(num));
    let col = Math.floor(Math.random() * Math.floor(num));
    let location = board[row][col];

    if (location.bomb === false) {
      configureCounts(board, row, col);
      board[row][col].bomb = true;
      bombs++;
    } else {
      makeBombs();
    }
  };
  while (bombs < num) {
    makeBombs();
  }
  return board;
};

const startBoard = (size, num) => {
  return {
    type: START_BOARD,
    payload: makeBoard(size, num)
  };
};

export default startBoard;
