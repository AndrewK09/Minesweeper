import { HANDLE_CLICK } from './types.js';

const handleClick = (row, col) => (dispatch, getState) => {
  dispatch({
    type: HANDLE_CLICK,
    payload: { row, col }
  });
};

export default handleClick;
