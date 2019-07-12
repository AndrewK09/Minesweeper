import { HANDLE_RESET } from './types.js';
import startBoard from './board.js';

const handleReset = () => (dispatch, getState) => {
  const store = getState();
  dispatch({
    type: HANDLE_RESET,
    payload: true
  });
  dispatch(startBoard(10, 10));
};

export default handleReset;
