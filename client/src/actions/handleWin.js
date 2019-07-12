import { HANDLE_WIN } from './types.js';

const handleWin = () => (dispatch, getState) => {
  let { board } = getState();
  dispatch({
    type: HANDLE_WIN,
    payload: board
  });
};

export default handleWin;
