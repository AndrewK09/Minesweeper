import { HANDLE_FLAG } from './types.js';

const handleFlag = (row, col) => (dispatch, getState) => {
  const { board } = getState();
  let flagged = true;
  if (board[row][col].flagged) {
    flagged = false;
  }
  dispatch({
    type: HANDLE_FLAG,
    payload: { row: row, col: col, flagged: flagged }
  });
};

export default handleFlag;
