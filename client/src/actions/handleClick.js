import { HANDLE_CLICK } from './types.js';

const handleClick = (row, col) => ({
  type: HANDLE_CLICK,
  payload: { row, col }
});

export default handleClick;
