import { START_BOARD } from './types.js';

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
