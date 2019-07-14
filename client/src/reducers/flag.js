import { TOGGLE_FLAG } from '../actions/types.js';

const toggleFlag = (state = false, { type, payload }) => {
  switch (type) {
    case TOGGLE_FLAG:
      if (payload) {
        return false;
      }
      return !state;
    default:
      return state;
  }
};

export default toggleFlag;
