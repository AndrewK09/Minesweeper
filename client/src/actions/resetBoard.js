import { RESET_BOARD } from './types.js';

const resetBoard = () => ({
  type: RESET_BOARD,
  payload: null
});

export default resetBoard;
