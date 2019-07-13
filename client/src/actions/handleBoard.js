import { HANDLE_BOARD } from './types.js';
import startBoard from './board.js';
const handleBoard = (height, width, bombs) => (dispatch, getState) => {
  dispatch({
    type: HANDLE_BOARD,
    payload: {
      h: height,
      w: width,
      b: bombs
    }
  });
  dispatch(startBoard());
};

export default handleBoard;
