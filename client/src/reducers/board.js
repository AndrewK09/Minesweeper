import { START_BOARD, HANDLE_CLICK, SHOW_BOMBS } from '../actions/types.js';

const updateMine = (board, payRow, payCol, size) => {
  const { h, w } = size;
  const height = h;
  const width = w;

  let startingCol = 0;
  let endingCol = 0;
  if (payCol === 0) {
    startingCol = payCol;
    endingCol = payCol + 1;
  } else if (payCol === width - 1) {
    startingCol = payCol - 1;
    endingCol = payCol;
  } else {
    startingCol = payCol - 1;
    endingCol = payCol + 1;
  }

  let startingRow = 0;
  let endingRow = 0;
  if (payRow === 0) {
    startingRow = payRow;
    endingRow = payRow + 1;
  } else if (payRow === height - 1) {
    startingRow = payRow - 1;
    endingRow = payRow;
  } else {
    startingRow = payRow - 1;
    endingRow = payRow + 1;
  }

  let newBoard = board.slice();

  let toggleMine = row => {
    if (row === endingRow + 1) {
      return;
    } else {
      for (let c = startingCol; c < endingCol + 1; c++) {
        if (!newBoard[row][c].toggled) {
          newBoard = updateMine(newBoard, row, c, size);
        }
      }
      toggleMine(row + 1);
    }
  };

  let mine = newBoard[payRow][payCol];
  if (mine.count === 0 && mine.toggled === false) {
    newBoard[payRow][payCol].toggled = true;
    toggleMine(startingRow);
  }
  newBoard[payRow][payCol].toggled = true;
  return newBoard;
};

const handleLoss = board => {
  return board.map(row => {
    return row.map(col => {
      if (col.bomb) {
        col.toggled = true;
      }
      return col;
    });
  });
};

const startBoard = (state = [], { type, payload }) => {
  switch (type) {
    case START_BOARD:
      return payload;
    case HANDLE_CLICK:
      return updateMine(state, payload.row, payload.col, payload.size);
    case SHOW_BOMBS:
      return handleLoss(state);
    default:
      return state;
  }
};

export default startBoard;
