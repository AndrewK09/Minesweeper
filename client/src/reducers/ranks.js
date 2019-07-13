import { GET_RANKS } from '../actions/types.js';

const ranks = (state = [], { type, payload }) => {
  switch (type) {
    case GET_RANKS:
      return payload;
    default:
      return state;
  }
};

export default ranks;
