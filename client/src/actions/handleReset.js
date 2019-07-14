import { HANDLE_RESET, HANDLE_TIMER } from './types.js';
import startBoard from './board.js';
import toggleFlag from './flag.js';

const handleReset = () => (dispatch, getState) => {
  const store = getState();
  dispatch({
    type: HANDLE_RESET,
    payload: true
  });
  //reset timer
  dispatch({
    type: HANDLE_TIMER,
    payload: { sec: 0, count: false }
  });

  dispatch(startBoard());
  dispatch(toggleFlag(true));
};

export default handleReset;
