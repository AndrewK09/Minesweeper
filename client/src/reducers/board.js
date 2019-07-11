import { START_BOARD } from '../actions/types.js';

const startBoard = (state = [], { type, payload }) => {
  switch (type) {
    case START_BOARD:
      return payload;
    default:
      return state;
  }
};

export default startBoard;
