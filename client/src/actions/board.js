import { START_BOARD } from './types.js';

const configureCounts = (board, startRow, startCol, h, w) => {
  //pass in board size, height and width
  const height = h;
  const width = w;

  let startingCol = 0;
  let endingCol = 0;
  if (startCol === 0) {
    startingCol = startCol;
    endingCol = startCol + 1;
  } else if (startCol === width - 1) {
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
  } else if (startRow === height - 1) {
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

const makeBoard = (h, w, b) => {
  let board = [];
  for (var i = 0; i < h; i++) {
    board[i] = [];
    for (var j = 0; j < w; j++) {
      board[i][j] = { bomb: false, count: 0, toggled: false, flagged: false };
    }
  }

  var bombs = 0;
  const makeBombs = () => {
    let row = Math.floor(Math.random() * Math.floor(h));
    let col = Math.floor(Math.random() * Math.floor(w));
    let location = board[row][col];

    if (location.bomb === false) {
      configureCounts(board, row, col, h, w);
      board[row][col].bomb = true;
      bombs++;
    } else {
      makeBombs();
    }
  };
  while (bombs < b) {
    makeBombs();
  }
  return board;
};

const startBoard = () => (dispatch, getState) => {
  const { h, w, b } = getState().size;
  dispatch({
    type: START_BOARD,
    payload: makeBoard(h, w, b)
  });
};

// const startBoard = (h, w, b) => {
//   return {
//     type: START_BOARD,
//     payload: makeBoard(h, w, b)
//   };
// };

export default startBoard;
