import { HANDLE_BOARD } from '../actions/types.js';

const handleBoard = (state = { h: 10, w: 10, b: 10 }, { type, payload }) => {
  switch (type) {
    case HANDLE_BOARD:
      let size = Object.assign({}, state);
      const { h, w, b } = payload;
      size.h = h;
      size.w = w;
      size.b = b;
      return size;
    default:
      return state;
  }
};

export default handleBoard;
