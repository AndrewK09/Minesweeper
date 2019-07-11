import { START_BOARD } from './types.js';

const configureCounts = (board, startRow, startCol) => {
  const addCount = row => {
    if (row === startRow + 3) {
      return;
    }
    for (let c = startCol; c < startCol + 3; c++) {
      if (board[row][c]) {
        board[row][c].count++;
      }
    }
    addCount(row + 1);
  };

  addCount(startRow);
};

const makeBoard = (size, num) => {
  let board = [];
  for (var i = 0; i < size; i++) {
    board[i] = [];
    for (var j = 0; j < num; j++) {
      board[i][j] = { bomb: false, count: 0 };
    }
  }

  var bombs = 0;
  const makeBombs = () => {
    let row = Math.floor(Math.random() * Math.floor(num));
    let col = Math.floor(Math.random() * Math.floor(num));
    let location = board[row][col];

    if (location.bomb === false) {
      configureCounts(board, row - 1, col - 1);
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
