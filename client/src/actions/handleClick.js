import { HANDLE_CLICK } from './types.js';

const handleClick = (row, col) => (dispatch, getStore) => {
  const { size } = getStore();
  dispatch({
    type: HANDLE_CLICK,
    payload: { row, col, size }
  });
};

// const handleClick = (row, col) => ({
//   type: HANDLE_CLICK,
//   payload: { row, col }
// });

export default handleClick;
