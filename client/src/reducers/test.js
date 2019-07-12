import { START_BOARD, HANDLE_CLICK } from '../actions/types.js';

const toggleMine = (board, payRow, payCol) => {
  return board.map((row, rowInd) => {
    return row.map((col, colInd) => {
      if (rowInd === payRow && colInd === payCol) {
        let newObj = Object.assign({}, col);
        newObj.toggled = true;
        return newObj;
      }
      return col;
    });
  });
};

let toggled = {};

const toggleSurroundings = (board, payRow, payCol) => {
  let startingCol = 0;
  let endingCol = 0;
  if (startCol === 0) {
    startingCol = payCol;
    endingCol = payCol + 1;
  } else if (payCol === 9) {
    startingCol = payCol - 1;
    endingCol = payCol;
  } else {
    startingCol = payCol - 1;
    endingCol = payCol + 1;
  }

  let startingRow = 0;
  let endingRow = 0;
  if (startRow === 0) {
    startingRow = payRow;
    endingRow = payRow + 1;
  } else if (payRow === 9) {
    startingRow = payRow - 1;
    endingRow = payRow;
  } else {
    startingRow = payRow - 1;
    endingRow = payRow + 1;
  }

  const toggleMine = row => {
    if (row === endingRow + 1) {
      return;
    }
    for (let c = startingCol; c < endingCol + 1; c++) {
      if (!togged[row + ',' + col] && !board[row][col].bomb) {
        toggled[row + ',' + col] = true;
      }
      if (board[row][col].count === 0) {
        toggleSurroundings(board, row, col);
      }
    }

    toggleMine(row + 1);
  };

  toggleMine(startingRow);
};

const test = (state = {}, { type, payload }) => {
  switch (type) {
    case HANDLE_CLICK:
      if (payload.count !== 0) {
        return toggleMine(state, payload.row, payload.col);
      } else {
        toggleSurroundings(state, payload.row, payload.col);
        return toggled;
      }
    default:
      return state;
  }
};

export default test;
