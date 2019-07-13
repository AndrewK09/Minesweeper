import { HANDLE_TIMER } from './types.js';

const handleTimer = time => (dispatch, getState) => {
  dispatch({ type: HANDLE_TIMER, payload: time });
};

export default handleTimer;
